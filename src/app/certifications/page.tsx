'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Certifications() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Our <span className="text-amber-600">Certifications</span>
            </h1>
            
            <div className="space-y-12">
              {/* HACCP Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-72">
                    <Image
                      src="/images/cert.jpg"
                      alt="HACCP Certification"
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>
                  <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      HACCP (Hazard Analysis & Critical Control Points)
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      HACCP (Hazard Analysis & Critical Control Points) - is an international food-safety system for preventing microbiological, chemical and physical contamination along the food supply chain. With the vision of nourishment of People, Place and Planet NOURISH ensures food-safety by implementing the HACCP System to all feed mills and major poultry units.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ISO Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-72">
                    <Image
                      src="/images/iso.png"
                      alt="ISO 9001:2001 Certification"
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>
                  <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      ISO 9001:2001
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Quality management system at nourish is ISO 9001:2001 certification. Nourish believes, nature & diversity of job in a quality assurance system and through this internationally recognized quality management system, the group is able to control and monitor quality specific factors, which ensure consistency in its products and achieving customer satisfaction.
                    </p>
                  </div>
                </div>
              </motion.div>
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
              Committed to Quality Excellence
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Our certifications represent our dedication to maintaining the highest standards
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
