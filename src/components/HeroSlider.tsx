'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: 'Quality Feed',
      subtitle: 'for Healthier Livestock',
      image: '/images/slider/feed.jpg',
      text: 'Delivering superior nutrition solutions with advanced technology',
    },
    {
      id: 2,
      title: 'Premium Chicks',
      subtitle: 'Superior Genetics',
      image: '/images/slider/chicks.jpg',
      text: 'High-quality day-old chicks for optimal performance',
    },
    {
      id: 3,
      title: 'Grand Parents',
      subtitle: 'Breeding Excellence',
      image: '/images/slider/grandparent.jpg',
      text: 'State-of-the-art breeding facilities for better generations',
    },
    {
      id: 4,
      title: 'Processing Unit',
      subtitle: 'Modern Technology',
      image: '/images/slider/processing.jpg',
      text: 'Advanced processing facilities for premium quality products',
    },
    {
      id: 5,
      title: 'Commercial Farms',
      subtitle: 'Smart Farming',
      image: '/images/slider/farms.jpg',
      text: 'State-of-the-art facilities for sustainable production',
    }
  ]

  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, slides.length])

  const scrollToContent = () => {
    const nextSection = document.getElementById('services-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, x: 100, scale: 0.8, transition: { duration: 0.5 } }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } }
  }

  return (
    <div
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
            
            {/* Text Content */}
            <div className="flex-1 max-w-4xl text-center mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold text-white mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl text-orange-400 font-semibold mb-8"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Animated Decorative Elements */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                exit={{ width: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="h-1 bg-orange-500 mx-auto mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-gray-200 max-w-2xl mx-auto"
              >
                {slides[currentSlide].text}
              </motion.p>
            </div>

            {/* Image Content */}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white cursor-pointer z-50 group"
      >
        <span className="text-sm font-medium mb-2 group-hover:text-orange-400 transition-colors">Scroll Down</span>
        <ChevronDoubleDownIcon className="w-6 h-6 animate-bounce group-hover:text-orange-400 transition-colors" />
      </motion.button>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRightIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border-4 border-dashed border-orange-400 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border-4 border-dashed border-green-400 rounded-full"
        />
      </div>
      </div>
    )
}

export default HeroSlider
