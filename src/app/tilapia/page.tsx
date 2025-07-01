'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, BeakerIcon, ArrowUturnDownIcon, BugAntIcon } from '@heroicons/react/24/outline'

export default function Tilapia() {

  const advantages = [
    "High protein, low fat fish",
    "Fast growth and maturation",
    "Excellent feed conversion",
    "Disease resistance",
    "Strong market demand",
    "Sustainable aquaculture option"
  ]

  const waterQualityParams = [
    { parameter: "Temperature", optimal: "24-32°C", critical: "Fish growth and health" },
    { parameter: "Dissolved Oxygen", optimal: ">4 mg/L", critical: "Fish survival and growth" },
    { parameter: "pH", optimal: "6.5-8.5", critical: "Water chemistry balance" },
    { parameter: "Ammonia", optimal: "<0.5 mg/L", critical: "Toxicity prevention" },
    { parameter: "Nitrite", optimal: "<0.1 mg/L", critical: "Fish health maintenance" },
    { parameter: "Alkalinity", optimal: "50-300 mg/L", critical: "pH stability" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-transparent opacity-60" />
        <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-orange-100/30 via-orange-50/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,165,0,0.1),rgba(255,255,255,0))]" />
        
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
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-1 bg-orange-600 mb-6"
              />
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Tilapia
                <span className="text-orange-600 block">Aquaculture</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Although Bangladesh is considered one of the most suitable countries
                in the world for freshwater aquaculture, tilapia culture is yet to
                be widespread here. With increasing popularity among consumers, tilapia
                has become the world&apos;s second most important cultured fish after carps.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At the beginning of 2011, Nourish started its fisheries project and
                since then we are working closely with Asian Institute of Technology (AIT)
                and AARM team, with their selectively picked Nile Tilapia (Oreochromis niloticus)
                which is a superior farmed tilapia because of its faster growing and more manageable quality.
                In 2013 Nourish set its target to produce around 25 million fry.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <BugAntIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Premium Varieties</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <ArrowUturnDownIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Sustainable</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <BeakerIcon className="w-5 h-5 mr-2" />
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
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/thumb/5.jpg"
                  alt="Tilapia Aquaculture"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
                <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-orange-200/30 via-transparent to-orange-100/20" />
              </div>
              
              {/* Water ripple animation */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.4, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-60 flex items-center justify-center text-2xl"
              >
                🌊
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Water Quality Parameters */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Water Quality <span className="text-orange-600">Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Critical water quality parameters for successful tilapia aquaculture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterQualityParams.map((param, index) => (
              <motion.div
                key={param.parameter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {param.parameter}
                  </h3>
                  <div className="text-2xl">
                    {param.parameter === 'Temperature' ? '🌡️' : 
                     param.parameter === 'Dissolved Oxygen' ? '💨' :
                     param.parameter === 'pH' ? '⚗️' : 
                     param.parameter === 'Ammonia' ? '🧪' :
                     param.parameter === 'Nitrite' ? '💧' : '🔬'}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Optimal Range:</span>
                    <p className="font-semibold text-orange-600">{param.optimal}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Importance:</span>
                    <p className="text-sm text-gray-700">{param.critical}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
                Why Choose <span className="text-orange-600">Tilapia Farming?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Tilapia aquaculture offers excellent opportunities for sustainable 
                protein production with fast growth, disease resistance, and strong 
                market demand making it an ideal choice for fish farming.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-6xl mb-6">📊</div>
                  <h3 className="text-2xl font-bold mb-4">Production Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Growth Period</span>
                      <span className="font-bold">6-8 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Feed Conversion</span>
                      <span className="font-bold">1.2-1.7 FCR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Survival Rate</span>
                      <span className="font-bold">80-95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Market Size</span>
                      <span className="font-bold">400g-2kg</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-orange-100/20 mix-blend-overlay rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Tilapia Farm Today
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Contact us to learn more about our tilapia fingerlings and aquaculture support programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/broiler-feed"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                View Fish Feed
              </Link>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,165,0,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-orange-100/20 via-transparent to-orange-200/20" />
        </div>
      </section>
    </div>
  )
}
