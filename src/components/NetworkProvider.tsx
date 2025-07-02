
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const NoInternetDetector = dynamic(
  () => import('./NoInternetDetector'),
  { ssr: false }
);

interface NetworkProviderProps {
    children: ReactNode;
}

const NetworkProvider = ({ children }: NetworkProviderProps) => {
    return (
        <>
            <NoInternetDetector />
            {children}
        </>
    );
};

export default NetworkProvider;
