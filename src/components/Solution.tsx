import { motion } from 'framer-motion';

export default function Solution() {
  const steps = [
    { number: "01", title: "Walk In", desc: "Arrive at our studio empty-handed. We handle the rest." },
    { number: "02", title: "Choose", desc: "Select from our curated premium collection of designer wear." },
    { number: "03", title: "Get Styled", desc: "Professional hair, makeup, and styling by our experts." },
    { number: "04", title: "Glow Out", desc: "Step out confident, picture-perfect, and event-ready." }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            Walk In. <span className="text-secondary italic font-light">Glow Out.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg font-light"
          >
            A frictionless, complete transformation journey designed for speed and elegance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 text-6xl font-heading font-bold text-white/5 transition-colors group-hover:text-secondary/20">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-secondary/50 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
