'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function VisionMissionValues() {

  const successParameters = [
    {
      title: "Accessibility",
      description: "Highly accessible products with minimum cost",
      icon: "🎯"
    },
    {
      title: "Affordability",
      description: "Perfectly matched prices with product performance",
      icon: "💰"
    },
    {
      title: "Sustainability",
      description: "Products with sustainable profit performance",
      icon: "🌱"
    },
    {
      title: "Competency",
      description: "Service with highest personal & professional competence",
      icon: "⭐"
    },
    {
      title: "Consistency",
      description: "Consistent Quality of products & services",
      icon: "📈"
    },
    {
      title: "Transparency",
      description: "Business dealings with utmost transparency",
      icon: "🤝"
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
                Vision, Mission &
                <span className="text-orange-600 block">Values</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                From the very beginning, the mission of Nourish is to create the strongest brand value & brand equity in agro-industrial sector by ensuring consistent quality, accessibility, competency and affordability of our products or services to make our customers more capable, committed & sustainable with the vision of nourishment of People, Place and Planet.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nourish endears to add a defined value of quality, innovation, transparency, honesty, social bonding and mutual respect. Each of these values is complemented by binding principles, which explain how they are implemented in our day-to-day business.
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
                  src="/images/vision.jpg"
                  alt="Vision and Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
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
              Our Three <span className="text-orange-600">Pillars</span>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">People</h3>
              <p className="text-gray-600">
                For an active human life access to a balanced food basket is the prerequisite. Nourish is committed to excel the quality of human capital (i.e. people) by providing more balanced & accessible food basket. Achieving the Millennium Development Goal (MDG) of halving poverty to 26.5 percent by 2015 will require a higher growth & income equality in rural areas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Place</h3>
              <p className="text-gray-600">
                Nourish believes that through development of poultry & fishery industry, the rural revitalization goal can be achieved. It also helps rural women by opening up avenues to participate in the economic activities without creating any conflict between socio-religious & financial responsibilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Planet</h3>
              <p className="text-gray-600">
                Nourish believes the nourishment of people & places is important but not at the cost of our planet. The least environmental hazard is a prerequisite for the sustenance of our planet. To materialize this vision, Nourish has introduced environment friendly technologies and has preferred micro-ingredients that come from organic source which are self-degradable and less hazardous to our environment or in broader sense to our planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Parameters Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Key Success <span className="text-orange-600">Parameters</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successParameters.map((param, index) => (
              <motion.div
                key={param.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{param.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{param.title}</h3>
                    <p className="text-gray-600">{param.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Share Our Vision
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join us in our mission to create sustainable solutions for Bangladesh&apos;s agricultural future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Get In Touch
              </Link>
              <Link
                href="/journey"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Our Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
