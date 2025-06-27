'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftIcon, 
  DocumentArrowDownIcon, 
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'

export default function Download() {
  const downloads = [
    {
      title: "Company Brochure",
      description: "Complete overview of Nourish Bangladesh's products and services",
      fileSize: "2.3 MB",
      type: "PDF",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Product Catalog",
      description: "Detailed information about all our feed products and specifications",
      fileSize: "4.1 MB", 
      type: "PDF",
      icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Chick Care Guide",
      description: "Essential guidelines for proper care of day-old chicks",
      fileSize: "1.8 MB",
      type: "PDF", 
      icon: <DocumentTextIcon className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Technical Specifications",
      description: "Detailed technical data sheets for all products",
      fileSize: "3.2 MB",
      type: "PDF",
      icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Quality Certificates",
      description: "ISO certifications and quality assurance documents",
      fileSize: "1.5 MB",
      type: "PDF",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "Company Presentation",
      description: "Corporate presentation showcasing our capabilities",
      fileSize: "8.7 MB",
      type: "PPT",
      icon: <PresentationChartLineIcon className="w-8 h-8" />,
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-1 bg-orange-600 mx-auto mb-6"
            />
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Download <span className="text-orange-600">Center</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive library of brochures, technical documents, 
              and resources to learn more about Nourish Bangladesh's products and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Grid */}
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
              Available <span className="text-orange-600">Downloads</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any document below to download it instantly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">{item.fileSize}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                  Download Now
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
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
              Need More <span className="text-orange-600">Information?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Contact us for custom documents or additional resources
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Quotations",
                description: "Get personalized pricing and product recommendations",
                icon: "💰",
                action: "Request Quote",
                href: "/contact"
              },
              {
                title: "Technical Support",
                description: "Access to our expert technical team for guidance",
                icon: "🔧",
                action: "Get Support", 
                href: "/contact"
              },
              {
                title: "Training Materials",
                description: "Educational resources for optimal product usage",
                icon: "📚",
                action: "Learn More",
                href: "/contact"
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100"
              >
                <div className="text-4xl mb-6">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                <Link
                  href={resource.href}
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {resource.action}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Subscribe to our newsletter to receive the latest product updates and resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-orange-300 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
