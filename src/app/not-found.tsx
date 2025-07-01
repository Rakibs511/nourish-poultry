"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          {/* Animated 404 number */}
          <div className="animate-bounce-slow mb-8">
            <h1 className="text-[150px] font-extrabold bg-nourish-gradient bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>
          
          {/* Message */}
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Page Not Found!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          {/* Back to Home button with gradient and glow effect */}
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-md text-white bg-nourish-gradient hover:opacity-90 transition-all duration-300 shadow-glow"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-nourish-gradient rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/2 -right-24 w-48 h-48 bg-nourish-green rounded-full opacity-10 animate-float"></div>
        <div className="absolute -bottom-20 left-1/3 w-40 h-40 bg-nourish-gradient rounded-full opacity-10 animate-float"></div>
      </div>
    </div>
  );
}
