'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, ArrowUpIcon, UserGroupIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

export default function BusinessGrowth() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const growthMilestones = [
    {
      year: "2018",
      milestone: "Company Foundation",
      description: "Started with a vision to revolutionize poultry and aquaculture in Bangladesh",
      achievement: "Established first hatchery facility",
      impact: "Foundation for future growth"
    },
    {
      year: "2019",
      milestone: "Production Expansion",
      description: "Expanded production capacity and introduced new breeding lines",
      achievement: "50,000 chicks/month capacity",
      impact: "200% production increase"
    },
    {
      year: "2020",
      milestone: "Aquaculture Division",
      description: "Launched tilapia fingerling production and fish feed manufacturing",
      achievement: "Diversified into aquaculture",
      impact: "New market segment entry"
    },
    {
      year: "2021",
      milestone: "Processing Facility",
      description: "Opened modern processing plant with international standards",
      achievement: "HACCP & Halal certified facility",
      impact: "Value-added product line"
    },
    {
      year: "2022",
      milestone: "Market Leadership",
      description: "Became one of the leading suppliers in the region",
      achievement: "25% market share in region",
      impact: "Industry recognition"
    },
    {
      year: "2023",
      milestone: "Technological Innovation",
      description: "Implemented automated systems and smart farming solutions",
      achievement: "Digital transformation",
      impact: "Operational efficiency boost"
    }
  ]

  const businessMetrics = [
    {
      metric: "Production Capacity",
      value: "500K+",
      unit: "chicks/month",
      growth: "+300%",
      description: "Increased from 50K to 500K+ monthly capacity",
      icon: "🐣"
    },
    {
      metric: "Market Reach",
      value: "15+",
      unit: "districts",
      growth: "+400%",
      description: "Expanded from 3 to 15+ districts nationwide",
      icon: "🗺️"
    },
    {
      metric: "Product Lines",
      value: "12+",
      unit: "varieties",
      growth: "+200%",
      description: "Diversified from 4 to 12+ product varieties",
      icon: "📦"
    },
    {
      metric: "Team Size",
      value: "150+",
      unit: "employees",
      growth: "+250%",
      description: "Grew from 20 to 150+ dedicated professionals",
      icon: "👥"
    }
  ]

  const successStories = [
    {
      title: "Farmer Partnership Program",
      description: "Empowered 500+ farmers with training and quality inputs",
      impact: "Average 40% increase in farmer income",
      year: "2020-2023",
      image: "/images/thumb/2.jpg"
    },
    {
      title: "Export Market Entry",
      description: "Successfully entered international markets with certified products",
      impact: "15% of revenue from exports",
      year: "2022-2023",
      image: "/images/thumb/4.jpg"
    },
    {
      title: "Sustainable Practices",
      description: "Implemented eco-friendly farming and processing methods",
      impact: "30% reduction in environmental footprint",
      year: "2021-2023",
      image: "/images/thumb/7.jpg"
    }
  ]

  const futureGoals = [
    "Expand to 25+ districts by 2025",
    "Achieve 1 million chicks monthly capacity",
    "Launch organic product line",
    "Establish research & development center",
    "Carbon-neutral operations by 2026",
    "Regional market expansion"
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
                className="order-2 lg:order-1"
              >
                <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-1 bg-orange-600 mb-6"
              />
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Business
                <span className="text-orange-600 block">Growth</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our remarkable journey of growth and expansion in the poultry and 
                aquaculture industry. From humble beginnings to becoming a regional 
                leader through innovation, quality, and dedication.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center text-orange-600">
                  <ArrowUpIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">300% Growth</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <UserGroupIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">500+ Farmers</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <BuildingOfficeIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">15+ Districts</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/thumb/1.jpg"
                  alt="Business Growth"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Growth arrow animation */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-90 flex items-center justify-center text-2xl"
              >
                📈
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Growth Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our company&apos;s evolution and success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="md:hidden absolute left-[6px] top-0 bottom-0 w-1 bg-orange-200" />
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200" />
            
            <div className="space-y-8 md:space-y-12">
              {growthMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div 
                    className={`pl-10 flex-1 md:w-5/12 ${
                      index % 2 === 0 
                        ? 'md:text-right md:pr-8' 
                        : 'md:text-left md:pl-8'
                    }`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 group hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-orange-600">{milestone.year}</h3>
                        <div className="text-3xl">{index === 0 ? '🏗️' : index === 1 ? '📈' : index === 2 ? '🐟' : index === 3 ? '🏭' : index === 4 ? '🏆' : '💡'}</div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{milestone.milestone}</h4>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm font-medium text-gray-800">{milestone.achievement}</span>
                        </div>
                <div className="text-sm text-orange-600 font-medium mt-2">{milestone.impact}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  {/* Timeline dot - mobile version */}
                  <div className="absolute left-[4px] md:hidden">
                    <div className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10" />
                  </div>

                  {/* Timeline dot - desktop version */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"
                    />
                  </div>

                  {/* Empty space for desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Metrics */}
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
              Growth <span className="text-orange-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifiable achievements demonstrating our business expansion
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{metric.icon}</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg text-gray-600 mb-2">{metric.unit}</div>
                <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {metric.growth} growth
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {metric.metric}
                </h3>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success <span className="text-orange-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Impactful initiatives that drove our growth and community development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-orange-600 font-bold text-lg">{story.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Future <span className="text-orange-600">Vision & Goals</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our roadmap for continued growth and innovation, focusing on 
                sustainability, technology adoption, and market expansion to 
                serve farmers and communities better.
              </p>
              
              <div className="space-y-4">
                {futureGoals.map((goal, index) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <ArrowUpIcon className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold mb-4">Strategic Targets 2025</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Production Capacity</span>
                      <span className="font-bold">1M chicks/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Market Coverage</span>
                      <span className="font-bold">25+ districts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Export Markets</span>
                      <span className="font-bold">5 countries</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Farmer Partners</span>
                      <span className="font-bold">1,000+</span>
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
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Growth Story
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Partner with us and be part of our continued success and expansion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Partner With Us
              </Link>
              <Link
                href="/awards"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                View Awards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
