'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Our team will respond within 24 hours',
      detail: 'support@presence.com',
      link: 'mailto:support@presence.com',
    },
    {
      icon: '📞',
      title: 'Phone',
      description: 'Mon-Fri from 9am to 6pm',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team',
      detail: 'Start a conversation',
      link: '#',
    },
    {
      icon: '📍',
      title: 'Office',
      description: 'Visit our headquarters',
      detail: '123 Business St, San Francisco, CA',
      link: '#',
    },
  ];

  const subjects = [
    'General Inquiry',
    'Sales',
    'Technical Support',
    'Partnerships',
    'Feedback',
    'Other',
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
            Get in Touch
          </h1>
          <p
            className="text-xl"
            style={{ color: 'rgb(var(--muted-foreground))' }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              className="p-6 rounded-xl text-center transition-all duration-200"
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
              <div className="text-4xl mb-3">{method.icon}</div>
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'rgb(var(--foreground))' }}
              >
                {method.title}
              </h3>
              <p
                className="text-sm mb-2"
                style={{ color: 'rgb(var(--muted-foreground))' }}
              >
                {method.description}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: 'rgb(var(--primary))' }}
              >
                {method.detail}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: 'rgb(var(--foreground))' }}
            >
              Send us a Message
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'rgb(var(--muted-foreground))' }}
            >
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div
                className="p-6 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, rgba(var(--primary), 0.1), rgba(var(--secondary), 0.1))`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'rgb(var(--border))',
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: 'rgb(var(--foreground))' }}
                >
                  🚀 Quick Response
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'rgb(var(--muted-foreground))' }}
                >
                  Our dedicated support team typically responds within 24 hours during
                  business days.
                </p>
              </div>

              <div
                className="p-6 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, rgba(var(--primary), 0.1), rgba(var(--secondary), 0.1))`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'rgb(var(--border))',
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: 'rgb(var(--foreground))' }}
                >
                  🔒 Privacy First
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'rgb(var(--muted-foreground))' }}
                >
                  Your information is secure and will never be shared with third
                  parties.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: 'rgb(var(--card))',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgb(var(--border))',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'rgb(var(--foreground))' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: 'rgb(var(--background))',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgb(var(--border))',
                      color: 'rgb(var(--foreground))',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--primary))';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--border))';
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'rgb(var(--foreground))' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: 'rgb(var(--background))',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgb(var(--border))',
                      color: 'rgb(var(--foreground))',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--primary))';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--border))';
                    }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'rgb(var(--foreground))' }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: 'rgb(var(--background))',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgb(var(--border))',
                      color: 'rgb(var(--foreground))',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--primary))';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--border))';
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'rgb(var(--foreground))' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: 'rgb(var(--background))',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgb(var(--border))',
                      color: 'rgb(var(--foreground))',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--primary))';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(var(--border))';
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'rgb(var(--foreground))' }}
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: 'rgb(var(--background))',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(var(--border))',
                    color: 'rgb(var(--foreground))',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(var(--primary))';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(var(--border))';
                  }}
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'rgb(var(--foreground))' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    backgroundColor: 'rgb(var(--background))',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(var(--border))',
                    color: 'rgb(var(--foreground))',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(var(--primary))';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(var(--border))';
                  }}
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(var(--success), 0.1)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(var(--success))',
                    color: 'rgb(var(--success))',
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
                style={{
                  background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
                  color: 'rgb(var(--primary-foreground))',
                }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
