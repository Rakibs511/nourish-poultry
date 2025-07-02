'use client';

import { motion } from 'framer-motion';
import { MdSignalWifiOff } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';
import { useState } from 'react';
import ClientOnly from './ClientOnly';

const NoInternet = () => {
    const [isChecking, setIsChecking] = useState(false);

    const checkConnection = async () => {
        try {
            setIsChecking(true);
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            const response = await fetch('/api/health-check', {
                method: 'HEAD',
                signal: controller.signal,
                cache: 'no-store',
            });

            clearTimeout(timeoutId);

            if (response.ok) {
                window.location.reload();
            }
        } catch (error) {
            // If fetch fails, we're still offline
            console.log('Connection check failed',error);
        } finally {
            setIsChecking(false);
        }
    };

    const handleRefresh = () => {
        if (!isChecking) {
            checkConnection();
        }
    };

    return (
        <ClientOnly>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50">
                <motion.div 
                    className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full mx-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        className="mb-6 relative"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2
                        }}
                    >
                        <div className="bg-orange-100 p-4 rounded-full">
                            <MdSignalWifiOff className="w-12 h-12 text-orange-600" />
                        </div>
                        <motion.div 
                            className="absolute -inset-4 bg-orange-100 rounded-full animate-pulse-slow -z-10 opacity-50"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.2, 0.5]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                    
                    <motion.div
                        className="text-center space-y-3 mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.4
                        }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-900">
                            No Internet Connection
                        </h2>
                        <p className="text-gray-600">
                            Please check your network connection and try again
                        </p>
                    </motion.div>

                    <motion.button
                        onClick={handleRefresh}
                        disabled={isChecking}
                        className={`
                            relative overflow-hidden group
                            px-6 py-3 rounded-xl
                            text-sm font-semibold
                            transition-all duration-300
                            shadow-glow
                            ${isChecking 
                                ? 'bg-orange-400 cursor-not-allowed' 
                                : 'bg-nourish-gradient text-white hover:shadow-lg'
                            }
                        `}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.6
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative inline-flex items-center">
                            <BiRefresh className={`w-5 h-5 mr-2 ${isChecking ? 'animate-spin' : 'group-hover:animate-spin'}`} />
                            {isChecking ? 'Checking Connection...' : 'Retry Connection'}
                        </span>
                    </motion.button>

                </motion.div>
            </div>
        </ClientOnly>
    );
};

export default NoInternet;
