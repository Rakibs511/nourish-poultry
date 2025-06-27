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

  const processingServices = [
    {
      service: "Poultry Processing",
      description: "Complete chicken processing from live birds to market-ready products",
      capabilities: ["Live bird reception", "Slaughter and bleeding", "Scalding and plucking", "Evisceration", "Chilling", "Packaging"],
      capacity: "5,000 birds/day",
      standards: ["HACCP certified", "Halal certified", "ISO 22000"],
      icon: "🐔"
    },
    {
      service: "Fish Processing",
      description: "Fresh fish processing with modern equipment and cold chain management",
      capabilities: ["Fresh fish reception", "Scaling and gutting", "Filleting", "Quality grading", "Ice packing", "Cold storage"],
      capacity: "2,000 kg/day",
      standards: ["HACCP certified", "EU standards", "Traceability systems"],
      icon: "🐟"
    },
    {
      service: "Value Addition",
      description: "Value-added products including marinated, seasoned, and ready-to-cook items",
      capabilities: ["Marination", "Seasoning", "Portion cutting", "Vacuum packaging", "Frozen products", "Recipe development"],
      capacity: "1,500 kg/day",
      standards: ["Food safety certified", "Quality assured", "Custom formulations"],
      icon: "🍖"
    }
  ]

  const qualityStandards = [
    {
      standard: "HACCP Certification",
      description: "Hazard Analysis Critical Control Points system implementation",
      benefits: ["Food safety assurance", "Risk prevention", "Systematic monitoring", "Documentation"],
      icon: "🔬"
    },
    {
      standard: "Halal Certification",
      description: "Islamic dietary law compliance for Muslim consumers",
      benefits: ["Religious compliance", "Market access", "Consumer confidence", "Export opportunities"],
      icon: "☪️"
    },
    {
      standard: "ISO 22000",
      description: "International food safety management system standard",
      benefits: ["Global recognition", "Systematic approach", "Continuous improvement", "Stakeholder confidence"],
      icon: "🏆"
    },
    {
      standard: "Cold Chain Management",
      description: "Temperature-controlled storage and transportation",
      benefits: ["Product freshness", "Extended shelf life", "Quality maintenance", "Reduced waste"],
      icon: "❄️"
    }
  ]

  const processingSteps = [
    {
      step: "Reception & Inspection",
      description: "Incoming raw materials are received and inspected for quality",
      controls: ["Weight verification", "Visual inspection", "Temperature check", "Documentation"]
    },
    {
      step: "Processing & Value Addition",
      description: "Primary processing and value-added product development",
      controls: ["Process monitoring", "Temperature control", "Time management", "Quality checks"]
    },
    {
      step: "Packaging & Labeling",
      description: "Product packaging with proper labeling and traceability",
      controls: ["Package integrity", "Label accuracy", "Batch coding", "Final inspection"]
    },
    {
      step: "Storage & Distribution",
      description: "Cold storage and controlled distribution to markets",
      controls: ["Temperature monitoring", "Inventory management", "Transport planning", "Delivery tracking"]
    }
  ]

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
                State-of-the-art processing facilities with modern equipment, 
                quality control systems, and certified food safety standards. 
                We transform raw products into high-quality, market-ready items.
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

          <div className="grid lg:grid-cols-3 gap-8">
            {processingServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                    {service.service}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Capabilities:</h4>
                    <div className="space-y-2">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Capacity:</h4>
                    <p className="text-orange-600 font-medium">{service.capacity}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Standards:</h4>
                  <div className="space-y-1">
                    {service.standards.map((standard, idx) => (
                      <div key={idx} className="flex items-center">
                        <ShieldCheckIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
              Quality <span className="text-orange-600">Standards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International certifications and quality management systems ensuring food safety
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{standard.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                    {standard.standard}
                  </h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </div>
                
                <div className="space-y-2">
                  {standard.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Steps */}
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
              Processing <span className="text-orange-600">Workflow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to ensure quality and safety at every step
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="text-2xl">
                      {index === 0 ? '📦' : index === 1 ? '⚙️' : index === 2 ? '🏷️' : '🚚'}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {step.step}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Control Points:</h4>
                    {step.controls.map((control, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{control}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Connection arrow */}
                {index < processingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300 transform -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 w-0 h-0 border-l-4 border-l-orange-300 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2" />
                  </div>
                )}
              </motion.div>
            ))}
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
              initial={{ opacity: 0, x: 60 }}
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
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
