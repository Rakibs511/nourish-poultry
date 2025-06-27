'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline'

export default function QASystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const qaSteps = [
    {
      step: "1",
      title: "Raw Material Testing",
      description: "All incoming raw materials undergo rigorous testing for quality, purity, and safety standards"
    },
    {
      step: "2", 
      title: "Production Monitoring",
      description: "Continuous monitoring during manufacturing to ensure consistent quality at every stage"
    },
    {
      step: "3",
      title: "Finished Product Analysis",
      description: "Complete analysis of finished products before packaging and distribution"
    },
    {
      step: "4",
      title: "Storage & Logistics",
      description: "Proper storage conditions and cold chain management to maintain product integrity"
    }
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality standards",
      icon: "🏆"
    },
    {
      name: "HACCP",
      description: "Hazard Analysis Critical Control Points for food safety management",
      icon: "🛡️"
    },
    {
      name: "GMP",
      description: "Good Manufacturing Practices certification for production standards",
      icon: "⚙️"
    },
    {
      name: "ISO 22000",
      description: "Food Safety Management System certification",
      icon: "🔒"
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
                Quality Assurance
                <span className="text-orange-600 block">System</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our comprehensive quality assurance system ensures that every product 
                meets the highest standards of safety, nutrition, and performance. 
                From raw materials to final delivery, quality is our top priority.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">ISO Certified</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <BeakerIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Lab Tested</span>
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
                  alt="Quality Assurance System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Quality badge animation */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-90 flex items-center justify-center text-2xl text-white font-bold"
              >
                ✓
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QA Process Steps */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">QA Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to quality that covers every aspect of our operations
            </p>
          </motion.div>

          <div className="space-y-12">
            {qaSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                  >
                    {step.step}
                  </motion.div>
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Our <span className="text-orange-600">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications that validate our commitment to quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
                Exceeding <span className="text-orange-600">Industry Standards</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our quality assurance system goes beyond industry requirements to ensure 
                the highest levels of product safety, consistency, and performance.
              </p>
              
              <div className="space-y-4">
                {[
                  "24/7 laboratory testing and monitoring",
                  "Automated quality control systems",
                  "Regular third-party audits and inspections",
                  "Continuous staff training and certification",
                  "Real-time quality data tracking and analysis",
                  "Customer feedback integration"
                ].map((standard, index) => (
                  <motion.div
                    key={standard}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
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
                  <div className="text-6xl mb-6">🔬</div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Testing</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tests Conducted Daily</span>
                      <span className="font-bold">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Quality Score</span>
                      <span className="font-bold">99.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Batch Tracking</span>
                      <span className="font-bold">100%</span>
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
              Experience Quality You Can Trust
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Our rigorous quality assurance system ensures every product meets the highest standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Learn More
              </Link>
              <Link
                href="/download"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Download Certificates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
