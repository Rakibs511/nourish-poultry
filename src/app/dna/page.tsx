'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, ShieldCheckIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function DNA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const dnaValues = [
    {
      title: "Honesty & Integrity",
      description: "We are not built to compromise on the issues of honesty and integrity. Valuing every stakeholder with transparency and ethical practices.",
      icon: "🤝",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Quality Excellence",
      description: "Our commitment to delivering the highest quality products and services drives everything we do, from farm to table.",
      icon: "⭐",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Innovation & Growth",
      description: "Continuously pushing boundaries through research, technology, and creative solutions for sustainable agriculture.",
      icon: "🚀",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Community Focus",
      description: "Building strong relationships with farmers, partners, and communities to create shared value and prosperity.",
      icon: "🌱",
      color: "from-green-400 to-green-600"
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
                Nourish
                <span className="text-orange-600 block">DNA</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are not built to compromise on the issues of honesty and integrity. 
                Valuing every stakeholder, we believe in creating lasting relationships 
                based on trust, quality, and mutual respect.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Integrity First</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <HeartIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">People Focused</span>
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
                  src="/images/icon-services/dna.png"
                  alt="Nourish DNA"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
              
              {/* Floating DNA Helix Animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-4 border-orange-400 border-dashed rounded-full opacity-30"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DNA Values */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">DNA</span> Elements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental building blocks that define who we are and how we operate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dnaValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
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
                Our <span className="text-orange-600">Commitment</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every decision we make, every product we develop, and every relationship we build 
                is guided by our DNA. We believe that success comes not just from what we achieve, 
                but how we achieve it.
              </p>
              <div className="space-y-4">
                {[
                  "Transparent business practices",
                  "Ethical supply chain management", 
                  "Sustainable growth strategies",
                  "Community-centered approach"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
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
                  <UserGroupIcon className="w-16 h-16 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Stakeholder Value</h3>
                  <p className="text-orange-100 leading-relaxed">
                    We create value not just for shareholders, but for all stakeholders - 
                    our employees, customers, communities, and the environment we operate in.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-5 transform -translate-x-12 translate-y-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
              Living Our <span className="text-orange-600">DNA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our DNA translates into real-world impact and meaningful change
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trust Building",
                description: "Over 1000+ satisfied customers who trust our integrity and quality",
                metric: "1000+",
                label: "Happy Customers"
              },
              {
                title: "Quality Standards",
                description: "Maintaining 99.5% quality standards across all our product lines",
                metric: "99.5%",
                label: "Quality Score"
              },
              {
                title: "Community Impact",
                description: "Supporting 500+ local farmers and creating sustainable livelihoods",
                metric: "500+",
                label: "Farmers Supported"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100"
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-500 mb-4">{stat.label}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
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
              Experience the Nourish Difference
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Partner with us and experience what it means to work with a company built on integrity and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Partner With Us
              </Link>
              <Link
                href="/journey"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Our Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
