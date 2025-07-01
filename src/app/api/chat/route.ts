import { NextResponse } from 'next/server'

// Define response patterns
const responses = {
    greeting: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
        reply: 'Hello! Welcome to Nourish Poultry. How can I assist you today?',
        suggestions: [
            'Tell me about your products',
            'What services do you offer?',
            'How can I contact you?'
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
        ]
    },
    products: {
        patterns: ['products', 'what do you sell', 'what do you offer'],
        reply: 'We offer high-quality poultry products including Broiler Feed, Layer Feed, Day-Old-Chicks, Commercial Broilers, and more. Each product follows strict quality standards.',
        suggestions: [
            'Tell me about your feed',
            'What about day-old chicks?',
            'Do you offer technical support?'
        ]
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
        ]
    },
    contact: {
        patterns: ['contact', 'reach', 'location', 'address'],
        reply: 'You can reach us through our contact page. We have facilities across Bangladesh to serve you better.',
        suggestions: [
            'Where are your offices?',
            'How can I become a dealer?',
            'Do you provide support?'
        ]
    },
    default: {
        reply: 'I\'m not sure about that. Could you please rephrase your question about our products or services?',
        suggestions: [
            'Tell me about your products',
            'What services do you offer?',
            'How can I contact you?'
        ]
    }
}

// Find best matching response
function findBestMatch(message: string) {
    const lowerMessage = message.toLowerCase()
    
    // Check each response pattern
    for (const [key, data] of Object.entries(responses)) {
        if (key === 'default') continue
        
        // Check if message includes any of the patterns
        if (data.patterns?.some(pattern => lowerMessage.includes(pattern))) {
            return {
                reply: data.reply,
                suggestions: data.suggestions
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
            suggestions: response.suggestions
        })

    } catch (error) {
        console.error('Chat API Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
