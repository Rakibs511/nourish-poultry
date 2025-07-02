'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

interface ChatPopupProps {
    message: string;
    onOpen: () => void;
    onClose: () => void;
    show: boolean;
}

export default function ChatPopup({ message, onOpen, onClose, show }: ChatPopupProps) {
    useEffect(() => {
        // Add the keyframes for the border animation
        const style = document.createElement('style')
        style.textContent = `
            @keyframes border-pulse {
                0%, 100% { border-color: rgba(217, 119, 6, 0.2); box-shadow: 0 0 10px rgba(217, 119, 6, 0.2); }
                50% { border-color: rgba(217, 119, 6, 0.6); box-shadow: 0 0 15px rgba(217, 119, 6, 0.4); }
            }
        `
        document.head.appendChild(style)
        
        return () => {
            document.head.removeChild(style)
        }
    }, [])
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="fixed sm:bottom-24 sm:right-6 bottom-20 right-4 max-w-[300px] z-20"
                >
                    {/* Close button */}
                    <motion.button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 z-10 border border-gray-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <XMarkIcon className="w-4 h-4 text-gray-500" />
                    </motion.button>
                    <motion.div
                        onClick={onOpen}
                        className="relative bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow border-2"
                        style={{
                            animation: 'border-pulse 2s ease-in-out infinite'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-start space-x-3">
                            <div className="bg-amber-600 rounded-full p-2">
                                <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">Nourish Assistant</p>
                                <p className="text-sm text-gray-600 mt-1">{message}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
