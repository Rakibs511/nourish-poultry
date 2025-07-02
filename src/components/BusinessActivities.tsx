'use client'

import { motion,Variants  } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BusinessActivities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const businessActivities = [
    {
      title: "Broiler, Layer & Fish Feed",
      image: "/images/thumb/1.jpg",
      description: "High-quality feed solutions for optimal poultry and fish growth",
      href: "/broiler-feed",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Broiler & Layer Day Old Chicks",
      image: "/images/thumb/2.jpg",
      description: "Premium day-old chicks with superior genetics and health",
      href: "/day-old-chicks",
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "Grand Parent Stocks",
      image: "/images/thumb/3.jpg",
      description: "Elite breeding stock for superior poultry genetics",
      href: "/grand-parent",
      color: "from-purple-400 to-indigo-500"
    },
    {
      title: "Commercial Broilers",
      image: "/images/thumb/4.jpg",
      description: "Market-ready broilers with excellent feed conversion",
      href: "/commercial-broilers",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Tilapia Fry",
      image: "/images/thumb/5.jpg",
      description: "Healthy tilapia fry for sustainable aquaculture",
      href: "/tilapia",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Further Processing Food Items",
      image: "/images/thumb/6.jpg",
      description: "Value-added processed poultry products",
      href: "/processing",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Quality Assurance System",
      image: "/images/thumb/7.jpg",
      description: "Comprehensive quality control and assurance processes",
      href: "/qa-system",
      color: "from-teal-400 to-green-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Business <span className="text-orange-600">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across the entire poultry and aquaculture value chain
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {businessActivities.map((activity, index) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <Link href={activity.href} className="block h-full">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 h-full border border-gray-100 overflow-hidden relative">
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16">
                      <div className={`w-full h-full bg-gradient-to-r ${activity.color} rounded-lg`} />
                    </div>
                  </div>

                  {/* Image/Icon Section */}
                  <div className="relative mb-6 z-10">
                    <motion.div
                      animate={hoveredCard === index ? {
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      } : {}}
                      transition={{ duration: 0.8 }}
                      className="w-full h-40 rounded-xl overflow-hidden shadow-lg mx-auto relative group"
                    >
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-30 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      {/* Shimmer Effect */}
                      <motion.div
                        animate={hoveredCard === index ? {
                          x: [-100, 100],
                          opacity: [0, 0.3, 0]
                        } : {}}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </motion.div>

                    {/* Floating Particles */}
                    {hoveredCard === index && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              x: [0, ((i % 2 ? 1 : -1) * 50)],
                              y: [0, ((i % 2 ? -1 : 1) * 50)],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.2,
                              ease: "easeOut"
                            }}
                            className={`absolute w-2 h-2 bg-gradient-to-r ${activity.color} rounded-full`}
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      {activity.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700">
                      {activity.description}
                    </p>

                    {/* Learn More Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center text-orange-600 font-medium text-sm"
                    >
                      Learn More
                      <motion.svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={hoveredCard === index ? { x: 3 } : { x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Border Gradient Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={hoveredCard === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${activity.color} opacity-20 pointer-events-none`}
                    style={{ padding: '2px' }}
                  >
                    <div className="bg-white rounded-2xl w-full h-full group-hover:bg-orange-50 transition-colors duration-300" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/business"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Explore All Services</span>
              <motion.svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default BusinessActivities
