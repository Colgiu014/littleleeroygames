'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, MapPin, Clock, Zap } from 'lucide-react';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Check if Firebase is configured
      if (!isFirebaseConfigured() || !db) {
        // For development: just log to console
        console.log('Contact form submission (Firebase not configured):', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Show warning in console
        console.warn('⚠️ Firebase not configured. To save contacts, add Firebase credentials to .env.local');
        
        setTimeout(() => setIsSubmitted(false), 5000);
        return;
      }

      // Save to Firebase Firestore
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again or contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@littleleeroygames.com',
      href: 'mailto:hello@littleleeroygames.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Romania, Europe',
      href: null,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 rounded-2xl shadow-xl">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 mb-8">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Have questions or want to collaborate? We'd love to hear from you!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">{info.label}</div>
                            <div className="text-white font-semibold">{info.value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                          <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl`}>
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">{info.label}</div>
                            <div className="text-white font-semibold">{info.value}</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8">
                  Send us a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 max-w-md mx-auto">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-gray-300">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 flex items-center gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <p className="text-red-300 text-sm">{error}</p>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-300">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/10 focus:outline-none transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/10 focus:outline-none transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-300">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={8}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, question, or just say hello..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full group px-8 py-5 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                            <Zap className="w-4 h-4 opacity-70" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}