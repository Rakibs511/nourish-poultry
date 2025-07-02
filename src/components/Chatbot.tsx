'use client'

import { useState, useRef, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import TypingAnimation from './TypingAnimation'
import ChatPopup from './ChatPopup'
import { useRouter, useSearchParams } from 'next/navigation'

interface Message {
    content: string
    isBot: boolean
    timestamp: Date
    suggestions?: string[]
    pageLink?: {
        url: string
        text: string
    }
    isTyping?: boolean
}

function ChatBotContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [showPopup, setShowPopup] = useState(false)
    
    // Check if chat is open from URL
    const isOpen = searchParams.has('chat')
    const [sessionId] = useState(() => Math.random().toString(36).substring(7))
    const [messages, setMessages] = useState<Message[]>([
        {
            content: "Hello! I'm Nourish Assistant. How can I help you today?",
            isBot: true,
            timestamp: new Date(),
            suggestions: [
                'Tell me about your products',
                'What feed products do you offer?',
                'How can I contact you?',
                'How can I become a dealer?'
            ]
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

useEffect(() => {
        // Handle browser back/forward
        const handlePopState = () => {
            if (!window.location.search.includes('chat')) {
                setShowPopup(false)
            }
        }
        window.addEventListener('popstate', handlePopState)

        // Show popup after 5 seconds if chat is not open
        const popupTimeout = setTimeout(() => {
            if (!isOpen) {
                setShowPopup(true)
            }
        }, 5000)

        return () => {
            clearTimeout(popupTimeout)
            window.removeEventListener('popstate', handlePopState)
        }
    }, [isOpen])

    const handleOpen = () => {
        // Add chat parameter to URL
        const params = new URLSearchParams(searchParams)
        params.set('chat', 'open')
        router.push(`?${params.toString()}`)
        setShowPopup(false)
    }

    const handleClose = () => {
        // Remove chat parameter from URL
        const params = new URLSearchParams(searchParams)
        params.delete('chat')
        router.push(params.toString() ? `?${params.toString()}` : window.location.pathname)
    }

    const handleSendMessage = async (message?: string) => {
        const messageToSend = message || inputMessage
        if (!messageToSend.trim()) return

        const newMessage: Message = {
            content: messageToSend,
            isBot: false,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, newMessage])
        setInputMessage('')
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: messageToSend.trim(),
                    sessionId
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get response')
            }

            const botMessage = {
                content: data.response,
                isBot: true,
                timestamp: new Date(),
                suggestions: data.suggestions,
                pageLink: data.pageLink,
                isTyping: true
            }
            
            setMessages(prev => [...prev, botMessage])
        } catch (error) {
            console.error('Chat error:', error)
            setMessages(prev => [...prev, {
                content: "I'm sorry, I'm having trouble processing your request right now. Please try again later.",
                isBot: true,
                timestamp: new Date()
            }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <ChatPopup
                message="Hello! I'm Nourish Assistant. How can I help you today?"
                onOpen={handleOpen}
                onClose={() => setShowPopup(false)}
                show={showPopup}
            />
            {/* Chat Button */}
            <motion.button
                onClick={handleOpen}
                className="fixed sm:bottom-6 sm:right-6 bottom-4 right-4 bg-amber-600 text-white rounded-full p-4 shadow-lg hover:bg-amber-700 transition-colors duration-200 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed sm:bottom-24 sm:right-6 sm:w-96 bottom-0 right-0 w-full bg-white sm:rounded-xl shadow-2xl overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="bg-amber-600 p-4 flex justify-between items-center sticky top-0 z-10">
                            <h3 className="text-white font-semibold">Nourish Assistant</h3>
                            <button
                                onClick={handleClose}
                                className="text-white hover:text-amber-200 transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="sm:h-96 h-[calc(100vh-8rem)] overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div
                                        className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-xl ${message.isBot
                                            ? 'bg-white text-gray-800 shadow'
                                            : 'bg-amber-600 text-white'
                                            }`}
                                    >
                                        {message.isBot && message.isTyping ? (
                                            <>
                                                <TypingAnimation
                                                    text={message.content}
                                                    className="text-sm"
                                                    onComplete={() => {
                                                        setMessages(prev =>
                                                            prev.map((msg, i) =>
                                                                i === index ? { ...msg, isTyping: false } : msg
                                                            )
                                                        )
                                                    }}
                                                />
                                                <p className="text-xs mt-1 opacity-70">
                                                    {message.timestamp.toLocaleTimeString()}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-sm">{message.content}</p>
                                                <p className="text-xs mt-1 opacity-70">
                                                    {message.timestamp.toLocaleTimeString()}
                                                </p>
                                                {message.isBot && message.pageLink && (
                                                    <motion.div 
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.2 }}
                                                        className="mt-3"
                                                    >
                                                        <a
                                                            href={message.pageLink.url}
                                                            className="inline-block bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                                                        >
                                                            {message.pageLink.text}
                                                        </a>
                                                    </motion.div>
                                                )}
                                                {message.isBot && message.suggestions && (
                                                    <motion.div 
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.2 }}
                                                        className="mt-3 flex flex-wrap gap-2"
                                                    >
                                                        {message.suggestions.map((suggestion, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => {
                                                                    handleSendMessage(suggestion)
                                                                    setInputMessage('')
                                                                }}
                                                                className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full hover:bg-amber-200 transition-colors whitespace-nowrap"
                                                            >
                                                                {suggestion}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white p-3 rounded-xl shadow">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-100" />
                                            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-200" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t sticky bottom-0 z-10">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    aria-label="Chat message input"
                                    placeholder="Type your message..."
                                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-base sm:text-sm"
                                />
                                <motion.button
                                    onClick={() => handleSendMessage()}
                                    disabled={isLoading || !inputMessage.trim()}
                                    className="bg-amber-600 text-white rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <PaperAirplaneIcon className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default function ChatBot() {
    return (
        <Suspense fallback={null}>
            <ChatBotContent />
        </Suspense>
    )
}
