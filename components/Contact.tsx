'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
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

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Create Something Amazing
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Whether you have feedback about our games, want to discuss a
                  partnership, or just want to say hello, feel free to reach
                  out. We're always excited to connect with fellow game
                  enthusiasts!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:contact@littleleeroygames.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      contact@littleleeroygames.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Social Media
                    </h4>
                    <p className="text-gray-400">
                      Follow us for updates and news
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                {!isFirebaseConfigured() && (
                  <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-yellow-500 text-sm">
                      Demo mode: Messages will be logged to console. Set up Firebase to save messages.
                    </p>
                  </div>
                )}

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-500 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-500 text-sm">{error}</p>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
