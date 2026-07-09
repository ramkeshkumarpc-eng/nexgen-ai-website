import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Workflow, TrendingUp, ChevronRight } from 'lucide-react';
import Scene from '../components/3d/Scene';
import OfferSection from '../components/OfferSection';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Home() {
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

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-neon-blue" />,
      title: 'AI Agents',
      description:
        'Intelligent AI agents that learn, adapt, and automate complex workflows for your business.',
    },
    {
      icon: <Workflow className="w-8 h-8 text-neon-cyan" />,
      title: 'Workflow Automation',
      description:
        'Seamlessly connect your tools and automate repetitive tasks with smart workflows.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-neon-purple" />,
      title: 'Growth Engine',
      description:
        'Data-driven insights and automations that accelerate your business growth.',
    },
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Clients Automated' },
    { value: 2, suffix: 'M+', label: 'Tasks Automated' },
    { value: 99, suffix: '%', label: 'Uptime Guaranteed' },
    { value: 10, suffix: 'x', label: 'Avg. ROI Increase' },
  ];

  return (
    <>
      {/* Professional Offer Banner - Prominent Hero Offer */}
      <div className="px-4 sm:px-6 lg:px-8 pt-4 max-w-7xl mx-auto w-full">
        <OfferSection />
      </div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      >
      {/* Hero Section */}
      <section className="relative flex items-center pt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
                </span>
                Next-Gen AI Automation
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your
                <br />
                <span className="gradient-text">Business with AI</span>
              </h1>

              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                We build intelligent automation solutions that save time, reduce costs,
                and help your business scale faster than ever.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* 3D Scene */}
            <motion.div
              variants={itemVariants}
              className="h-[300px] sm:h-[400px] lg:h-[600px] relative flex items-center justify-center w-full"
            >
              <div className="absolute inset-0">
                <Scene />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">NexGen AI</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful AI solutions designed to supercharge your operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-neon-blue/30 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">Automate?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Join hundreds of businesses already saving time and growing faster
                with our AI automation solutions.
              </p>
              <Link
                to="/services"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start Your Journey <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
    </>
  );
}

export default Home;