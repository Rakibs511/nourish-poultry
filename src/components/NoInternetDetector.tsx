'use client';

import { useState, useEffect } from 'react';
import NoInternet from './NoInternet';

export default function NoInternetDetector() {
    const [showOffline, setShowOffline] = useState(false);

    useEffect(() => {
        function handleOnlineStatus() {
            setShowOffline(!navigator.onLine);
        }

        // Set initial status
        handleOnlineStatus();

        // Add event listeners
        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);

        // Cleanup
        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
        };
    }, []);

    if (!showOffline) {
        return null;
    }

    return <NoInternet />;
}
