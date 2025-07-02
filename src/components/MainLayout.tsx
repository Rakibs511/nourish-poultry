'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import NetworkProvider from './NetworkProvider';

const ChatBot = dynamic(() => import('./Chatbot'), {
    ssr: false
});

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="relative">
            <Header />
            <NetworkProvider>
                <div className="main-content">
                    {children}
                </div>
            </NetworkProvider>
            <ChatBot />
        </div>
    );
};

export default MainLayout;
