'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(var(--background))', color: 'rgb(var(--foreground))' }}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Presence
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            style={{ color: 'rgb(var(--muted-foreground))' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Track employee attendance efficiently and effortlessly
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/dashboard"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
                color: 'rgb(var(--primary-foreground))'
              }}
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                borderColor: 'rgb(var(--border))',
                color: 'rgb(var(--foreground))'
              }}
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'rgb(var(--foreground))' }}>
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Real-time Tracking',
              description: 'Monitor employee attendance in real-time with live updates',
              icon: '⏱️'
            },
            {
              title: 'Easy Management',
              description: 'Simple and intuitive interface for managing attendance records',
              icon: '📊'
            },
            {
              title: 'Detailed Reports',
              description: 'Generate comprehensive reports for better insights',
              icon: '📈'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl transition-all duration-200 hover:shadow-lg"
              style={{
                backgroundColor: 'rgb(var(--card))',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(var(--border))'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(var(--card-foreground))' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'rgb(var(--muted-foreground))' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: `linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)))`,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'rgb(var(--primary-foreground))' }}>
            Ready to get started?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(var(--primary-foreground), 0.9)' }}>
            Join thousands of companies already using Presence
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            style={{
              backgroundColor: 'rgb(var(--background))',
              color: 'rgb(var(--foreground))'
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
