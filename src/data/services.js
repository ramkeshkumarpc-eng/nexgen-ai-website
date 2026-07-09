import {
  Bot,
  Workflow,
  Database,
  Shield,
  PhoneCall,
  CalendarClock,
  MessageCircle,
  FileText,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    icon: Bot,
    description:
      'Intelligent conversational AI that handles customer support, lead generation, and engagement 24/7.',
    features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training'],
    painPoints: [
      '❌ Customer support agents ko baar-baar same sawaal jawab dene hote hain',
      '❌ 24/7 customer support mushkil aur mehnga hai',
      '❌ Leads response time slow hone se conversions kam hote hain',
      '❌ Manual ticket handling mein errors aur delays hote hain',
    ],
    videoSrc: '',
    color: 'border-neon-blue/30 hover:bg-neon-blue/5',
    iconColor: 'text-neon-blue',
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    icon: Workflow,
    description:
      'End-to-end automation of repetitive business processes. Save hundreds of hours every month.',
    features: ['Workflow Design', 'Tool Integration', 'Error Handling'],
    painPoints: [
      '❌ Repetitive manual tasks employees ka bahut time waste karte hain',
      '❌ Data entry errors se accuracy gir jaati hai',
      '❌ Multiple tools ke beech data sync nahi hota',
      '❌ Approval processes slow aur unorganised hote hain',
    ],
    videoSrc: '',
    color: 'border-neon-cyan/30 hover:bg-neon-cyan/5',
    iconColor: 'text-neon-cyan',
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline',
    icon: Database,
    description:
      'Automated data collection, cleaning, and transformation. Keep your data flowing and usable.',
    features: ['ETL Automation', 'Data Validation', 'Cloud Integration'],
    painPoints: [
      '❌ Manual data collection se reports delay hoti hain',
      '❌ Data cleaning aur transformation mein kaafi time lagta hai',
      '❌ Different sources ka data merge karna complicated hai',
      '❌ Data quality issues ki wajah se wrong decisions hote hain',
    ],
    videoSrc: '',
    color: 'border-emerald-400/30 hover:bg-emerald-400/5',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'ai-security',
    title: 'AI Security',
    icon: Shield,
    description:
      'Protect your business with AI-powered threat detection and automated security responses.',
    features: ['Threat Detection', 'Anomaly Alerts', 'Auto-Remediation'],
    painPoints: [
      '❌ Security threats ko manually detect karna mushkil hai',
      '❌ Real-time monitoring ke liye dedicated team chahiye hota hai',
      '❌ False alerts ki wajah se important threats miss ho jaate hain',
      '❌ Security incidents ka response time slow hai',
    ],
    videoSrc: '',
    color: 'border-orange-400/30 hover:bg-orange-400/5',
    iconColor: 'text-orange-400',
  },
  {
    id: 'lead-management',
    title: 'Instant Lead Management',
    icon: PhoneCall,
    description:
      'Automatically capture, qualify, and distribute leads in real-time. Never miss a sales opportunity again.',
    features: ['Auto Lead Capture', 'Instant Assignment', 'Score & Qualify'],
    painPoints: [
      '❌ Leads manually capture karte waqt galtiyaan hoti hain aur data chhoot jaata hai',
      '❌ Lead assignment mein delay hota hai jisse customer chala jaata hai',
      '❌ Duplicate leads ki wajah se sales team ka time waste hota hai',
      '❌ Lead tracking aur follow-up misko manual process se manage karna mushkil hai',
    ],
    videoSrc: '',
    color: 'border-emerald-400/30 hover:bg-emerald-400/5',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'appointment-booking',
    title: 'Appointment Booking & Reminders',
    icon: CalendarClock,
    description:
      'Smart appointment scheduling system with automated reminders and calendar sync.',
    features: ['Auto Scheduling', 'Smart Reminders', 'Calendar Sync'],
    painPoints: [
      '❌ Manual appointment booking mein double-booking aur conflicts hote hain',
      '❌ Missed appointments ki wajah se revenue loss hota hai',
      '❌ Clients ko manual reminders dena time-consuming hai',
      '❌ Different calendars ko sync karna ek headache hai',
    ],
    videoSrc: 'https://drive.google.com/uc?export=download&id=1X8xl-M9sSRDtUV7jN7L3x1pXHGBT4GLy',
    color: 'border-neon-purple/30 hover:bg-neon-purple/5',
    iconColor: 'text-neon-purple',
  },
  {
    id: 'whatsapp-chatbot',
    title: 'WhatsApp Customer Support Chatbot',
    icon: MessageCircle,
    description:
      '24/7 WhatsApp chatbot for instant customer support, queries, and automated responses.',
    features: ['Instant Replies', 'Order Tracking', 'FAQ Auto-Answer'],
    painPoints: [
      '❌ WhatsApp pe manual customer support slow aur limited hai',
      '❌ Customer queries ka real-time response dena mushkil hai',
      '❌ Frequently asked questions baar-baar answer karne paDte hain',
      '❌ Multiple agents ke saath coordination maintain karna problem hai',
    ],
    videoSrc: '',
    color: 'border-green-500/30 hover:bg-green-500/5',
    iconColor: 'text-green-500',
  },
  {
    id: 'invoice-extraction',
    title: 'Invoice & PDF Data Extraction',
    icon: FileText,
    description:
      'AI-powered extraction of data from invoices, PDFs, and documents with high accuracy.',
    features: ['Auto OCR', 'Data Validation', 'Export Ready'],
    painPoints: [
      '❌ Invoices ko manually type karna time-consuming aur error-prone hai',
      '❌ Different PDF formats ke saath deal karna complicated hota hai',
      '❌ Extracted data ko accounting software mein manual entry karni paRTi hai',
      '❌ Document storage aur retrieval organized nahi hota',
    ],
    videoSrc: '',
    color: 'border-pink-500/30 hover:bg-pink-500/5',
    iconColor: 'text-pink-500',
  },
  {
    id: 'custom-requirement',
    title: 'Custom Requirement',
    icon: Sparkles,
    description:
      'Koi aur specific problem hai? Humein batao aur hum custom AI automation solution banayenge.',
    features: [],
    painPoints: [],
    videoSrc: '',
    isCustom: true,
    color: 'border-purple-400/30 hover:bg-purple-400/5',
    iconColor: 'text-purple-400',
  },
];

export default services;