import React from 'react';
import useInternetConnection from './hooks/useInternetConnection';
import NoInternet from './components/NoInternet';

function App() {
    const isOnline = useInternetConnection();

    if (!isOnline) {
        return <NoInternet />;
    }

    return (
        // Your existing app content
        <div>
            {/* Your routes and components */}
        </div>
    );
}

export default App;
