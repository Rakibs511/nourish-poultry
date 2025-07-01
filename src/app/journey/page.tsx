'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CalendarIcon, StarIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Journey() {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  // Implementation details to ensure sustainable practices
  const comprehensivePlan = [
    {
      title: "Malnutrition Solution",
      description: "To eliminate the malnutrition problem of the country through enhanced productivity & accessibility of assured quality animal protein source."
    },
    {
      title: "Employment Creation",
      description: "To create vast employment facilities for the underprivileged people with minimum or no academic background."
    },
    {
      title: "Sustainable Systems",
      description: "To ensure sustainable poultry & fishery rearing systems with minimal environmental hazards & highest safety standards."
    },
    {
      title: "Food Habits",
      description: "To contribute the nation in achieving to a new preference in food habit that exists globally."
    }
  ]

  const implementations = [
    {
      title: "Quality Resources",
      description: "Utilized resources to provide quality chicks, feeds, and technical services at the grass-root level."
    },
    {
      title: "Innovative Approach",
      description: "Initiated an innovative approach backed by technology, social values and mutual respects."
    },
    {
      title: "Environmental Focus",
      description: "Adopted technologies less harmful to the environment and improved bio-security execution."
    }
  ]

  // Success parameters that built our brand equity
  const successParameters = [
    {
      title: "Performance Excellence",
      points: ["Best & consistent FCR", "Lowest cost of live weight produced", "Excellent growth rate"]
    },
    {
      title: "Quality Standards",
      points: ["Best broiler uniformity", "Competitive breeders", "Sincere field staffs"]
    },
    {
      title: "Distribution",
      points: ["Hazard free distribution system"]
    }
  ]

  const milestones = [
    {
      year: "1999",
      title: "The Beginning",
      description: "Nourish Poultry and Hatchery Ltd was established with a dream for a society free from undernourished & underprivileged people",
      icon: "🏢"
    },
    {
      year: "2001",
      title: "Feed Operations",
      description: "Expanded into poultry feed operations with Nourish Feeds Ltd, producing high-quality poultry and aqua feeds",
      icon: "🌾"
    },
    {
      year: "2007",
      title: "Nourish Agro Ltd",
      description: "Established Breeder DOC and feed manufacturing unit with integration farms and R&D facilities",
      icon: "🔬"
    },
    {
      year: "2011",
      title: "Grand Parents Ltd",
      description: "Started production as a distributor of Cobb-500 PS in Bangladesh, focusing on ensuring the reputation of Cobb-500 broilers as the world's most efficient bird with the lowest feed conversion ratio",
      icon: "🥚"
    },
    {
      year: "2011+",
      title: "Further Expansion",
      description: "Introduced Nourish Fisheries Ltd for quality tilapia fry and Nourish Foods Ltd for pre-cooked & cooked poultry products",
      icon: "🐟"
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
                The Journey
                <span className="text-orange-600 block">Begins</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The power of mitigating the socio economic stress coupled with high growth potentiality of poultry & fishery sector encouraged Nourish Management to open a diversified business challenge in this new avenue.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In 1999, the founders of Khaled Group of Companies have introduced Nourish Poultry and Hatchery Ltd. with a dream for a society free from undernourished & underprivileged people. The major products of Nourish Poultry and Hatchery Ltd were Day Old Chicks (DOC) and poultry feeds. The initial motto of Nourish was "We Breed, We Feed, We Nourish", which was focusing on the nourishment of individuals, households & the society.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Since 1999</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <StarIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">24+ Years of Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/journey1.jpg"
                  alt="The Journey Begins"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-orange-400 border-dashed rounded-full opacity-30"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Journey</span> Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 1999, our journey has been marked by continuous growth and innovation in the poultry and fishery sector
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline */}
            <div className="md:hidden absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600" />
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600" />
            
            <div className="space-y-4 md:space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row'
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="md:hidden w-4 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"
                    />
                  </div>

                  {/* Content */}
                  <div 
                    className={`flex-1 pl-6 md:w-5/12 md:flex-none ${
                      index % 2 === 0 
                        ? 'md:text-right md:pr-8' 
                        : 'md:text-left md:pl-8'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl shadow-md py-2 px-4 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setExpandedMilestone(expandedMilestone === milestone.year ? null : milestone.year)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{milestone.icon}</span>
                          <span className="text-sm font-bold text-orange-600">{milestone.year}</span>
                          <span className="text-sm font-medium text-gray-800">{milestone.title}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedMilestone === milestone.year ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="w-5 h-5 text-orange-600" />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: expandedMilestone === milestone.year ? 'auto' : 0,
                          opacity: expandedMilestone === milestone.year ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 pt-2">{milestone.description}</p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Desktop Timeline dot */}
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

      {/* Implementation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Comprehensive <span className="text-orange-600">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nourish has incorporated a comprehensive plan designed to achieve the following goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {comprehensivePlan.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Implementation <span className="text-orange-600">Strategy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To implement this plan, Nourish has taken the following strategic steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Success <span className="text-orange-600">Parameters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Today, Nourish has succeeded to establish one of the strongest brand equity through prolonged customer satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successParameters.map((param, index) => (
              <motion.div
                key={param.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${
                    index === 0 ? "from-blue-400 to-blue-600" : 
                    index === 1 ? "from-green-400 to-green-600" : 
                    "from-orange-400 to-orange-600"
                  } flex items-center justify-center text-2xl`}
                >
                  {index === 0 ? "⭐" : index === 1 ? "🎯" : "🚛"}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{param.title}</h3>
                <p className="text-gray-600">{param.points.join(" • ")}</p>
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
              Be Part of Our Continuing Journey
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join us as we write the next chapter of sustainable agriculture in Bangladesh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Join Our Team
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
