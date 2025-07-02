'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle body scroll lock
  const toggleBodyScroll = useCallback((shouldLock: boolean) => {
    if (shouldLock) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Update body scroll when menu state changes
  useEffect(() => {
    toggleBodyScroll(isMenuOpen)
    return () => toggleBodyScroll(false)
  }, [isMenuOpen, toggleBodyScroll])
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // scrolling down
          setIsVisible(false)
        } else {
          // scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const menuItems = [
    { name: 'Home', href: '/', subtext: 'start here' },
    {
      name: 'About',
      href: '/about',
      subtext: 'all about us',
      submenu: [
        { name: 'People, Place & Planet', href: '/people-place-planet' },
        { name: 'The Journey Begins', href: '/journey' },
        { name: 'Vision, Mission, Values', href: '/vision' },
        { name: 'Nourish DNA', href: '/dna' },
        { name: 'Quality Assurance System', href: '/qa-system' },
      ]
    },
    {
      name: 'Business Activities',
      href: '#',
      subtext: 'what we do',
      submenu: [
        { name: 'Broiler, Layer & Fish Feed', href: '/broiler-feed' },
        { name: 'Broiler & Layer Day Old Chicks', href: '/day-old-chicks' },
        { name: 'Grand Parent Stocks', href: '/grand-parent' },
        { name: 'Commercial Broilers', href: '/commercial-broilers' },
        { name: 'Tilapia Fry', href: '/tilapia' },
        { name: 'Further Processing Food Items', href: '/processing' },
      ]
    },
    {
      name: 'Accomplishments',
      href: '#',
      subtext: 'success stories',
      submenu: [
        { name: 'Business Growth', href: '/business-growth' },
        { name: 'Awards', href: '/awards' },
        { name: 'Certifications', href: '/certifications' },
      ]
    },
    { name: 'Career', href: '/career', subtext: 'result of our work' },
    { name: 'Login', href: 'http://120.50.27.242:7070/office', subtext: 'join with us', external: true },
    { name: 'Contact Us', href: '/contact', subtext: 'keep in touch' },
    { name: 'Download', href: '/download', subtext: 'Download Brochure' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50 h-[64px] sm:h-auto"
    >
      {/* Top Widget Bar */}
      <div className="bg-orange-50/80 backdrop-blur-sm py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Welcome to Nourish Bangladesh
            </div>
            <div className="flex space-x-3">
              <motion.a
                href="https://www.facebook.com/people/Nourish-Bangladesh/61560268934526/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label="Visit Nourish Bangladesh Facebook page"
                title="Facebook"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@nourishbangladesh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label="Visit Nourish Bangladesh YouTube channel"
                title="Nourish Bangladesh YouTube"
                className="text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-14 lg:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Nourish Bangladesh"
                width={200}
                height={80}
                className="h-10 w-auto sm:h-9 md:h-10 lg:h-12"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8" aria-label="Main navigation">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-gray-700 hover:text-orange-600 transition-colors duration-300"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="font-medium text-sm"
                    >
                      {item.name}
                    </motion.span>
                    <span className="text-xs text-gray-500 mt-1">{item.subtext}</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="flex flex-col items-center text-gray-700 hover:text-orange-600 transition-colors duration-300"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="font-medium text-sm"
                    >
                      {item.name}
                    </motion.span>
                    <span className="text-xs text-gray-500 mt-1">{item.subtext}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {!isMenuOpen ?  (
              <Bars3Icon className="h-6 w-6" />
            ): null}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-0 left-0 w-[80%] min-h-screen bg-white shadow-xl z-50 overflow-y-auto"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <div className="p-4 bg-orange-50 flex justify-between items-center">
              <div className="flex-1">
                <Image
                  src="/images/logo.png"
                  alt="Nourish Bangladesh"
                  width={150}
                  height={60}
                  className="h-8 w-auto"
                  priority
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 py-4 space-y-2 min-h-[calc(100vh-80px)] flex flex-col justify-between" style={{ height: 'calc(100vh - 80px)' }}>
              <div>
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end me-5 pb-5 space-x-6 border-t border-gray-200 pt-4">
                <motion.a
                  href="https://www.facebook.com/people/Nourish-Bangladesh/61560268934526/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@nourishbangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 min-h-screen bg-black z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
