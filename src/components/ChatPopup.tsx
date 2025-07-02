'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

interface ChatPopupProps {
    message: string;
    onOpen: () => void;
    show: boolean;
}

export default function ChatPopup({ message, onOpen, show }: ChatPopupProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="fixed sm:bottom-24 sm:right-6 bottom-20 right-4 max-w-[300px] z-50"
                >
                    <motion.div
                        onClick={onOpen}
                        className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
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
