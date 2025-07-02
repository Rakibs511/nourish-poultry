'use server';

type ContactFormData = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation function
function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function POST(req: Request) {
    console.log('Received contact form submission request');
    try {
        // Parse the request body
        const { name, email, phone, subject, message }: ContactFormData = await req.json();
        // console.log('Form data:', { name, email, phone, subject, message });
        // console.log('Received contact form submission:', { name, email, phone, subject, message });

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rakibulhasan20162@gmail.com',  // Your Gmail address
                pass: 'yiwvilujjltosmiu'            // Your Gmail app password
            }
        });

        console.log('Created email transporter');

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'rakibulhasan20161@gmail.com',
            //   to: 'info@nourish.com.bd',
            subject: `Contact Form: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 10px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 1px solid #e5e7eb; margin: 15px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This email was sent from the Nourish Bangladesh contact form.
          </p>
        </div>
      `
        };

        // Send email
        console.log('Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);

        return NextResponse.json(
            { message: 'Thank you for your message. We will get back to you soon!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
