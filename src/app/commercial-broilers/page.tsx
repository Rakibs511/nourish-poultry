'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function CommercialBroilers() {
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
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  There is large commercial broiler farm established in 2004 at Ujilabo, Sreepur of Gazipur district. Total shed capacity is 55000. Total 18 sheds are there, of which 8 large sheds are used for commercial broiler production and other 10 sheds are separated as Research and Development Unit.
                </p>
                <p>
                  Recently, NPHL started small-scale commercial broiler integration at different regions of Gazipur, Mymensingh and Tangail district as pilot projects. The initial replacement is 100000 per month. Extensive work is going on to develop sustainable integration model for the farmers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hen_home.jpg"
                  alt="Commercial Broilers"
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">2004</div>
              <div className="text-gray-600">Established</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">55,000</div>
              <div className="text-gray-600">Total Capacity</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
              <div className="text-gray-600">Total Sheds</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">100K</div>
              <div className="text-gray-600">Monthly Replacement</div>
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
              Commercial Broiler Integration
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join our sustainable farming initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Get In Touch
              </Link>
              <Link
                href="/qa-system"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Quality Assurance
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
