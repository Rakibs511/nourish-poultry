'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function GrandParent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stockTypes = [
    {
      name: "Cobb 500 Grand Parent",
      origin: "Premium genetics from Cobb",
      features: ["Exceptional growth rate", "Superior feed conversion", "High livability", "Disease resistance"],
      performance: {
        eggProduction: "180-190 eggs",
        hatchability: "85-88%",
        fertility: "90-93%",
        livability: "96-98%"
      }
    },
    {
      name: "Ross 308 Grand Parent",
      origin: "Elite genetics from Aviagen",
      features: ["Rapid growth potential", "Excellent meat yield", "Robust health", "Environmental adaptability"],
      performance: {
        eggProduction: "175-185 eggs",
        hatchability: "83-86%",
        fertility: "88-91%",
        livability: "95-97%"
      }
    }
  ]

  const benefits = [
    "Premium genetic foundation for breeding programs",
    "Certified disease-free breeding stock",
    "Optimal reproductive performance",
    "Enhanced progeny quality",
    "Long-term productivity gains",
    "Technical support and guidance"
  ]

  const managementPractices = [
    {
      title: "Breeding Management",
      description: "Scientific breeding protocols to maximize genetic potential",
      icon: "🧬"
    },
    {
      title: "Health Monitoring",
      description: "Continuous health surveillance and preventive care",
      icon: "🏥"
    },
    {
      title: "Nutrition Program",
      description: "Specialized feeding programs for breeding stock",
      icon: "🌾"
    },
    {
      title: "Environmental Control",
      description: "Optimal housing conditions for breeding performance",
      icon: "🏠"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-transparent opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-1 bg-orange-600 mb-6"
              />
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Grand Parent
                <span className="text-orange-600 block">Stocks</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Elite breeding stock from leading genetics companies worldwide. 
                Our grand parent stocks provide the genetic foundation for 
                superior poultry production with exceptional performance characteristics.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <StarIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Elite Genetics</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Disease Free</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/thumb/3.jpg"
                  alt="Grand Parent Stocks"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Crown animation for premium genetics */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-90 flex items-center justify-center text-2xl"
              >
                👑
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stock Types */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Grand Parent Lines</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium breeding stock from world-renowned genetics companies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {stockTypes.map((stock, index) => (
              <motion.div
                key={stock.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    🐓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {stock.name}
                    </h3>
                    <p className="text-purple-600 font-medium">{stock.origin}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {stock.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Performance Metrics</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(stock.performance).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Practices */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Management <span className="text-orange-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional management practices to maximize genetic potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{practice.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {practice.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our <span className="text-orange-600">Grand Parent Stocks?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our grand parent stocks represent the pinnacle of poultry genetics, 
                providing the foundation for successful breeding programs and superior 
                commercial production.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-6xl mb-6">📊</div>
                  <h3 className="text-2xl font-bold mb-4">Proven Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Genetic Merit Index</span>
                      <span className="font-bold">95+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Breeding Success Rate</span>
                      <span className="font-bold">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Health Status</span>
                      <span className="font-bold">Disease Free</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Breeding Program Today
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Contact us to learn more about our premium grand parent stocks and breeding programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Request Information
              </Link>
              <Link
                href="/day-old-chicks"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                View Day Old Chicks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
