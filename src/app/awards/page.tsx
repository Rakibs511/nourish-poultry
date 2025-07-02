'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    name: "Dr. Farhana Rahman",
    position: "President, Bangladesh Poultry Association",
    image: "/images/user.webp",
    quote: "Nourish has set a benchmark in the poultry industry with their commitment to quality and innovation."
  },
  {
    name: "Mr. Anisur Rahman",
    position: "Editor, Agriculture Today",
    image: "/images/user.webp",
    quote: "Their sustainable practices and community focus are truly exemplary in the sector."
  },
  {
    name: "Prof. Md. Shafiqul Islam",
    position: "Dept. of Fisheries, University of Dhaka",
    image: "/images/user.webp",
    quote: "Nourish's approach to aquaculture and food safety is a model for others to follow."
  }
]

export default function Awards() {
  const ref = useRef(null)

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


  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="relative pt-32 pb-20" ref={ref}>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Winner of Asia&apos;s Emerging Poultry Integrator Award 2011
            </h1>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="relative w-48 md:w-56 h-72 md:h-80 rounded-lg overflow-hidden mx-auto md:mx-0">
                    <Image
                      src="/images/award1.jpg"
                      alt="Mr. Nazmul Ahsan Khaled - Managing Director, Nourish Bangladesh"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Nourish was awarded as the &quot;Emerging Poultry Integrator of Asia&quot; in LIVESTOCK ASIA Expo and Forum 2011, 
                      at Kuala Lumpur, Malaysia. The honorable Managing Director of Nourish Bangladesh Mr. Nazmul Ahsan Khaled 
                      received the award on behalf of Nourish.
                    </p>
                    <p className="text-lg font-semibold text-gray-900">Mr. Nazmul Ahsan Khaled</p>
                    <p className="text-amber-600">Managing Director, Nourish Bangladesh</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">LIVESTOCK ASIA Expo 2011 Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  LIVESTOCK ASIA Expo and Forum 2011 was held at Kuala Lumpur Convention Centre, Kuala Lumpur, Malaysia 
                  hosted by Department of Veterinary Services, Ministry of Agriculture and Agro-based Industry Malaysia 
                  and organized by United Business Media (UBM), Malaysia. The purpose of the show was to create a platform 
                  for the industry players to showcase their products internationally and at the same time providing them 
                  with the opportunity to expand their business networks. Also the forum announces and awarded the local 
                  (Malaysian) and internationally renowned company of South Asia for their outstanding contribution in 
                  poultry industry in the last decade and Nourish Poultry and Hatchery Ltd (NPHL) is one of them.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <p className="text-gray-700 leading-relaxed">
                  Nourish mainly focuses on the role of poultry production in food security of Bangladesh. During the 
                  interactive panel discussion, the honorable Director of Nourish Bangladesh explains the situation of 
                  poultry industry of Bangladesh along with its current challenges and enormous future possibilities. 
                  Nourish also highlights the role of poultry industry which can appear as the major poverty alleviation 
                  tool for Bangladesh. The seminar was very much interactive and provides a unique platform for knowledge 
                  sharing among the leading poultry players of this region. During this seminar Nourish Poultry and 
                  Hatchery Ltd was awarded as emerging poultry integrator of Asia.
                </p>
              </motion.div>
            </div>
          </motion.div>
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
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
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
