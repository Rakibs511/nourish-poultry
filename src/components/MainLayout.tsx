'use client';

import { ReactNode, Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import NetworkProvider from './NetworkProvider';

// Lazy load components that are not immediately needed
const Header = lazy(() => import('./Header'));
const ChatBot = dynamic(() => import('./Chatbot'), {
    ssr: false,
    loading: () => null
});

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="relative">
            <Suspense fallback={<div className="h-20" />}>
                <Header />
            </Suspense>
            <NetworkProvider>
                <div className="main-content">
                    {children}
                </div>
            </NetworkProvider>
            <Suspense fallback={null}>
                <ChatBot />
            </Suspense>
        </div>
    );
};

export default MainLayout;
