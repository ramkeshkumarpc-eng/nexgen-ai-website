import React from 'react';
import { Shield, Lock, Eye, Database, Mail, Cookie, FileText, AlertTriangle, Share2, ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-neon-blue" />,
      title: 'Introduction',
      content: `At NexGen AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI automation services. By using our services, you consent to the practices described in this policy.`
    },
    {
      icon: <Database className="w-6 h-6 text-neon-cyan" />,
      title: 'Information We Collect',
      content: 'We collect the following types of information:',
      list: [
        'Personal identification info (Name, Email, Phone number)',
        'Business details shared during consultations',
        'Usage data (pages visited, time spent, interactions)',
        'Device & browser information for analytics',
        'Cookies and similar tracking technologies'
      ]
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      title: 'How We Use Your Information',
      content: 'Your information helps us:',
      list: [
        'Provide and improve our AI automation services',
        'Personalize your experience on our website',
        'Send project updates, quotes, and support responses',
        'Analyze usage patterns to enhance our offerings',
        'Comply with legal obligations and prevent fraud'
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: 'Data Protection & Security',
      content: 'We implement industry-standard security measures:',
      list: [
        '256-bit SSL/TLS encryption for all data transmission',
        'Secure cloud storage with access controls',
        'Regular security audits and penetration testing',
        'Strict employee access policies (need-to-know basis)',
        'Anonymization of data for analytics purposes'
      ]
    },
    {
      icon: <Cookie className="w-6 h-6 text-orange-400" />,
      title: 'Cookies & Tracking',
      content: `We use cookies and similar technologies to enhance your browsing experience. These include session cookies for website functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings. You can control cookie preferences through your browser settings.`
    },
    {
      icon: <Share2 className="w-6 h-6 text-pink-400" />,
      title: 'Third-Party Sharing',
      content: 'We do NOT sell your personal information. We may share data with:',
      list: [
        'Trusted service providers (hosting, analytics, payment)',
        'Legal authorities when required by law',
        'Business partners with your explicit consent'
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-yellow-400" />,
      title: 'Your Rights',
      content: 'You have the following rights regarding your data:',
      list: [
        'Right to access your personal data',
        'Right to correct inaccurate information',
        'Right to delete your data (right to be forgotten)',
        'Right to restrict or object to processing',
        'Right to data portability',
        'Right to withdraw consent at any time'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      title: 'Policy Updates',
      content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.`
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-6">
            <Shield className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-gray-300">Updated June 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-neon-blue">Policy</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 md:p-8 hover:border-neon-blue/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-dark-card shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-neon-blue mt-1.5 shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="glass rounded-xl p-8 text-center border border-dark-border">
          <h2 className="text-2xl font-bold mb-4">
            Have Questions About Privacy?
          </h2>
          <p className="text-gray-400 mb-6">
            If you have any questions or concerns about this privacy policy, feel free to reach out.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;