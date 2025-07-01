'use client'

import { motion } from 'framer-motion'
import { useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function PeoplePlacePlanet() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

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
                                People, Place &
                                <span className="text-orange-600 block">Planet</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                The past half-century has witness remarkable growth in food production, allowing for a dramatic decrease in the proportion of the world&apos;s people that are hungry, despite a doubling of the total population. Nevertheless, more than one in seven people today still do not have access to sufficient protein and energy from their diet, and even more suffer from some form of micronutrient malnourishment.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    Learn More About Our Mission
                                </button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/people.jpg"
                                    alt="People Place Planet"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-15"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section ref={ref} className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-16"
                    >
                        {/* People Section */}
                        <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                    <span className="text-orange-600">People</span> First
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Bangladesh, though a developing country, is one of the world&apos;s most densely populated countries with 165 million people, more than 70% of which are the part of rural Bangladesh while 31.5% of whom live below the national poverty line. Poverty in Bangladesh is primarily a &apos;rural phenomenon&apos;, with 53% of its rural population classified as poor, comprising about 85% of the country&apos;s poor.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">For economic growth to enhance nutrition, the poor must participate in the growth process and its benefits</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Agricultural growth involving smallholders, especially women, is most effective in reducing poverty</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Despite progress in education, major challenges remain in completion and drop-out rates</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                {/* Background image */}
                                <Image
                                    src="/images/people2.jpg"
                                    alt="People Section Background"
                                    fill
                                    className="object-cover"
                                    style={{ zIndex: 1 }}
                                />
                                {/* Gradient overlay */}

                            </div>
                        </motion.div>

                        {/* Place Section */}
                        <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                    {/* Background image for Place section */}
                                    <Image
                                        src="/images/picture.jpg"
                                        alt="hen picture"
                                        fill
                                        className="object-cover"
                                        style={{ zIndex: 0 }}
                                    />

                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                    Protecting Our <span className="text-orange-600">Place</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    The lack of easily accessible markets and poor infrastructure pose significant constraints in both agricultural input and output markets. Marketing margins are high relative to services provided, and the situation is further aggravated by lack of market information, poor law and order, and existence of syndicates.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Growth needs to come from diversification into high-value crop and non-crop activities</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Value addition in the agro-processing sector, including storage, processing and marketing</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Reform needed in agricultural research, extension systems, and financial regulations</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Planet Section */}
                        <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                    Preserving Our <span className="text-orange-600">Planet</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Bangladesh is one of the most vulnerable states to global climate change according to German Watchb&apos;s Global Climate Risk Index (CRI) of 2011. Projected climatic changes and rise in the sea level are likely to worsen the situation. The world is facing intersecting challenges with population growth and increased demand for processed food, meat, dairy, and fish.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Greater competition for land, water, and energy resources</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Need to address negative effects of food production on environment</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0" />
                                        <p className="text-gray-600">Focus on climate change mitigation and adaptation measures</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                {/* Background image for Planet section */}
                                <Image
                                    src="/images/picture2.jpg"
                                    alt="Planet Section Background"
                                    fill
                                    className="object-cover"
                                    style={{ zIndex: 0 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-400 to-transparent" />
                            </div>
                        </motion.div>
                    </motion.div>
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
                            Join Us in Building a Sustainable Future
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Together, we can create a world where people, place, and planet thrive in harmony.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
                            >
                                Get In Touch
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
