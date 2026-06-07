import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, MessageSquareText } from 'lucide-react';
import services from '../data/services';

function Services() {
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

  // Normal services (without custom)
  const normalServices = services.filter((s) => !s.isCustom);
  // Custom service
  const customService = services.find((s) => s.isCustom);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI automation solutions designed to transform your
              business operations, eliminate manual work, and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {normalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    to={`/service/${service.id}`}
                    className={`block glass-card rounded-2xl p-6 md:p-8 border h-full ${service.color} transition-all duration-300`}
                  >
                    <div className={`mb-4 ${service.iconColor}`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${service.iconColor}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-1 text-neon-blue text-sm font-medium">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Custom Requirement Card - dashed border */}
            {customService && (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={`/service/${customService.id}`}
                  className={`block glass-card rounded-2xl p-6 md:p-8 border-2 border-dashed h-full ${customService.color} transition-all duration-300 flex flex-col items-center text-center`}
                >
                  <div className={`mb-4 ${customService.iconColor}`}>
                    <Sparkles className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{customService.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {customService.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <MessageSquareText className="w-4 h-4" />
                    <span>Apni problem share karein</span>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-neon-blue text-sm font-medium">
                    Tell Us <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From idea to deployment, we follow a proven methodology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your business processes and identify automation opportunities.' },
              { step: '02', title: 'Design', desc: 'Custom AI solution architecture tailored to your specific needs.' },
              { step: '03', title: 'Development', desc: 'Building and training your AI models with iterative improvements.' },
              { step: '04', title: 'Deployment', desc: 'Seamless integration into your existing systems with full support.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-neon-blue/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let's discuss how we can automate your business and accelerate growth.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Services;