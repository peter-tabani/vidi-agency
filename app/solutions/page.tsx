import type { Metadata } from "next";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, UploadCloud } from "lucide-react";
import { useState } from "react";

import Footer from "@/components/Footer";
import ReceptionistAI from "@/components/ReceptionistAI";
import SectionHeader from "@/components/ui/SectionHeader";
import siteConfig from "@/config/site";

export const metadata: Metadata = {
  title: "AI Automation Solutions",
  description: "Discover Vidi Agency's cutting-edge AI automation solutions designed to revolutionize your business operations, enhance customer engagement, and drive growth.",
};

const solutions = [
  {
    title: "AI-Powered Lead Generation",
    description: "Automate lead capture, qualification, and nurturing across all channels.",
    benefits: "24/7 lead engagement, higher conversion rates, reduced sales cycle.",
  },
  {
    title: "Intelligent Customer Support",
    description: "Deploy AI chatbots and virtual assistants for instant, personalized customer service.",
    benefits: "Improved customer satisfaction, reduced support costs, consistent brand experience.",
  },
  {
    title: "Workflow Automation & Optimization",
    description: "Streamline repetitive tasks, integrate disparate systems, and optimize operational workflows.",
    benefits: "Increased productivity, reduced human error, faster decision-making.",
  },
  {
    title: "Custom AI Agents & Tools",
    description: "Develop bespoke AI solutions for unique business challenges, from data analysis to predictive modeling.",
    benefits: "Competitive advantage, tailored insights, scalable innovation.",
  },
];

const processSteps = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 11H9v2h2v-2zm4 0h-2v2h2v-2z", // Placeholder for an icon, ideally a component
    title: "Discover & Strategize",
    description: "Understand your business goals, current challenges, and automation opportunities.",
  },
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 11H9v2h2v-2zm4 0h-2v2h2v-2z", // Placeholder
    title: "Design & Develop",
    description: "Craft bespoke AI solutions, leveraging advanced models and robust engineering.",
  },
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 11H9v2h2v-2zm4 0h-2v2h2v-2z", // Placeholder
    title: "Integrate & Deploy",
    description: "Seamlessly integrate AI systems with your existing infrastructure and launch with precision.",
  },
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 11H9v2h2v-2zm4 0h-2v2h2v-2z", // Placeholder
    title: "Optimize & Scale",
    description: "Continuously monitor performance, refine algorithms, and scale solutions for sustained growth.",
  },
];

const whyChooseUs = [
  { title: "Expertise", description: "Deep understanding of AI technologies and business automation." },
  { title: "Customization", description: "Solutions built specifically for your unique operational landscape." },
  { title: "Results-Driven", description: "Focus on measurable ROI and tangible business improvements." },
  { title: "Seamless Integration", description: "Designed to work flawlessly with your existing systems." },
];

export default function SolutionsPage() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32 lg:py-40 flex items-center justify-center min-h-screen-75">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/images/hero-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Unlock Unprecedented Efficiency with <span className="text-blue-400">AI Automation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Revolutionize your business operations, enhance customer engagement, and drive growth with Vidi Agency's cutting-edge AI solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-lg"
            >
              Get Your Custom AI Solution
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-400 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Core AI Solutions */}
      <section className="py-20 md:py-28 bg-gray-950 text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Our Core AI Solutions"
            description="We design, develop, and deploy intelligent automation systems tailored to your business needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                <p className="text-gray-400 text-xs">**Key Benefits:** {solution.benefits}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Automation Process */}
      <section className="py-20 md:py-28 bg-black text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Our AI Automation Process"
            description="We follow a proven methodology to ensure seamless integration and maximum impact."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative p-8 rounded-2xl border border-gray-800 bg-gray-900 group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vidi Agency? */}
      <section className="py-20 md:py-28 bg-gray-950 text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Why Choose Vidi Agency?"
            description="Partner with us for unparalleled expertise and results in AI automation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600 transition-colors duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories (reusing testimonials from siteConfig) */}
      <section className="py-20 md:py-28 bg-black text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Proven Success Stories"
            description="See how businesses like yours are thriving with Vidi Agency's AI automation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {siteConfig.testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg"
              >
                <p className="text-gray-300 italic mb-4">\" {testimonial.quote} \"</p>
                <div className="flex items-center">
                  {/* <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" /> */}
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (reusing faq from siteConfig) */}
      <section className="py-20 md:py-28 bg-gray-950 text-white px-6">
        <div className="container mx-auto max-w-3xl">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Find answers to common questions about our AI automation solutions."
          />
          <div className="space-y-4 mt-12">
            {siteConfig.faq.map((item, idx) => (
              <motion.div
                key={idx}
                initial={false}
                className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedFaq(String(idx === Number(expandedFaq) ? null : idx))}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-bold text-lg text-white">{item.question}</span>
                  <div className={`p-2 rounded-full transition-colors ${String(idx) === expandedFaq ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                    {String(idx) === expandedFaq ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {String(idx) === expandedFaq && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10">Let's build intelligent automation that drives real results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1"
            >
              Get Your Free AI Consultation
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Our Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ReceptionistAI />
    </main>
  );
}
