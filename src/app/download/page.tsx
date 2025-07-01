'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeftIcon, 
  DocumentArrowDownIcon, 
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function Download() {
  const downloads = [
    {
      title: "Nourish 2025: Our Journey towards excellence",
      description: "Explore our journey and vision for the future of poultry industry",
      fileSize: "5.59 MB",
      type: "PDF",
      icon: "📈",
      color: "from-blue-400 to-blue-600",
      filePath: "/download/Nourish 2025_Our Journey towards excellence.pdf"
    },
    {
      title: "Nourish Circularity 26 Sustainability",
      description: "Powering a Greener Tomorrow through sustainable practices",
      fileSize: "4.0 MB",
      type: "PDF",
      icon: "🌱",
      color: "from-green-400 to-green-600",
      filePath: "/download/Nourish Circularity & Sustainability Powering a Greener Tomorrow.pdf"
    },
    {
      title: "Poultry Sector in Bangladesh",
      description: "Pathways for Ascending to New Heights 2025",
      fileSize: "3.25 MB",
      type: "PDF",
      icon: "📊",
      color: "from-orange-400 to-orange-600",
      filePath: "/download/Poultry Sector in Bangladesh-Pathways for Ascending to New Heights_2025_Low.pdf"
    }
  ]

  const features = [
    {
      title: "Research Reports",
      description: "Access detailed industry analysis and market research reports",
      icon: "🔍"
    },
    {
      title: "Technical Guidelines",
      description: "Step-by-step guides for optimal farming practices",
      icon: "📋"
    },
    {
      title: "Success Stories",
      description: "Real examples of successful implementations and results",
      icon: "🌟"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Resource <span className="text-orange-600">Center</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Access our comprehensive collection of guides, reports, and documentation to help you achieve optimal results in poultry farming
          </motion.p>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Available <span className="text-orange-600">Downloads</span>
            </h2>
            <p className="text-xl text-gray-600">
              Click on any document below to download or view
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${item.color} text-2xl`}>
                  {item.icon}
                </div>
                <div>
                  <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium">
                    {item.type}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    File size: {item.fileSize}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>

              <div className="flex gap-4">
                <a
                  href={item.filePath}
                  download
                  className="flex items-center justify-center flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                  Download
                </a>
                {item.type === "PDF" && (
                  <a
                    href={item.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <DocumentTextIcon className="w-5 h-5 mr-2" />
                    View
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
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
              Can&apos;t find what you&apos;re looking for? Contact us for custom documents or additional resources
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
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-center"
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
                className="flex-1 px-6 py-3 rounded-full border-0 text-white focus:ring-2 focus:ring-gray-500 focus:outline-none bg-gray-700 placeholder-gray-400"
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
