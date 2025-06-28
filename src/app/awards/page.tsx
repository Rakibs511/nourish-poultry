'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, TrophyIcon, StarIcon, GifIcon } from '@heroicons/react/24/outline'

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const awards = [
    {
      title: "Best Poultry Producer 2023",
      organization: "Bangladesh Poultry Association",
      year: "2023",
      category: "Industry Excellence",
      description: "Recognized for outstanding contribution to the poultry industry and innovative farming practices",
      significance: "National recognition for industry leadership",
      icon: "🥇"
    },
    {
      title: "Excellence in Aquaculture Award",
      organization: "Ministry of Fisheries and Livestock",
      year: "2022",
      category: "Aquaculture Innovation",
      description: "Awarded for pioneering sustainable tilapia farming techniques and community development",
      significance: "Government recognition for innovation",
      icon: "🐟"
    },
    {
      title: "Quality Assurance Champion",
      organization: "Food Safety Authority",
      year: "2022",
      category: "Food Safety",
      description: "Honored for maintaining highest food safety standards and HACCP implementation",
      significance: "Food safety excellence recognition",
      icon: "🛡️"
    },
    {
      title: "Sustainable Business Award",
      organization: "Bangladesh Chamber of Commerce",
      year: "2021",
      category: "Sustainability",
      description: "Recognized for implementing eco-friendly practices and reducing environmental impact",
      significance: "Environmental stewardship award",
      icon: "🌱"
    },
    {
      title: "Rural Development Excellence",
      organization: "Department of Agriculture Extension",
      year: "2021",
      category: "Community Impact",
      description: "Awarded for significant contribution to rural livelihood improvement and farmer empowerment",
      significance: "Social impact recognition",
      icon: "👥"
    },
    {
      title: "Innovation in Agriculture",
      organization: "Bangladesh Agricultural Research Institute",
      year: "2020",
      category: "Technology Innovation",
      description: "Recognized for adopting modern technology and smart farming solutions",
      significance: "Technology leadership award",
      icon: "💡"
    }
  ]

  const recognitions = [
    {
      type: "Media Coverage",
      items: [
        "Featured in Bangladesh Agriculture Today (2023)",
        "Spotlight in Poultry World Magazine (2022)",
        "Documentary on sustainable farming (2022)",
        "Business interview on national TV (2021)"
      ]
    },
    {
      type: "Industry Memberships",
      items: [
        "Bangladesh Poultry Association - Executive Member",
        "World Poultry Science Association - Member",
        "Aquaculture Association of Bangladesh - Board Member",
        "Chamber of Commerce - Active Member"
      ]
    },
    {
      type: "Certifications",
      items: [
        "HACCP Certification - Food Safety",
        "Halal Certification - Religious Compliance",
        "ISO 22000 - Food Safety Management",
        "Organic Certification - Selected Products"
      ]
    }
  ]

  const achievements = [
    {
      metric: "Industry Ranking",
      value: "Top 5",
      description: "Among leading poultry producers in Bangladesh",
      icon: "🏆"
    },
    {
      metric: "Customer Satisfaction",
      value: "98%",
      description: "Customer satisfaction rate based on surveys",
      icon: "😊"
    },
    {
      metric: "Quality Score",
      value: "A+",
      description: "Food safety and quality rating",
      icon: "⭐"
    },
    {
      metric: "Market Share",
      value: "25%",
      description: "Regional market share in poultry sector",
      icon: "📊"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Rahman Ahmed",
      position: "Director, Bangladesh Poultry Association",
      quote: "Nourish Bangladesh has consistently demonstrated excellence in poultry production and has been a pioneer in adopting sustainable farming practices.",
      image: "/images/thumb/5.jpg"
    },
    {
      name: "Prof. Fatima Khan",
      position: "Agricultural Science, Dhaka University",
      quote: "Their contribution to the aquaculture sector has been remarkable, especially in developing efficient tilapia farming systems.",
      image: "/images/thumb/8.jpg"
    },
    {
      name: "Mohammad Hassan",
      position: "Food Safety Inspector",
      quote: "The company maintains exemplary food safety standards and has been a role model for other producers in the industry.",
      image: "/images/thumb/2.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-transparent opacity-60" />
        
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
              className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
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
                className="w-20 h-1 bg-amber-600 mb-6"
              />
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Awards &
                <span className="text-amber-600 block">Recognition</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our commitment to excellence has been recognized by industry leaders, 
                government bodies, and professional organizations. These awards reflect 
                our dedication to quality, innovation, and sustainable practices.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-amber-600">
                  <TrophyIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">6+ Awards</span>
                </div>
                <div className="flex items-center text-amber-600">
                  <StarIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Industry Leader</span>
                </div>
                <div className="flex items-center text-amber-600">
                  <GifIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/thumb/5.jpg"
                  alt="Awards and Recognition"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
              </div>
              
              {/* Trophy animation */}
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500 rounded-full opacity-90 flex items-center justify-center text-2xl"
              >
                🏆
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-amber-600">Awards & Honors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from prestigious organizations for our contributions to the industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-amber-600 font-medium mb-4">{award.organization}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Category:</span>
                    <p className="text-sm text-gray-600">{award.category}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Description:</span>
                    <p className="text-sm text-gray-600">{award.description}</p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">{award.significance}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Metrics */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Achievement <span className="text-amber-600">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators that reflect our industry standing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{achievement.icon}</div>
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {achievement.metric}
                </h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Categories */}
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
              Professional <span className="text-amber-600">Recognition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our involvement and recognition in various professional organizations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">
                    {index === 0 ? '📺' : index === 1 ? '🤝' : '📜'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                    {recognition.type}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {recognition.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Industry <span className="text-amber-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What industry leaders and experts say about our work
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-amber-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                <div className="flex text-amber-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Committed to Excellence
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Join us in our mission to achieve even greater heights in agriculture and aquaculture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-300"
              >
                Partner With Us
              </Link>
              <Link
                href="/certifications"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300"
              >
                View Certifications
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
