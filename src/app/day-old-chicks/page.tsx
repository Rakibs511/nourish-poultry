'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function DayOldChicks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const chickTypes = [
    {
      name: "Broiler Day Old Chicks",
      breed: "Cobb 500 / Ross 308",
      features: ["Superior growth rate", "Excellent feed conversion", "High livability"],
      performance: {
        weight: "2.2-2.5 kg at 35 days",
        fcr: "1.55-1.65",
        livability: "95-97%"
      }
    },
    {
      name: "Layer Day Old Chicks", 
      breed: "Hy-Line Brown / Lohmann",
      features: ["High egg production", "Strong shell quality", "Disease resistance"],
      performance: {
        production: "320-340 eggs/year",
        peak: "92-95%",
        livability: "93-95%"
      }
    }
  ]

  const qualityFeatures = [
    {
      title: "Health Monitoring",
      description: "Regular health checks and vaccination programs",
      icon: "🏥"
    },
    {
      title: "Genetic Selection",
      description: "Superior breeding stock from leading genetics companies",
      icon: "🧬"
    },
    {
      title: "Quality Control",
      description: "Strict quality standards and biosecurity measures",
      icon: "✅"
    },
    {
      title: "Expert Care",
      description: "Professional handling and care from day one",
      icon: "👨‍⚕️"
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
                Day Old
                <span className="text-orange-600 block">Chicks</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Premium day-old chicks with superior genetics and health. 
                Our broiler and layer chicks are bred for optimal performance, 
                ensuring maximum profitability for your poultry operation.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <HeartIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Healthy Start</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Quality Assured</span>
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
                  src="/images/thumb/2.jpg"
                  alt="Broiler & Layer Day Old Chicks"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Floating chick animation */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 flex items-center justify-center text-2xl"
              >
                🐣
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chick Types Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Chick Varieties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our premium selection of broiler and layer day-old chicks
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {chickTypes.map((chick, index) => (
              <motion.div
                key={chick.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    🐥
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {chick.name}
                    </h3>
                    <p className="text-orange-600 font-medium">{chick.breed}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {chick.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Expected Performance</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(chick.performance).map(([key, value]) => (
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

      {/* Quality Features */}
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
              Quality <span className="text-orange-600">Assurance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every chick receives the highest standard of care from hatching to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
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
                Chick Care <span className="text-orange-600">Guidelines</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Proper care in the first few days is crucial for optimal growth and performance. 
                Follow our expert recommendations for best results.
              </p>
              
              <div className="space-y-4">
                {[
                  "Maintain brooding temperature at 32-35°C",
                  "Provide clean, fresh water immediately",
                  "Use starter feed with 22-24% protein",
                  "Ensure proper ventilation and lighting",
                  "Monitor chick behavior for health signs",
                  "Follow vaccination schedule strictly"
                ].map((instruction, index) => (
                  <motion.div
                    key={instruction}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{instruction}</span>
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
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-6xl mb-6">🐤</div>
                  <h3 className="text-2xl font-bold mb-4">Free Support</h3>
                  <p className="text-yellow-100 leading-relaxed mb-6">
                    Our poultry experts provide free technical support and guidance 
                    to ensure the success of your flock.
                  </p>
                  <div className="flex items-center text-yellow-100">
                    <span className="font-semibold">📞 24/7 Helpline Available</span>
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
              Order Your Day Old Chicks Today
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Start your poultry operation with healthy, high-quality chicks from trusted genetics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Place Order
              </Link>
              <Link
                href="/broiler-feed"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                View Feed Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
