import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, Rocket, Heart, MapPin } from 'lucide-react';

function About() {
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

  const team = [
    {
      name: 'Ramkesh Kumar',
      role: 'CEO & Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramkesh',
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-neon-blue" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI technology',
    },
    {
      icon: <Users className="w-8 h-8 text-neon-cyan" />,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results',
    },
    {
      icon: <Rocket className="w-8 h-8 text-neon-purple" />,
      title: 'Excellence',
      description: 'Delivering top-tier solutions that exceed expectations',
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: 'Passion',
      description: 'Loving what we do and the impact we make',
    },
  ];

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
              About <span className="gradient-text">NexGen AI</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're a team of AI enthusiasts, engineers, and innovators dedicated to
              building the future of automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-neon-blue" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To democratize AI automation and empower businesses of all sizes to
                achieve unprecedented efficiency and growth. We believe every company
                deserves access to cutting-edge AI technology that transforms their
                operations and unlocks new possibilities.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-neon-purple" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A world where intelligent automation seamlessly handles repetitive
                tasks, allowing humans to focus on creativity, strategy, and innovation.
                We envision AI as a partner that amplifies human potential, not replaces
                it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section — Single Person */}
      <section className="py-20 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The vision behind NexGen AI
            </p>
          </motion.div>

          <div className="max-w-sm mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-neon-blue/30 transition-colors"
              >
                <img
                  src="/Founder-Image.png"
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 bg-dark-card object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-neon-blue">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Expert + Certificate Section */}
      <section className="py-20 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              AI Automation <span className="gradient-text">Expert</span>
            </h2>

            <div className="flex flex-col items-center gap-8 mb-8">
              <img
                src="/AIS Certificet.png"
                alt="AIS Certificate"
                className="w-80 sm:w-96 md:w-[28rem] rounded-2xl glass-card p-4"
              />

              <div className="max-w-2xl">
                <p className="text-lg sm:text-xl text-neon-blue font-semibold mb-4">
                  World's Big AI Automation Community
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We are proudly certified by the Artificial Intelligence Society (AIS),
                  recognized as a leading AI automation community worldwide. This certification
                  reflects our commitment to excellence, innovation, and delivering cutting-edge
                  AI solutions that transform businesses globally.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;