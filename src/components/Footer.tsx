'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const contactInfo = {
    address: "House # 39, Sonargaon Janapath Road, Sector # 07, Uttara, Dhaka-1230",
    phones: ["+88 02 41090523-27", "+88 02 41020301"]
  }

  const aboutLinks = [
    { name: "People, Place & Planet", href: "/people-place-planet" },
    { name: "The Journey Begins", href: "/journey" },
    { name: "Vision, Mission, Values", href: "/vision" },
    { name: "Nourish DNA", href: "/dna" },
    { name: "Quality Assurance System", href: "/qa-system" }
  ]

  const productLinks = [
    { name: "Broiler, Layer & Fish Feed", href: "/broiler-feed" },
    { name: "Broiler & Layer Day Old Chicks", href: "/day-old-chicks" },
    { name: "Grand Parent Stocks", href: "/grand-parent" },
    { name: "Commercial Broilers", href: "/commercial-broilers" },
    { name: "Tilapia Fry", href: "/tilapia" },
    { name: "Further Processing Food Items", href: "/processing" }
  ]

  const galleryImages = [
    "/images/thumb/1.jpg",
    "/images/thumb/2.jpg", 
    "/images/thumb/3.jpg",
    "/images/thumb/4.jpg",
    "/images/thumb/5.jpg",
    "/images/thumb/6.jpg",
    "/images/thumb/7.jpg"
  ]

  const sectionVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      
      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-orange-600 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-semibold tracking-wider hover:text-orange-200 transition-colors duration-300"
          >
            BACK TO TOP
          </motion.button>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Contact Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredSection('contact')}
              onHoverEnd={() => setHoveredSection(null)}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={hoveredSection === 'contact' ? { rotate: 360 } : {}}
                  transition={{ duration: 0.8 }}
                  className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center"
                >
                  📍
                </motion.div>
                <h3 className="text-xl font-bold">Contact</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-orange-400 font-semibold mb-2">Address:</p>
                  <p className="text-gray-300 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
                
                <div>
                  <p className="text-orange-400 font-semibold mb-2">Phone:</p>
                  {contactInfo.phones.map((phone, index) => (
                    <motion.p
                      key={phone}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                    >
                      {phone}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredSection('about')}
              onHoverEnd={() => setHoveredSection(null)}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={hoveredSection === 'about' ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
                >
                  📖
                </motion.div>
                <h3 className="text-xl font-bold">About</h3>
              </div>
              
              <ul className="space-y-3">
                {aboutLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    custom={index}
                    // variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Products Section */}
            <motion.div
            //   variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredSection('products')}
              onHoverEnd={() => setHoveredSection(null)}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={hoveredSection === 'products' ? { rotateY: 180 } : {}}
                  transition={{ duration: 0.8 }}
                  className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center"
                >
                  📦
                </motion.div>
                <h3 className="text-xl font-bold">Products</h3>
              </div>
              
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    custom={index}
                    // variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Images/Gallery Section */}
            <motion.div
            //   variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredSection('gallery')}
              onHoverEnd={() => setHoveredSection(null)}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={hoveredSection === 'gallery' ? { 
                    rotateX: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 1 }}
                  className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"
                >
                  🖼️
                </motion.div>
                <h3 className="text-xl font-bold">Gallery</h3>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="border-t border-gray-700 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400"
            >
              Copyright © 2025{' '}
              <span className="text-orange-400 font-semibold">Nourish Bangladesh</span>{' '}
              All rights reserved.
            </motion.p>
            
            {/* Animated Logo */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mt-4 text-2xl font-bold"
            >
              <span className="text-orange-600">NOURISH</span>{' '}
              <span className="text-green-600">BANGLADESH</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
            className="absolute w-24 h-24 bg-orange-600 rounded-full opacity-10"
            style={{
              left: '50%',
              top: '50%'
            }}
            ref={(el) => {
              if (el && typeof window !== 'undefined') {
                el.style.left = `${Math.random() * 100}%`;
                el.style.top = `${Math.random() * 100}%`;
              }
            }}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
