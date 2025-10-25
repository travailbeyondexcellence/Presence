'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const features = [
    {
      category: 'Attendance Tracking',
      icon: '⏰',
      items: [
        'Multiple clock-in modes (Simple, Selfie, GPS)',
        'Automatic overtime calculation',
        'Break time tracking',
        'Late arrival monitoring',
        'Auto clock-out with notifications',
      ],
    },
    {
      category: 'Leave Management',
      icon: '📅',
      items: [
        'Custom leave types',
        'Multi-level approval workflows',
        'Leave balance tracking',
        'Half-day and hourly leaves',
        'Holiday calendar integration',
      ],
    },
    {
      category: 'Workforce Management',
      icon: '👥',
      items: [
        'Shift management',
        'Department-wise organization',
        'Flexible work hours',
        'Grace period configuration',
        'Role-based access control',
      ],
    },
    {
      category: 'Reporting & Analytics',
      icon: '📊',
      items: [
        'Real-time attendance reports',
        'Overtime analytics',
        'Leave usage insights',
        'Custom report builder',
        'CSV/PDF exports',
      ],
    },
    {
      category: 'Mobile App',
      icon: '📱',
      items: [
        'iOS and Android support',
        'Push notifications',
        'Offline mode',
        'Biometric authentication',
        'Quick clock-in/out',
      ],
    },
    {
      category: 'Security & Compliance',
      icon: '🔒',
      items: [
        'Multi-tenant architecture',
        'Data encryption',
        'Indian labor law compliance',
        'Audit logs',
        'GDPR-ready features',
      ],
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams',
      price: billingCycle === 'monthly' ? 49 : 39,
      features: [
        'Up to 50 employees',
        'Basic attendance tracking',
        'Simple leave management',
        'Mobile app access',
        'Email support',
        '30-day data retention',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: billingCycle === 'monthly' ? 99 : 79,
      features: [
        'Up to 200 employees',
        'All attendance modes',
        'Advanced leave workflows',
        'Shift management',
        'Priority support',
        '1-year data retention',
        'Custom reports',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: billingCycle === 'monthly' ? 199 : 159,
      features: [
        'Unlimited employees',
        'All features included',
        'Advanced analytics',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Unlimited data retention',
        'White-label option',
      ],
      highlighted: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "Presence has transformed how we manage our workforce. The automated tracking and reporting save us hours every week.",
      author: 'Sarah Mitchell',
      role: 'HR Director, TechCorp',
      avatar: '👩‍💼',
    },
    {
      quote:
        "The mobile app is incredibly intuitive. Our employees love how easy it is to clock in and request leaves.",
      author: 'James Rodriguez',
      role: 'Operations Manager, BuildRight',
      avatar: '👨‍💼',
    },
    {
      quote:
        "We've seen a 40% improvement in attendance compliance since switching to Presence. Highly recommended!",
      author: 'Linda Chen',
      role: 'CEO, StartupHub',
      avatar: '👩‍💻',
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
          className="text-center max-w-4xl mx-auto"
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
            Powerful Features for Modern Workforce Management
          </h1>
          <p
            className="text-xl mb-8"
            style={{ color: 'rgb(var(--muted-foreground))' }}
          >
            Everything you need to track attendance, manage leaves, and gain insights
            into your workforce productivity.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
                color: 'rgb(var(--primary-foreground))',
              }}
            >
              Start Free Trial
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                borderColor: 'rgb(var(--border))',
                color: 'rgb(var(--foreground))',
              }}
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: 'rgb(var(--foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Comprehensive Features
        </motion.h2>
        <motion.p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: 'rgb(var(--muted-foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover all the powerful features that make Presence the best choice for
          attendance management
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.category}
              className="p-6 rounded-xl"
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
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: 'rgb(var(--foreground))' }}
              >
                {feature.category}
              </h3>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm"
                    style={{ color: 'rgb(var(--muted-foreground))' }}
                  >
                    <span
                      className="mr-2 mt-0.5"
                      style={{ color: 'rgb(var(--primary))' }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: 'rgb(var(--foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-center mb-8 max-w-2xl mx-auto"
          style={{ color: 'rgb(var(--muted-foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Choose the plan that best fits your organization's needs
        </motion.p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex rounded-lg p-1"
            style={{
              backgroundColor: 'rgb(var(--card))',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgb(var(--border))',
            }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className="px-6 py-2 rounded-md font-medium transition-all"
              style={{
                backgroundColor:
                  billingCycle === 'monthly'
                    ? 'rgb(var(--primary))'
                    : 'transparent',
                color:
                  billingCycle === 'monthly'
                    ? 'rgb(var(--primary-foreground))'
                    : 'rgb(var(--muted-foreground))',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className="px-6 py-2 rounded-md font-medium transition-all relative"
              style={{
                backgroundColor:
                  billingCycle === 'annually'
                    ? 'rgb(var(--primary))'
                    : 'transparent',
                color:
                  billingCycle === 'annually'
                    ? 'rgb(var(--primary-foreground))'
                    : 'rgb(var(--muted-foreground))',
              }}
            >
              Annually
              <span
                className="ml-2 text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'rgb(var(--success))',
                  color: 'rgb(var(--success-foreground))',
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="p-8 rounded-2xl relative"
              style={{
                backgroundColor: plan.highlighted
                  ? 'rgb(var(--card))'
                  : 'rgb(var(--card))',
                borderWidth: plan.highlighted ? '2px' : '1px',
                borderStyle: 'solid',
                borderColor: plan.highlighted
                  ? 'rgb(var(--primary))'
                  : 'rgb(var(--border))',
                transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: plan.highlighted ? 1.07 : 1.02 }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
                    color: 'rgb(var(--primary-foreground))',
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: 'rgb(var(--foreground))' }}
              >
                {plan.name}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: 'rgb(var(--muted-foreground))' }}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'rgb(var(--primary))' }}
                >
                  ${plan.price}
                </span>
                <span
                  className="text-sm ml-2"
                  style={{ color: 'rgb(var(--muted-foreground))' }}
                >
                  /employee/{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm"
                    style={{ color: 'rgb(var(--muted-foreground))' }}
                  >
                    <span
                      className="mr-2 mt-0.5"
                      style={{ color: 'rgb(var(--primary))' }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 hover:shadow-lg"
                style={{
                  background: plan.highlighted
                    ? `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`
                    : 'transparent',
                  color: plan.highlighted
                    ? 'rgb(var(--primary-foreground))'
                    : 'rgb(var(--primary))',
                  borderWidth: plan.highlighted ? '0' : '2px',
                  borderStyle: 'solid',
                  borderColor: 'rgb(var(--primary))',
                }}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: 'rgb(var(--foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Loved by Teams Everywhere
        </motion.h2>
        <motion.p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: 'rgb(var(--muted-foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          See what our customers have to say about Presence
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl"
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
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p
                className="mb-4 text-sm italic"
                style={{ color: 'rgb(var(--muted-foreground))' }}
              >
                "{testimonial.quote}"
              </p>
              <div>
                <p
                  className="font-semibold"
                  style={{ color: 'rgb(var(--foreground))' }}
                >
                  {testimonial.author}
                </p>
                <p
                  className="text-sm"
                  style={{ color: 'rgb(var(--muted-foreground))' }}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: 'rgb(var(--foreground))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'How quickly can we get started?',
              a: 'You can get started in minutes! Sign up, configure your organization settings, and invite your team. Our onboarding takes less than 10 minutes.',
            },
            {
              q: 'Is there a free trial available?',
              a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.',
            },
            {
              q: 'Can we import existing employee data?',
              a: 'Absolutely! You can bulk import employee data via CSV, or use our API for custom integrations.',
            },
            {
              q: 'What happens to our data if we cancel?',
              a: 'Your data is yours. You can export all data at any time, and we retain it for 30 days after cancellation for data recovery if needed.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl"
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
            >
              <h3
                className="font-semibold mb-2"
                style={{ color: 'rgb(var(--foreground))' }}
              >
                {faq.q}
              </h3>
              <p
                className="text-sm"
                style={{ color: 'rgb(var(--muted-foreground))' }}
              >
                {faq.a}
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
            Start your 14-day free trial today. No credit card required.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            style={{
              backgroundColor: 'rgb(var(--background))',
              color: 'rgb(var(--foreground))',
            }}
          >
            Start Free Trial
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
