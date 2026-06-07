import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Play,
  Send,
  Sparkles,
  MessageSquareText,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import services from '../data/services';

function CustomRequirementForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Please describe your requirement';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: 'Custom Requirement',
      budget: '',
      message: formData.message,
    };

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    try {
      const res = await fetch(`${API_URL}/api/submit-custom`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!result.success) throw new Error('Server error');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Thank You! 🎉</h3>
        <p className="text-gray-400 mb-6">
          We have received your requirement. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setStatus(null)}
          className="btn-primary"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
              errors.name ? 'border-red-500/50' : 'border-dark-border'
            } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
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
            } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
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
            } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50`}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Describe Your Requirement <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Batao ki aapko kis tarah ke automation ki zaroorat hai, kaun si problem face kar rahe ho..."
          className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
            errors.message ? 'border-red-500/50' : 'border-dark-border'
          } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 resize-none`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : <>Submit Requirement <Send className="w-4 h-4" /></>}
      </button>
    </form>
  );
}

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

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

  if (!service) {
    return (
      <section className="pt-40 pb-20 text-center">
        <div className="max-w-lg mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">
            The service you are looking for does not exist or has been removed.
          </p>
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
      </section>
    );
  }

  const Icon = service.icon;
  const isCustom = service.isCustom;

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
            className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className={`glass-card rounded-3xl p-10 sm:p-14 ${isCustom ? 'border-2 border-dashed border-purple-400/40' : ''}`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className={`p-5 rounded-2xl bg-dark-bg border ${service.color}`}>
                <Icon className={`w-16 h-16 ${service.iconColor}`} />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Custom Service: Show Form Directly */}
      {isCustom ? (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className={`inline-flex p-4 rounded-2xl bg-dark-bg border ${service.color} mb-6`}>
                <MessageSquareText className={`w-12 h-12 ${service.iconColor}`} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Apni Problem <span className="gradient-text">Batao</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Humein batayein ki aap kis tarah ke automation ki talash mein hain aur
                hum aapke liye custom solution banayenge.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 sm:p-10">
              <CustomRequirementForm />
            </motion.div>
          </div>
        </section>
      ) : (
        <>
          {/* Pain Points - What Automation Eliminates */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={itemVariants} className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Automation <span className="gradient-text">Eliminates</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Dekho ye automation kaise in problems ko khatam karega
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-red-400">
                    <XCircle className="w-5 h-5" /> Problems Without Automation
                  </h3>
                  <div className="space-y-4">
                    {service.painPoints.map((point, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="glass-card rounded-xl p-5 border border-red-500/20"
                      >
                        <p className="text-gray-300">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-5 h-5" /> After Our Automation
                  </h3>
                  <div className="space-y-4">
                    {service.painPoints.map((_, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="glass-card rounded-xl p-5 border border-green-500/20"
                      >
                        <p className="text-gray-300">
                          ✅ Yeh problem fully automatic ho jayegi — no manual work, no delays, no errors.
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-20 border-y border-dark-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={itemVariants} className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  See It In <span className="gradient-text">Action</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Dekho kaise ye automation tumhara kaam aasaan kar deta hai
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                {service.videoSrc ? (
                  <div className="aspect-video rounded-2xl overflow-hidden glass-card">
                    <video
                      src={service.videoSrc}
                      controls
                      className="w-full h-full object-cover"
                      poster="/video-placeholder.jpg"
                    />
                  </div>
                ) : (
                  <Link
                    to="/contact"
                    className="glass-card rounded-2xl p-16 text-center border-2 border-dashed border-white/20 hover:border-neon-blue/40 transition-all block group"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-neon-blue/10 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
                        <Play className="w-10 h-10 text-neon-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Video Coming Soon</h3>
                        <p className="text-gray-400">
                          Hamari team is automation ka demo video bana rahi hai.
                          <br />Jald hi available hoga!
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={itemVariants} className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Key <span className="gradient-text">Features</span>
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="glass-card rounded-2xl p-6 text-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-dark-bg border ${service.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <CheckCircle2 className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <h3 className="font-semibold">{feature}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Automate{' '}
              <span className="gradient-text">{service.title}?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {isCustom
                ? 'Apni requirement batao aur hum custom solution banayenge.'
                : 'Chaliye shuru karte hain! Humare team se baat karein aur dekhein kaise ye automation aapke business ko badal sakta hai.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={isCustom ? '/contact?service=custom-requirement' : `/contact?service=${service.id}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ServiceDetail;