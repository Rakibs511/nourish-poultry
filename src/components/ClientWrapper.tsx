'use client';

import { ReactNode } from 'react';
import NetworkProvider from './NetworkProvider';
import ChatBot from './Chatbot';

interface ClientWrapperProps {
    children: ReactNode;
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
    return (
        <>
            <NetworkProvider>
                {children}
            </NetworkProvider>
            <ChatBot />
        </>
    );
};

export default ClientWrapper;
