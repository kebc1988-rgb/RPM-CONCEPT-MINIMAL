import { Wrench, Gauge, Disc, Thermometer, Activity, Car } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "RPM Concepts",
  owner: "Chuck",
  phone: "(850) 361-6109",
  address: "4801-4845 Lillian Hwy, Pensacola, FL 32506",
  addressNotes: "Look for the shop on Lillian Hwy.",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.7!2d-87.29!3d30.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDAwJzM2LjAiTiA4N8KwMTcnMjQuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus", // Generic coordinate embed for the address
  hours: "Mon-Fri: 9AM - 5PM, Sat: 9AM - 2PM",
  hoursArray: [
      "Mon - Fri: 9:00 AM – 5:00 PM",
      "Saturday: 9:00 AM – 2:00 PM",
      "Sunday: Closed"
  ]
};

export const SERVICES = [
  {
    title: "Brake Jobs",
    description: "Squeaking or grinding? We don't mess around with safety. Quality pads and rotors that last.",
    icon: Disc,
    highlight: true, 
  },
  {
    title: "Oil & Filters",
    description: "The cheapest insurance for your engine. We use the good stuff, not the bulk junk.",
    icon: Wrench,
  },
  {
    title: "A/C & Heating",
    description: "It's Florida. You need A/C. We find the leak, fix it, and get you cool again.",
    icon: Thermometer,
  },
  {
    title: "Noises & Vibrations",
    description: "Clunks, rattles, and shakes. We'll put it on the lift and show you exactly what's loose.",
    icon: Car,
  },
  {
    title: "Check Engine Lights",
    description: "We don't just read the code; we find the problem. No guessing with your money.",
    icon: Activity,
  },
  {
    title: "Tune-Ups",
    description: "Plugs, wires, belts. Basic maintenance to keep your daily driver running right.",
    icon: Gauge,
  },
];

export const REVIEWS = [
  {
    name: "Sarah J.",
    text: "Chuck is the only mechanic I trust. Another shop tried to sell me a whole new radiator, but Chuck found a loose hose clamp and fixed it for free. Customer for life.",
    stars: 5,
    response: "Glad it was an easy fix, Sarah! Thanks for stopping by."
  },
  {
    name: "Big Dave T.",
    text: "No nonsense shop. Dropped my truck off at 9am, they called me with a quote by 10am. Price was exactly what they said it would be.",
    stars: 5,
  },
  {
    name: "Linda Hernandez",
    text: "As a woman, I usually hate going to mechanics because they talk down to me. Not here. They explained everything clearly and treated me with respect.",
    stars: 5,
    response: "We appreciate that, Linda. Honesty is the only way we work."
  },
];

export const FAQS = [
  {
    question: "Do I need an appointment?",
    answer: "It's better if you do. We're a small shop and get busy. But if it's an emergency (like your car won't start), call us and we'll squeeze you in.",
  },
  {
    question: "Can I bring my own parts?",
    answer: "Usually, no. We can't warranty parts we don't buy, and if they don't fit, your car sits on our lift. We get parts same-day from local suppliers we trust.",
  },
  {
    question: "Do you charge to look at it?",
    answer: "If we can tell what's wrong just by listening or looking, it's free. If we have to take things apart or run advanced diagnostics, there's a small fee, but that goes toward the repair cost if you fix it with us.",
  },
  {
    question: "Do you work on German cars?",
    answer: "To be honest, we stick to Ford, Chevy, Toyota, Honda, Nissan, etc. Keeping it simple helps us keep prices down for everyone. Give us a call if you aren't sure.",
  },
];