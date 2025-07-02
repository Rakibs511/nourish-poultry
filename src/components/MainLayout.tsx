'use client';

import { ReactNode, Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import NetworkProvider from './NetworkProvider';

// Lazy load components with loading placeholders
const Header = lazy(() => import('./Header'));
const ChatBot = dynamic(() => import('./Chatbot'), {
    ssr: false,
    loading: () => null
});

// Loading placeholders
const HeaderPlaceholder = () => (
  <div className="h-20 bg-white shadow-sm animate-pulse" />
);

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="relative">
            <Suspense fallback={<HeaderPlaceholder />}>
                <Header />
            </Suspense>
            <NetworkProvider>
                <Suspense fallback={<div className="min-h-screen animate-pulse bg-gray-50" />}>
                    <div className="main-content">
                        {children}
                    </div>
                </Suspense>
            </NetworkProvider>
            <Suspense fallback={null}>
                <ChatBot />
            </Suspense>
        </div>
    );
};

export default MainLayout;
