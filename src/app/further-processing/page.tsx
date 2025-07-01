'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function FurtherProcessing() {
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

          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Further Processing
              <span className="text-orange-600 block">Food Items</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed space-y-8"
            >
              <p>
                To make the brand familiar up to the retail end, Nourish is gradually concentrating 
                on the consumer items like edible eggs & precooked poultry products. The idea is to 
                incorporate a strategic forward integration into retail and food through value added 
                products that reach the consumer&apos;s table with the added convenience of easy preparation 
                and less cooking time.
              </p>

              <p>
                Poultry processing operations of Nourish continue to be an important means of 
                supporting rural farmers in their production, which in near future will come 
                directly from farmers. In response to the fluctuations in the market, Nourish 
                believes that, these processed products have the potential to create a greater 
                control over the selling price of products.
              </p>

              <p>
                Currently, Nourish working on the shelf-life of chilled, precooked and processed 
                chicken products stored in room temperature and under modified atmosphere in order 
                to find out the microbiological, chemical and sensory attributes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
