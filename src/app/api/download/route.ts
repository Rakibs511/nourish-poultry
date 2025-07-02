import { NextRequest, NextResponse } from 'next/server';
import { createReadStream, statSync } from 'fs';
import { join, relative } from 'path';
import { Readable } from 'stream';

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const filePath = url.searchParams.get('file');

        if (!filePath) {
            return new NextResponse('File path is required', { status: 400 });
        }

        // Remove any leading slashes and ensure we're only accessing files in public
        const cleanPath = filePath.replace(/^\/+/, '');
        const fullPath = join(process.cwd(), 'public', cleanPath);

        // Security check: ensure the file is within the public directory
        const publicDir = join(process.cwd(), 'public');
        if (relative(publicDir, fullPath).startsWith('..')) {
            return new NextResponse('Invalid file path', { status: 403 });
        }

        try {
            // Check if file exists and get its stats
            const stats = statSync(fullPath);

            // Create a readable stream
            const fileStream = createReadStream(fullPath);

            // Convert Node.js stream to Web stream (Node.js v18+)
            // @ts-expect-error: Node.js Readable.toWeb is not yet typed in TypeScript
            const webStream: ReadableStream<Uint8Array> = Readable.toWeb(fileStream);

            // Determine content type
            const contentType = fullPath.endsWith('.pdf') ? 'application/pdf' : 'application/octet-stream';

            // Return streaming response
            return new NextResponse(webStream, {
                headers: {
                    'Content-Type': contentType,
                    'Content-Length': stats.size.toString(),
                    'Content-Disposition': `attachment; filename="${cleanPath.split('/').pop()}"`,
                    'Cache-Control': 'no-cache'
                },
            });
        } catch (error) {
            console.error('Download error:', error);
            return new NextResponse('File not found', { status: 404 });
        }
    } catch (error) {
        console.error('Download error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

