'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function GrandParent() {
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
                                Grand Parent
                                <span className="text-orange-600 block">Stocks</span>
                            </h1>

                            <div className="space-y-6">
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Since its commencement, Nourish GP has focused on ensuring the reputation of Cobb-500 broilers as the world&apos;s most efficient bird with the lowest feed conversion.
                                </p>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Among all poultry operations, GP farming is the most complicated and sophisticated techniques that require the highest degree of bio- security and optimum managerial efficiency.
                                </p>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    According to its prerequisite, the farm is located in an isolated and remote place. Sheds as well as workers place provided with modern bio-security facilities.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/hen.jpg"
                                    alt="Grand Parent Stocks"
                                    fill
                                    className="object-cover"
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
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
                            Advanced GP Farming
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Experience the highest standards in poultry breeding
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
                            >
                                Get In Touch
                            </Link>
                            <Link
                                href="/qa-system"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
                            >
                                Quality Assurance
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
