'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: 'Organizations', value: '500+', icon: '🏢' },
    { label: 'Active Users', value: '50K+', icon: '👥' },
    { label: 'Attendance Records', value: '10M+', icon: '📊' },
    { label: 'Uptime', value: '99.9%', icon: '⚡' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly evolving to meet the changing needs of modern workplaces',
      icon: '💡',
    },
    {
      title: 'Reliability',
      description: 'Dependable system you can trust for critical attendance tracking',
      icon: '🛡️',
    },
    {
      title: 'Simplicity',
      description: 'Easy-to-use interface that requires minimal training',
      icon: '✨',
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security to protect your sensitive data',
      icon: '🔒',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: '👩‍🎨',
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      image: '👨‍🔧',
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'rgb(var(--background))',
        color: 'rgb(var(--foreground))',
      }}
    >
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Presence
          </h1>
          <p
            className="text-xl mb-8"
            style={{ color: 'rgb(var(--muted-foreground))' }}
          >
            Transforming how organizations manage attendance and time tracking with
            modern, flexible, and intelligent solutions.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl"
              style={{
                backgroundColor: 'rgb(var(--card))',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(var(--border))',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: 'rgb(var(--primary))' }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{ color: 'rgb(var(--muted-foreground))' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: 'rgb(var(--foreground))' }}
            >
              Our Mission
            </h2>
            <p
              className="text-lg mb-4"
              style={{ color: 'rgb(var(--muted-foreground))' }}
            >
              At Presence, we believe that managing attendance and time shouldn't be
              complicated. Our mission is to provide organizations with a robust,
              flexible, and easy-to-use system that adapts to their unique workforce
              management needs.
            </p>
            <p
              className="text-lg mb-6"
              style={{ color: 'rgb(var(--muted-foreground))' }}
            >
              We're committed to helping businesses of all sizes streamline their
              attendance tracking, improve compliance, and gain valuable insights into
              workforce productivity.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
                color: 'rgb(var(--primary-foreground))',
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
          <motion.div
            className="rounded-2xl p-8 text-center"
            style={{
              background: `linear-gradient(135deg, rgba(var(--primary), 0.1), rgba(var(--secondary), 0.1))`,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgb(var(--border))',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-8xl mb-6">🎯</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'rgb(var(--foreground))' }}
            >
              Vision for the Future
            </h3>
            <p style={{ color: 'rgb(var(--muted-foreground))' }}>
              To be the leading attendance and time management platform, empowering
              organizations worldwide with intelligent, data-driven workforce insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: 'rgb(var(--foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: 'rgb(var(--card))',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(var(--border))',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: 'rgb(var(--foreground))' }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: 'rgb(var(--muted-foreground))' }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: 'rgb(var(--foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: 'rgb(var(--muted-foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Led by experienced professionals passionate about transforming workforce
          management
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center p-6 rounded-xl"
              style={{
                backgroundColor: 'rgb(var(--card))',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(var(--border))',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'rgb(var(--foreground))' }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm"
                style={{ color: 'rgb(var(--muted-foreground))' }}
              >
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="rounded-2xl p-12 text-center"
          style={{
            background: `linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)))`,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'rgb(var(--primary-foreground))' }}
          >
            Ready to Transform Your Workforce Management?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: 'rgba(var(--primary-foreground), 0.9)' }}
          >
            Join thousands of organizations already using Presence
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                backgroundColor: 'rgb(var(--background))',
                color: 'rgb(var(--foreground))',
              }}
            >
              Contact Sales
            </Link>
            <Link
              href="/product"
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                borderColor: 'rgb(var(--primary-foreground))',
                color: 'rgb(var(--primary-foreground))',
              }}
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
