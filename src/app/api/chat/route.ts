import { NextResponse } from 'next/server'

// Define response patterns
type ResponseData = {
    patterns?: string[],
    reply: string,
    suggestions: string[],
    pageLink?: {
        url: string,
        text: string
    }
}
const responses: Record<string, ResponseData> = {
    greeting: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
        reply: 'Hello! Welcome to Nourish Poultry. How can I assist you today?',
        suggestions: [
            'Tell me about your products',
            'What services do you offer?',
            'How can I contact you?',
            'How can I become a dealer?',
        ]
    },
    howAreYou: {
        patterns: ['how are you', 'how r u', 'how you doing', 'whats up'],
        reply: 'I\'m doing great! How can I help you with Nourish\'s products and services?',
        suggestions: [
            'What products do you have?',
            'Tell me about your company',
            'I need technical support'
        ]
    },
    about: {
        patterns: ['about', 'company', 'who are you', 'nourish'],
        reply: 'Nourish Poultry & Hatchery Ltd. is a leading poultry industry integrator in Bangladesh. We focus on quality poultry products and sustainable practices.',
        suggestions: [
            'What is your vision?',
            'Tell me about quality standards',
            'Where are your facilities?'
        ],
        pageLink: {
            url: '/about',
            text: 'Learn More About Us'
        }
    },
    products: {
        patterns: ['products', 'what do you sell', 'what do you offer'],
        reply: 'We offer high-quality poultry products including Broiler Feed, Layer Feed, Day-Old-Chicks, Commercial Broilers, and more. Each product follows strict quality standards.',
        suggestions: [
            'Tell me about your feed',
            'What about day-old chicks?',
            'Do you offer technical support?'
        ],
        pageLink: {
            url: '/about',
            text: 'Learn More About Us'
        }
    },
    feed: {
        patterns: ['feed', 'broiler feed', 'layer feed', 'nutrition'],
        reply: 'Our feed is formulated with premium ingredients and advanced nutritional science. We ensure optimal FCR and growth performance.',
        suggestions: [
            'What are the specifications?',
            'How do I store feed?',
            'What about pricing?'
        ]
    },
    chicks: {
        patterns: ['chicks', 'day old', 'breeds', 'cobb'],
        reply: 'We provide Cobb-500 day-old chicks, renowned as the world\'s best broiler breed. Our facilities are environmentally controlled to ensure maximum quality.',
        suggestions: [
            'How do I care for chicks?',
            'What about vaccination?',
            'Tell me about breeds'
        ]
    },
    quality: {
        patterns: ['quality', 'standards', 'certification'],
        reply: 'We maintain strict quality standards with state-of-the-art labs and testing facilities. Our products meet international quality benchmarks.',
        suggestions: [
            'What certifications do you have?',
            'How do you maintain quality?',
            'Tell me about testing'
        ]
    },
    technical: {
        patterns: ['technical', 'support', 'help', 'guidance'],
        reply: 'Our technical team provides comprehensive support including farm setup guidance, equipment recommendations, and best practices.',
        suggestions: [
            'How do I start farming?',
            'What equipment do I need?',
            'Do you provide training?'
        ],
        pageLink: {
            url: '/technical-support',
            text: 'Get Technical Support'
        }
    },
    contact: {
        patterns: ['contact', 'reach', 'location', 'address'],
        reply: 'You can reach us through our contact page. We have facilities across Bangladesh to serve you better.',
        suggestions: [
            'Where are your offices?',
            'How can I become a dealer?',
            'Do you provide support?'
        ],
        pageLink: {
            url: '/contact',
            text: 'Go to Contact Page'
        }
    },
    vision: {
        patterns: ['vision', 'mission', 'values', 'goals'],
        reply: 'Our vision is to be the leading poultry and aquaculture company in Bangladesh, committed to quality, sustainability, and innovation.',
        suggestions: [
            'Where are your offices?',
            'How can I become a dealer?',
            'Do you provide support?'
        ],
        pageLink: {
            url: '/vision',
            text: 'Go to Vision Page'
        }
    },
    benefits: {
        patterns: ['benefits', 'advantages', 'value', 'why choose us'],
        reply: 'Choosing Nourish means opting for quality, reliability, and innovation. Our products are designed to enhance productivity and sustainability in your farming practices.',
        suggestions: [
            'Where are your offices?',
            'How can I become a dealer?',
            'Do you provide support?'
        ],
        pageLink: {
            url: '/about',
            text: 'Go to About Page'
        }
    },
    requirements: {
        patterns: ['requirement', 'prerequisites', 'qualifications', 'eligibility'],
        reply: 'To become a dealer or partner with Nourish, you need to meet certain requirements including business experience, financial stability, and a commitment to quality. We evaluate each application on a case-by-case basis.',
        suggestions: [
            'Where are your offices?',
            'How can I become a dealer?',
            'Do you provide support?'
        ],
        pageLink: {
            url: '/about',
            text: 'Go to About Page'
        }
    },
    default: {
        reply: 'I\'m not sure about that. Could you please rephrase your question about our products or services?',
        suggestions: [
            'Tell me about your products',
            'What services do you offer?',
            'How can I contact you?',
            'How can I become a dealer?'
        ]
    },  

    // ...................................
    careers: {
        patterns: ['career', 'job', 'vacancy', 'recruitment', 'hiring'],
        reply: 'Nourish Poultry & Hatchery Ltd. is always on the lookout for passionate and skilled individuals to join our team. We offer exciting career opportunities across various departments including R&D, production, technical support, and sales. If you’re committed to making an impact in the agro-industrial sector, we welcome you to apply.',
        suggestions: [
            'What positions are available?',
            'How do I apply for a job?',
            'Do you offer internships?',
            'What is your recruitment process?',
            'Where is your HR office?'
        ],
        pageLink: {
            url: '/career',
            text: 'Explore Careers at Nourish'
        }
    },

    dealers: {
        patterns: ['dealer', 'distribution', 'partnership', 'business with you'],
        reply: 'Nourish welcomes business collaborations with dealers and distributors across Bangladesh. We provide marketing support, training, and logistical assistance to help our partners thrive. Becoming a dealer means you’re part of a trusted and growing agro network.',
        suggestions: [
            'How can I become a dealer?',
            'What are the benefits of being a distributor?',
            'Do you have regional offices?',
            'Is there any dealership requirement?',
            'Where can I apply for dealership?'
        ],
    },

    sustainability: {
        patterns: ['sustainability', 'eco-friendly', 'environment', 'green farming'],
        reply: 'At Nourish, sustainability is core to our operations. We implement eco-friendly practices in our farms and factories, reduce waste through recycling programs, and ensure minimal environmental impact across our production chain. Our goal is to build a responsible future for the poultry sector in Bangladesh.',
        suggestions: [
            'How do you protect the environment?',
            'What sustainability initiatives do you follow?',
            'Do you recycle feed packaging?',
            'How do you manage waste?',
            'What is green poultry farming?'
        ],
    },

    media: {
        patterns: ['news', 'media', 'press', 'latest update', 'announcement'],
        reply: 'Stay up-to-date with Nourish Poultry through our latest news, press releases, event announcements, and media features. We actively participate in agricultural expos, community engagement programs, and product launches.',
        suggestions: [
            'Any upcoming events?',
            'Show me your latest news',
            'Do you have press coverage?',
            'What’s your latest product?',
            'Where can I follow you online?'
        ],
    },

    faq: {
        patterns: ['faq', 'frequently asked', 'common question', 'help center'],
        reply: 'We’ve compiled answers to the most frequently asked questions about Nourish Poultry. From chick delivery schedules to farm setup tips — you’ll find detailed answers here.',
        suggestions: [
            'What are your working hours?',
            'Do you deliver nationwide?',
            'How to raise broiler chicks?',
            'What’s the best starter feed?',
            'How to contact technical support?'
        ],
    },

}

// Find best matching response
function findBestMatch(message: string) {
    const lowerMessage = message.toLowerCase()

    // Check each response pattern
    for (const [key, data] of Object.entries(responses) as [string, ResponseData][]) {
        if (key === 'default') continue

        // Check if message includes any of the patterns
        if (data.patterns?.some(pattern => lowerMessage.includes(pattern))) {
            return {
                reply: data.reply,
                suggestions: data.suggestions,
                pageLink: data.pageLink
            }
        }
    }

    // Return default response if no match found
    return {
        reply: responses.default.reply,
        suggestions: responses.default.suggestions
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { message } = body

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            )
        }

        const response = findBestMatch(message)

        return NextResponse.json({
            response: response.reply,
            suggestions: response.suggestions,
            pageLink: response.pageLink
        })

    } catch (error) {
        console.error('Chat API Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
