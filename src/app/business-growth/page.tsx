'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bar } from 'react-chartjs-2'
import Image from 'next/image'
import 'chart.js/auto'
import { ArrowLeftIcon, ArrowUpIcon} from '@heroicons/react/24/outline'


export default function BusinessGrowth() {

    const productionData = {
        labels: ['Broiler Feed', 'Layer Feed', 'Aqua Feed'],
        datasets: [
            {
                label: '2013 (Tons/Month)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [0, 0, 4000]
            },
            {
                label: '2015 Target (Tons/Month)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [40000, 30000, 0]
            }
        ]
    }

    const successStories = [
        {
            title: "Farmer Partnership Program",
            description: "Empowered 500+ farmers with training and quality inputs",
            impact: "Average 40% increase in farmer income",
            year: "2011-2012",
            image: "/images/thumb/2.jpg"
        },
        {
            title: "Export Market Entry",
            description: "Successfully entered international markets with certified products",
            impact: "15% of revenue from exports",
            year: "2013-2015",
            image: "/images/thumb/4.jpg"
        },
        {
            title: "Sustainable Practices",
            description: "Implemented eco-friendly farming and processing methods",
            impact: "30% reduction in environmental footprint",
            year: "2016-2020",
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

                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Business Growth</h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl text-gray-600 leading-relaxed space-y-8"
                        >
                            <p>
                                NOURISH ranks the first position in producing Broiler Feed and third
                                position in Layer Feed in the country. By 2015, the Group expects to
                                produce 40 Thousand tons of feeds per month to establish its leadership
                                in the market. Top management of NOURISH expects four Thousand tons of
                                Aqua Feed production per month in year 2013.
                            </p>

                            <p>
                                In the right side, monthly broiler, layer and fish feed production chart
                                of Nourish shows consistent growth pattern from its commencement.
                            </p>

                            <p>
                                Top management of Nourish expects to produce 1.25 Million DOC per week,
                                32 thousand Parent Stocks per week and 2 Million Broiler Chicken per
                                month by the end of year 2015.
                            </p>

                            <p>
                                From the inception of Nourish, DOC production per week and broiler feed
                                production chart also shows consistent growth pattern which can be easily
                                visible from the right side of the chart.
                            </p>
                        </motion.div>

                        {/* Growth Chart */}
                        <div className="mt-12 bg-white p-6 rounded-lg shadow">
                            <div className="h-[400px]">
                                <Bar
                                    data={productionData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>
                        </div>
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
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
