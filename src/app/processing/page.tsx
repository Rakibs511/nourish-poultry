'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, ShieldCheckIcon, CogIcon, TruckIcon } from '@heroicons/react/24/outline'

export default function Processing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  const facilities = [
    "Modern processing equipment",
    "Temperature-controlled environments",
    "Automated packaging systems",
    "Quality control laboratories",
    "Cold storage facilities",
    "Waste management systems",
    "Staff training facilities",
    "Traceability systems"
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
                Processing
                <span className="text-orange-600 block">Facilities</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To make the brand familiar up to the retail end, Nourish is gradually concentrating 
                on the consumer items like edible eggs & precooked poultry products. The idea is to 
                incorporate a strategic forward integration into retail and food through value added 
                products that reach the consumer&apos;s table with the added convenience of easy preparation 
                and less cooking time.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">HACCP Certified</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <CogIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Modern Equipment</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <TruckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Cold Chain</span>
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
                  src="/images/thumb/7.jpg"
                  alt="Processing Facilities"
                  fill
                  className="object-cover"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Gear animation for processing */}
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-90 flex items-center justify-center text-2xl"
              >
                ⚙️
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processing Services */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Processing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive processing solutions for poultry and aquaculture products
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Supporting Rural Farmers</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Poultry processing operations of Nourish continue to be an important means of 
                  supporting rural farmers in their production, which in near future will come 
                  directly from farmers. In response to the fluctuations in the market, Nourish 
                  believes that, these processed products have the potential to create a greater 
                  control over the selling price of products.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Research & Development</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Currently, Nourish working on the shelf-life of chilled, precooked and processed 
                  chicken products stored in room temperature and under modified atmosphere in 
                  order to find out the microbiological, chemical and sensory attributes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities & Equipment */}
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
                Modern <span className="text-orange-600">Facilities & Equipment</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our processing facilities are equipped with state-of-the-art technology 
                and modern equipment to ensure efficient operations, product quality, 
                and food safety compliance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={facility}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
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
                  <div className="text-6xl mb-6">🏭</div>
                  <h3 className="text-2xl font-bold mb-4">Processing Capacity</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Poultry Processing</span>
                      <span className="font-bold">5,000 birds/day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fish Processing</span>
                      <span className="font-bold">2,000 kg/day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Value Addition</span>
                      <span className="font-bold">1,500 kg/day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cold Storage</span>
                      <span className="font-bold">50 tonnes</span>
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
              Partner with Our Processing Facility
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Contact us to learn more about our processing services and partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/commercial-broilers"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
