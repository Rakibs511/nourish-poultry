'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, EyeIcon,CogIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices",
      icon: "🤝",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Quality",
      description: "Excellence in every product and service we deliver to our customers",
      icon: "⭐",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Innovation",
      description: "Continuously improving through technology and creative solutions",
      icon: "💡",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Sustainability",
      description: "Building a future that preserves our environment for generations",
      icon: "🌱",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Community",
      description: "Supporting local communities and fostering inclusive growth",
      icon: "👥",
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "Customer Focus",
      description: "Putting our customers' needs at the center of everything we do",
      icon: "🎯",
      color: "from-red-400 to-red-600"
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
                Vision, Mission &
                <span className="text-orange-600 block">Values</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                From the very beginning, the mission of Nourish is to create the strongest 
                brand value in Bangladesh's agricultural sector through innovation, quality, 
                and sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/icon-services/vision.png"
                  alt="Vision Mission Values"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-4 border-orange-400 border-dashed rounded-full opacity-30"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To be the leading agricultural company in Bangladesh, creating sustainable 
                  food systems that nourish communities while preserving our environment 
                  for future generations.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600">Market leadership in sustainable agriculture</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600">Environmental stewardship and conservation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600">Community empowerment and development</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <CogIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide high-quality, sustainable agricultural products and services 
                  that improve food security, support local communities, and contribute 
                  to Bangladesh's economic growth.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600">Deliver superior quality products</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600">Support farmer livelihoods</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600">Drive sustainable innovation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Our Core <span className="text-orange-600">Values</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Leadership <span className="text-orange-600">Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team is committed to driving positive change in Bangladesh's agricultural landscape
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ethical Leadership",
                description: "Leading by example with transparency, honesty, and accountability in all our actions"
              },
              {
                title: "Innovation Drive",
                description: "Constantly seeking new ways to improve efficiency, quality, and sustainability"
              },
              {
                title: "Stakeholder Value",
                description: "Creating long-term value for all stakeholders including farmers, customers, and communities"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
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
              Join Us in Our Mission
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Together, we can build a more sustainable and prosperous future for Bangladesh's agriculture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Join Our Team
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
