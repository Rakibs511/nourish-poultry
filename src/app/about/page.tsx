'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const aboutSections = [
        {
            title: "People, Place & Planet",
            description: "The past half-century has witnessed remarkable growth in food production, allowing for unprecedented global population expansion while maintaining nutritional standards across diverse communities.",
            icon: "/images/icon-services/people.png",
            href: "/people-place-planet",
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "The Journey Begins",
            description: "The power of mitigating socio-economic stress coupled with high growth potentiality drives our mission to create sustainable solutions for Bangladesh's agricultural future.",
            icon: "/images/icon-services/journey.png",
            href: "/journey",
            color: "from-green-400 to-green-600"
        },
        {
            title: "Vision, Mission, Values",
            description: "From the very beginning, the mission of Nourish is to create the strongest brand value in Bangladesh's agricultural sector through innovation, quality, and sustainable practices.",
            icon: "/images/icon-services/vision.png",
            href: "/vision",
            color: "from-purple-400 to-purple-600"
        },
        {
            title: "Nourish DNA",
            description: "We are not built to compromise on the issues of honesty and integrity. Valuing every stakeholder, we believe in creating lasting relationships based on trust and mutual respect.",
            icon: "/images/icon-services/dna.png",
            href: "/dna",
            color: "from-orange-400 to-orange-600"
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
                                About
                                <span className="text-orange-600 block">Nourish Bangladesh</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Nourish is a leading agro-based company in Bangladesh, part of the Khaled Group of Companies. We are dedicated to providing high-quality poultry products, including Day Old Chicks (DOC), broiler, layer, and fish feed.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">1</div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-gray-800">Our Beginnings in 1999</h4>
                                        <p className="text-gray-600">Since our inception, we have focused on customer satisfaction by providing superior quality Day Old Chicks (DOC).</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">2</div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-gray-800">Expansion in 2001</h4>
                                        <p className="text-gray-600">Responding to market demand, we expanded into poultry feed operations, making a significant impact on local farmers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">3</div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-gray-800">A Trusted Brand Name</h4>
                                        <p className="text-gray-600">Through consistent growth and premium quality, Nourish has become a trusted brand name in the agricultural sector.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">4</div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-gray-800">Group Companies</h4>
                                        <p className="text-gray-600">We have grown to include Nourish Feeds Ltd (2001), Nourish Agro Ltd (2007), and Nourish Grand Parents Ltd (2011).</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Image
                                    src="/images/logo.png"
                                    alt="About Nourish Bangladesh"
                                    fill
                                    className="object-contain p-12"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Sections */}
            <section ref={ref} className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Learn More <span className="text-orange-600">About Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore different aspects of our company, values, and mission
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {aboutSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group"
                            >
                                <Link href={section.href} className="block">
                                    <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 group-hover:shadow-xl transition-all duration-300 h-full">
                                        <div className="flex items-start space-x-6">
                                            <div className="flex-shrink-0">
                                                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300`}>
                                                    <Image
                                                        src={section.icon}
                                                        alt={section.title}
                                                        width={32}
                                                        height={32}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="w-full h-full object-contain filter brightness-0 invert"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                                    {section.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed mb-6">
                                                    {section.description}
                                                </p>
                                                <motion.div
                                                    initial={{ x: -10, opacity: 0 }}
                                                    whileHover={{ x: 0, opacity: 1 }}
                                                    className="flex items-center text-orange-600 font-medium"
                                                >
                                                    Learn More
                                                    <motion.svg
                                                        className="ml-2 w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </motion.svg>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Join us in our mission to create a sustainable and prosperous agricultural future for Bangladesh
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
                            >
                                Get In Touch
                            </Link>
                            <Link
                                href="/career"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
                            >
                                Join Our Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
