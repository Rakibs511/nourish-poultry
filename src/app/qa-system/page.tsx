'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function QualityAssurance() {
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
                With the vision of nourishment of People, Place and Planet, NOURISH explored a defined value of Quality to be built in its product through Quality Assurance System.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To achieve that defined quality, NOURISH sources:
              </p>
              <ul className="text-xl text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                <li>The best starting material</li>
                <li>Handled by competent professionals</li>
                <li>Using efficient machines</li>
                <li>Following proper methods & pre-set control procedures</li>
                <li>With conformity checks at every step of production</li>
              </ul>
              <p className="text-xl text-gray-600 leading-relaxed mt-4">
                This comprehensive approach helps protect our prestigious position and secure our business trend.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/qa.jpg"
                  alt="Quality Assurance"
                  fill
                  className="object-cover"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quality Assurance <span className="text-orange-600">Details</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <p className="text-gray-600 mb-4">
                The Quality Assurance System is a multi-disciplinary work involving:
              </p>
              <ul className="text-gray-600 list-disc pl-6 space-y-2 mb-4">
                <li>Quality Control Lab / Nutrition Lab</li>
                <li>Microbiological Lab</li>
                <li>Ingredient Control</li>
                <li>Process Control</li>
                <li>Storage & Inventory Control</li>
                <li>Personnel Safety & Environmental Issues</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Quality goal is never achieved or successful without the intimate participation of all the segments in a manufacturing unit.
              </p>
              <p className="text-gray-600">
                Nourish believes, nature & diversity of job in a Quality Assurance System necessitate the most critical attention of the management system to implement its goal which in turn pays the best product with all essential criteria to serve the end user of the product.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <div className="space-y-4">
                <p className="text-gray-600">
                  Quality Assurance System is best implemented through proactive measures initiated at the very beginning of product planning.
                </p>
                <p className="text-gray-600">
                  Our Nutrition lab plays a crucial role as a reactive core-component of the system.
                </p>
                <p className="text-gray-600">
                  With our noble vision of quality excellence, Nourish has built the country&apos;s best Wet Chemistry Nutrition Lab featuring:
                </p>
                <ul className="text-gray-600 list-disc pl-6 space-y-2">
                  <li>Feed Analytical Machineries from GERHARDT (Germany)</li>
                  <li>Global leader & recognized brand equipment</li>
                  <li>Comprehensive conventional equipment for proximate analysis</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 mt-8"
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                We successfully operate state-of-the-art equipment in our lab, enabling us to build:
              </p>
              <ul className="text-gray-600 list-disc pl-6 space-y-2">
                <li>A unique & reliable data bank</li>
                <li>Support for advanced analytical tools (NIRS, AAS & HPLC)</li>
                <li>Comprehensive quality analysis capabilities</li>
              </ul>
              <p className="text-gray-600 font-medium mt-6">
                Our Commitment to Excellence:
              </p>
              <p className="text-gray-600">
                We prioritize work done with uncompromised ethical values and global acceptance standards, focusing on quality over quantity. Our approach favors genuine results over mere accumulation of data from high-tech devices.
              </p>
            </div>
          </motion.div>
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
              Partner with Us for Quality Excellence
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Experience the difference our Quality Assurance System can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Get In Touch
              </Link>
              <Link
                href="/vision"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Our Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
