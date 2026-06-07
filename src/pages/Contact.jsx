import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import services from '../data/services';

const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+'];

function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    role: '',
    companySize: '',
    service: preselectedService || '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phone))
      newErrors.phone = 'Invalid phone number';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.role.trim()) newErrors.role = 'Your role is required';
    if (!formData.companySize) newErrors.companySize = 'Please select company size';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setStatus(null);

    const selectedService = services.find((s) => s.id === formData.service);
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      website: formData.website,
      role: formData.role,
      companySize: formData.companySize,
      service: selectedService ? selectedService.title : formData.service,
      budget: formData.budget,
      message: formData.message,
    };

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    try {
      const res = await fetch(`${API_URL}/api/submit-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!result.success) throw new Error('Server error');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        role: '',
        companySize: '',
        service: '',
        budget: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Back Button */}
      <section className="pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors py-3 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Apna project batao aur hum 24 hours mein contact karte hain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Thank You! 🎉</h2>
                <p className="text-gray-400 mb-8">
                  Your inquiry has been submitted successfully. Our team will reach out
                  within 24 hours.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="btn-primary"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                        errors.name ? 'border-red-500/50' : 'border-dark-border'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                        errors.email ? 'border-red-500/50' : 'border-dark-border'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone + Company Name */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                        errors.phone ? 'border-red-500/50' : 'border-dark-border'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                        errors.company ? 'border-red-500/50' : 'border-dark-border'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors`}
                    />
                    {errors.company && (
                      <p className="text-red-400 text-xs mt-1">{errors.company}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Company Website (optional) + Your Role */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Website <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Role <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g. CEO, Marketing Head"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                        errors.role ? 'border-red-500/50' : 'border-dark-border'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors`}
                    />
                    {errors.role && (
                      <p className="text-red-400 text-xs mt-1">{errors.role}</p>
                    )}
                  </div>
                </div>

                {/* Row 4: Company Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Size <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                      errors.companySize ? 'border-red-500/50' : 'border-dark-border'
                    } text-white focus:outline-none focus:border-neon-blue/50 transition-colors`}
                  >
                    <option value="" disabled>
                      Select company size...
                    </option>
                    {companySizes.map((size) => (
                      <option key={size} value={size} className="bg-dark-bg text-white">
                        {size} employees
                      </option>
                    ))}
                  </select>
                  {errors.companySize && (
                    <p className="text-red-400 text-xs mt-1">{errors.companySize}</p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What are you hoping to improve with AI or automation?{' '}
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                      errors.service ? 'border-red-500/50' : 'border-dark-border'
                    } text-white focus:outline-none focus:border-neon-blue/50 transition-colors`}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {services.map((svc) => (
                      <option key={svc.id} value={svc.id} className="bg-dark-bg text-white">
                        {svc.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                      errors.budget ? 'border-red-500/50' : 'border-dark-border'
                    } text-white focus:outline-none focus:border-neon-blue/50 transition-colors`}
                  >
                    <option value="" disabled>
                      Select budget range...
                    </option>
                    <option value="Less than ₹10,000" className="bg-dark-bg">
                      Less than ₹10,000
                    </option>
                    <option value="₹10,000 - ₹30,000" className="bg-dark-bg">
                      ₹10,000 - ₹30,000
                    </option>
                    <option value="₹30,000 - ₹50,000" className="bg-dark-bg">
                      ₹30,000 - ₹50,000
                    </option>
                    <option value="₹50,000 - ₹1,00,000" className="bg-dark-bg">
                      ₹50,000 - ₹1,00,000
                    </option>
                  </select>
                  {errors.budget && (
                    <p className="text-red-400 text-xs mt-1">{errors.budget}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                  />
                </div>

                {/* Error Toast */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>
                      Something went wrong. Please try again or email us directly at
                      hello@nexgenai.com
                    </span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Send Inquiry <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Note */}
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will be kept confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;