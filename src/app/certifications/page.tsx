'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, ShieldCheckIcon, DocumentCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      name: "HACCP Certification",
      fullName: "Hazard Analysis Critical Control Points",
      authority: "Food Safety Authority of Bangladesh",
      validUntil: "2025-12-31",
      scope: "All processing facilities and production lines",
      description: "Comprehensive food safety management system ensuring safe food production",
      benefits: [
        "Systematic hazard identification",
        "Critical control points monitoring",
        "Documentation and record keeping",
        "Continuous improvement process"
      ],
      icon: "🔬"
    },
    {
      name: "Halal Certification",
      fullName: "Islamic Dietary Law Compliance",
      authority: "Islamic Foundation Bangladesh",
      validUntil: "2024-08-15",
      scope: "Poultry processing and meat products",
      description: "Compliance with Islamic dietary laws for Muslim consumers",
      benefits: [
        "Religious compliance assurance",
        "Access to Muslim markets",
        "Consumer trust and confidence",
        "Export market opportunities"
      ],
      icon: "☪️"
    },
    {
      name: "ISO 22000:2018",
      fullName: "Food Safety Management Systems",
      authority: "International Organization for Standardization",
      validUntil: "2026-03-20",
      scope: "Food safety management across all operations",
      description: "International standard for food safety management systems",
      benefits: [
        "Global recognition",
        "Systematic approach to food safety",
        "Risk-based thinking",
        "Stakeholder confidence"
      ],
      icon: "🏆"
    },
    {
      name: "Organic Certification",
      fullName: "Organic Production Standards",
      authority: "Bangladesh Organic Products Manufacturers Association",
      validUntil: "2024-11-30",
      scope: "Selected organic product lines",
      description: "Certification for organic farming and production methods",
      benefits: [
        "Premium market positioning",
        "Environmental sustainability",
        "Chemical-free production",
        "Health-conscious consumers"
      ],
      icon: "🌱"
    },
    {
      name: "Good Manufacturing Practice",
      fullName: "GMP Compliance Certificate",
      authority: "Department of Drug Administration",
      validUntil: "2025-06-10",
      scope: "Feed manufacturing facilities",
      description: "Good manufacturing practices for animal feed production",
      benefits: [
        "Quality assurance",
        "Contamination prevention",
        "Process standardization",
        "Regulatory compliance"
      ],
      icon: "⚙️"
    },
    {
      name: "Environmental Compliance",
      fullName: "Environmental Clearance Certificate",
      authority: "Department of Environment",
      validUntil: "2025-09-25",
      scope: "All production facilities and operations",
      description: "Environmental impact assessment and compliance certification",
      benefits: [
        "Environmental protection",
        "Sustainable operations",
        "Regulatory compliance",
        "Community responsibility"
      ],
      icon: "🌍"
    }
  ]

  const complianceAreas = [
    {
      area: "Food Safety",
      standards: ["HACCP", "ISO 22000", "GMP"],
      description: "Comprehensive food safety management ensuring product quality and consumer protection",
      icon: "🛡️"
    },
    {
      area: "Quality Management",
      standards: ["ISO 9001", "Quality Control Systems", "Product Testing"],
      description: "Quality management systems for consistent product excellence",
      icon: "⭐"
    },
    {
      area: "Environmental",
      standards: ["Environmental Clearance", "Waste Management", "Carbon Footprint"],
      description: "Environmental compliance and sustainable business practices",
      icon: "🌿"
    },
    {
      area: "Religious & Ethical",
      standards: ["Halal Certification", "Organic Standards", "Animal Welfare"],
      description: "Religious compliance and ethical business practices",
      icon: "🤝"
    }
  ]

  const auditProcess = [
    {
      stage: "Pre-Audit Preparation",
      description: "Documentation review and facility preparation",
      activities: ["Document preparation", "Staff training", "Facility inspection", "System verification"]
    },
    {
      stage: "Audit Execution",
      description: "On-site audit by certified auditors",
      activities: ["Documentation review", "Process observation", "Staff interviews", "Record examination"]
    },
    {
      stage: "Corrective Actions",
      description: "Implementation of required improvements",
      activities: ["Issue identification", "Corrective measures", "Timeline planning", "Progress monitoring"]
    },
    {
      stage: "Certification Award",
      description: "Certificate issuance upon successful completion",
      activities: ["Final verification", "Certificate issuance", "Validity period", "Maintenance schedule"]
    }
  ]

  const benefits = [
    "Enhanced product quality and safety",
    "Increased consumer confidence",
    "Access to premium markets",
    "Regulatory compliance assurance",
    "Competitive market advantage",
    "Export market opportunities",
    "Risk management and mitigation",
    "Operational efficiency improvement"
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
                Certifications &
                <span className="text-orange-600 block">Compliance</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our comprehensive certification portfolio demonstrates our commitment 
                to quality, safety, and compliance. We maintain the highest standards 
                through rigorous certification processes and continuous monitoring.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-orange-600">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">6+ Certificates</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <DocumentCheckIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Fully Compliant</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <GlobeAltIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">International Standards</span>
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
                  src="/images/thumb/7.jpg"
                  alt="Certifications and Compliance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </div>
              
              {/* Certificate animation */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-90 flex items-center justify-center text-2xl"
              >
                📜
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive certification portfolio ensuring quality, safety, and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-orange-600 font-medium text-sm mb-4">{cert.fullName}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Authority:</span>
                    <p className="text-sm text-gray-600">{cert.authority}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Valid Until:</span>
                    <p className="text-sm text-green-600 font-medium">{cert.validUntil}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Scope:</span>
                    <p className="text-sm text-gray-600">{cert.scope}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Description:</span>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Benefits:</h4>
                  <div className="space-y-1">
                    {cert.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
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
              Compliance <span className="text-orange-600">Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive compliance framework covering all aspects of our operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {area.area}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                
                <div className="space-y-2">
                  {area.standards.map((standard, idx) => (
                    <div key={idx} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                      {standard}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
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
              Audit <span className="text-orange-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic audit process ensuring continuous compliance and improvement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditProcess.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="text-2xl">
                      {index === 0 ? '📋' : index === 1 ? '🔍' : index === 2 ? '🔧' : '✅'}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {stage.stage}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Activities:</h4>
                    {stage.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Connection arrow */}
                {index < auditProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300 transform -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 w-0 h-0 border-l-4 border-l-orange-300 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Certification <span className="text-orange-600">Benefits</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our comprehensive certification portfolio provides multiple benefits 
                for our business, customers, and stakeholders, ensuring quality, 
                safety, and market access.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-6xl mb-6">📊</div>
                  <h3 className="text-2xl font-bold mb-4">Compliance Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Certification Coverage</span>
                      <span className="font-bold">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Audit Success Rate</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Standards Compliance</span>
                      <span className="font-bold">A+ Grade</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Renewal Rate</span>
                      <span className="font-bold">100%</span>
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
              Trust Our Certified Quality
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Partner with us for certified quality products and compliance assurance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/processing"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                View Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
