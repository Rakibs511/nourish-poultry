'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function DayOldChicks() {
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
                Broiler & Layer
                <span className="text-orange-600 block">Day Old Chicks</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  From the beginning, Nourish worked on those breeds which suits most effectively to our environment. Our primary breed is Cobb-500 which is renowned as the world's best broiler breed.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Most importantly, we always try to offer our farmers the best possible product like DOC that copes most suitably to our environment and farmers competency.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Almost all of our breeder sheds are Environmentally Controlled (EC) & incubators are designed & built to maximize hatchery performances, both technically and economically.
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
                  src="/images/slider/chicks.jpg"
                  alt="Day Old Chicks"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Breeds</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-600">Cobb-500 - World's best broiler breed</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-600">Environmentally suitable breeds</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-600">Best possible DOC products</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Facilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-600">Environmentally Controlled (EC) breeder sheds</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-600">Advanced incubator design</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <p className="text-gray-600">Maximized hatchery performance</p>
                </div>
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
              Premium Quality Day Old Chicks
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Start your poultry farming journey with the best breeds
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
