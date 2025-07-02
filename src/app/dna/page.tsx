'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function NourishDNA() {

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
                Nourish <span className="text-orange-600">DNA</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are not built to compromise on the issues of honesty and integrity. Valuing every individual is a key philosophy of our group. Our Code of Conduct reinforces our core values and is a guide to help each team member to make the right ethical decisions and resolve any issues that he may encounter.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We stress the importance of looking at quality from the customer&apos;s point of view. Examine the quality of our product & service scrupulously just as a cautious customer would. We believe that if we focus on customers; everything else will follow.
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
                  src="/images/dna.jpg"
                  alt="Nourish DNA"
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

      {/* Core Values Section */}
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
              Our Core <span className="text-orange-600">Principles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation & Research</h3>
              <p className="text-gray-600">
                We believe that innovation, research and development are very important to maintain customer satisfaction. We are continuously working on developing new solutions and implementing new ideas & technologies that would serve our customers better. Because of this belief, every year we invest heavily on research and development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                We have several labs which continuously monitor the quality of our products. Our rigorous screening for the quality of the raw materials is a key for achieving high quality finished products. We have collect vast amount of data and continuously changing our formulas to achieve the best possible results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Integrity</h3>
              <p className="text-gray-600">
                We believe that social bonding, mutual respect & economic emancipation are the three primary parameters for sustenance of a successful society. In other words, &apos;economic emancipation&apos; is a necessity but not at the cost of social inequality, mutual disrespect & social degradation.
              </p>
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
              Join Our Journey
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Together, we can create a future built on honesty, integrity, and innovation.
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
