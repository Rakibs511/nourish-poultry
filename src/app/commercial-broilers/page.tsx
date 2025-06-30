'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, ClockIcon, ScaleIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function CommercialBroilers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const broilerTypes = [
    {
      name: "Cobb 500 Broilers",
      breed: "Fast-growing commercial strain",
      features: ["Rapid weight gain", "Excellent feed conversion", "High breast meat yield", "Uniform growth"],
      performance: {
        fcr: "1.45-1.55",
        liveability: "96-98%",
        marketWeight: "2.5-3.0 kg",
        growthPeriod: "35-42 days"
      },
      icon: "🐔"
    },
    {
      name: "Ross 308 Broilers",
      breed: "Premium commercial strain",
      features: ["Superior growth rate", "High meat yield", "Disease resistance", "Adaptable to various climates"],
      performance: {
        fcr: "1.50-1.60",
        liveability: "95-97%",
        marketWeight: "2.3-2.8 kg",
        growthPeriod: "38-45 days"
      },
      icon: "🐓"
    },
    {
      name: "Hubbard Broilers",
      breed: "Robust commercial strain",
      features: ["Excellent hardiness", "Good feed efficiency", "Strong leg health", "Consistent performance"],
      performance: {
        fcr: "1.55-1.65",
        liveability: "94-96%",
        marketWeight: "2.2-2.7 kg",
        growthPeriod: "40-47 days"
      },
      icon: "🐤"
    }
  ]

  const advantages = [
    "High-quality protein source for consumers",
    "Excellent return on investment",
    "Short production cycle",
    "Consistent market demand",
    "Efficient feed conversion",
    "Professional breeding support"
  ]

  const managementStages = [
    {
      stage: "Brooding (0-14 days)",
      temperature: "32-35°C initially",
      focus: "Temperature control, proper ventilation, starter feed",
      key: "Critical for establishing good growth foundation"
    },
    {
      stage: "Growing (15-28 days)",
      temperature: "24-28°C",
      focus: "Grower feed, space management, health monitoring",
      key: "Rapid growth phase with optimal nutrition"
    },
    {
      stage: "Finishing (29-42 days)",
      temperature: "20-24°C",
      focus: "Finisher feed, market preparation, weight monitoring",
      key: "Achieving target weight and market specifications"
    }
  ]

  const nutritionProgram = [
    {
      phase: "Starter (0-14 days)",
      protein: "22-24%",
      energy: "3000-3100 ME",
      features: ["High protein for rapid growth", "Easy digestibility", "Immune support"]
    },
    {
      phase: "Grower (15-28 days)",
      protein: "20-22%",
      energy: "3100-3200 ME",
      features: ["Balanced growth nutrition", "Bone development", "Muscle formation"]
    },
    {
      phase: "Finisher (29-42 days)",
      protein: "18-20%",
      energy: "3200-3300 ME",
      features: ["Meat quality focus", "Fat deposition control", "Market preparation"]
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
                Commercial
                <span className="text-orange-600 block">Broilers</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                High-performance commercial broiler chickens designed for efficient 
                meat production. Our broilers offer excellent growth rates, superior 
                feed conversion, and consistent market-ready quality.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">35-42 Days</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <ScaleIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">2.5-3.0 kg</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <TrophyIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Premium Quality</span>
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
                  src="/images/thumb/6.jpg"
                  alt="Commercial Broilers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Growth animation */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-90 flex items-center justify-center text-2xl"
              >
                📈
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Broiler Types */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Broiler Strains</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium commercial broiler strains selected for optimal performance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {broilerTypes.map((broiler, index) => (
              <motion.div
                key={broiler.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {broiler.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                    {broiler.name}
                  </h3>
                  <p className="text-orange-600 font-medium">{broiler.breed}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {broiler.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Performance Data</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">FCR:</span>
                      <span className="font-medium text-gray-800">{broiler.performance.fcr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Liveability:</span>
                      <span className="font-medium text-gray-800">{broiler.performance.liveability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market Weight:</span>
                      <span className="font-medium text-gray-800">{broiler.performance.marketWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Growth Period:</span>
                      <span className="font-medium text-gray-800">{broiler.performance.growthPeriod}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Stages */}
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
              Management <span className="text-orange-600">Stages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive management approach for optimal broiler performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {managementStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600" />
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {stage.stage}
                    </h3>
                    <div className="text-2xl">
                      {index === 0 ? '🐣' : index === 1 ? '🐤' : '🐔'}
                    </div>
                  </div>
                  <p className="text-orange-600 font-medium mb-4">{stage.temperature}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Focus Areas:</h4>
                    <p className="text-gray-600 text-sm">{stage.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Point:</h4>
                    <p className="text-gray-600 text-sm">{stage.key}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Program */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nutrition <span className="text-orange-600">Program</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientifically formulated feeding program for optimal growth and meat quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {nutritionProgram.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-6">🌾</div>
                  <h3 className="text-2xl font-bold mb-4">{phase.phase}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="opacity-90">Protein:</span>
                      <span className="font-bold">{phase.protein}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-90">Energy:</span>
                      <span className="font-bold">{phase.energy}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {phase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our <span className="text-orange-600">Commercial Broilers?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our commercial broilers are bred for exceptional performance, 
                offering farmers reliable production with excellent economic returns 
                and consistent market quality.
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
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
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
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-6xl mb-6">💰</div>
                  <h3 className="text-2xl font-bold mb-4">Economic Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>ROI Timeline</span>
                      <span className="font-bold">6-8 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Feed Efficiency</span>
                      <span className="font-bold">1.45-1.65 FCR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Market Readiness</span>
                      <span className="font-bold">35-45 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Survival Rate</span>
                      <span className="font-bold">94-98%</span>
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
              Start Your Broiler Production Today
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Contact us to learn more about our commercial broiler programs and technical support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Get Started
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
