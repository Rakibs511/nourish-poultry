'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline'

export default function BroilerFeed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const feedTypes = [
    {
      name: "Broiler Starter Feed",
      age: "0-10 days",
      protein: "22-24%",
      energy: "3000 kcal/kg",
      features: ["High protein for rapid growth", "Essential amino acids", "Vitamins & minerals"]
    },
    {
      name: "Broiler Grower Feed", 
      age: "11-24 days",
      protein: "20-22%",
      energy: "3100 kcal/kg",
      features: ["Balanced nutrition", "Growth optimization", "Disease resistance"]
    },
    {
      name: "Broiler Finisher Feed",
      age: "25-35 days",
      protein: "18-20%",
      energy: "3200 kcal/kg", 
      features: ["Weight gain focus", "Feed efficiency", "Meat quality enhancement"]
    },
    {
      name: "Layer Feed",
      age: "18+ weeks",
      protein: "16-18%",
      energy: "2750 kcal/kg",
      features: ["Calcium enriched", "Egg production support", "Shell quality"]
    },
    {
      name: "Fish Feed",
      age: "All stages",
      protein: "28-32%",
      energy: "3500 kcal/kg",
      features: ["High protein content", "Water stability", "Growth promotion"]
    }
  ]

  const benefits = [
    "Scientifically formulated nutrition",
    "Enhanced growth rates",
    "Improved feed conversion ratio",
    "Disease resistance support",
    "Quality assurance certified",
    "Cost-effective solutions"
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
                Broiler, Layer &
                <span className="text-orange-600 block">Fish Feed</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                High-quality feed solutions for optimal poultry and fish growth. 
                Our scientifically formulated feeds ensure maximum nutrition and 
                superior performance across all growth stages.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <StarIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Premium Quality</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Proven Results</span>
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
                  src="/images/thumb/1.jpg"
                  alt="Broiler, Layer & Fish Feed"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-orange-400 border-dashed rounded-full opacity-30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feed Types Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Feed Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive nutrition solutions for every stage of growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedTypes.map((feed, index) => (
              <motion.div
                key={feed.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🌾
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feed.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Age:</span>
                    <span className="font-medium text-gray-700">{feed.age}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Protein:</span>
                    <span className="font-medium text-gray-700">{feed.protein}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Energy:</span>
                    <span className="font-medium text-gray-700">{feed.energy}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {feed.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our <span className="text-orange-600">Feed?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our feeds are developed using advanced nutritional science and quality 
                ingredients to maximize performance and profitability for farmers.
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
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl mb-6">📊</div>
                  <h3 className="text-2xl font-bold mb-4">Performance Guaranteed</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Feed Conversion Ratio</span>
                      <span className="font-bold">1.6:1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Growth Rate Improvement</span>
                      <span className="font-bold">15%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mortality Reduction</span>
                      <span className="font-bold">3-5%</span>
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Feed Program?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Contact our nutrition experts to find the perfect feed solution for your operation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Get Consultation
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
