import { motion } from 'framer-motion';
import { Shirt, Scissors, Sparkles, Camera } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Services() {
  const services = [
    { icon: Shirt, title: "Outfit Rental", desc: "Access premium designer wear without the commitment of buying." },
    { icon: Scissors, title: "Styling", desc: "Expert styling to match your personality and the event's vibe." },
    { icon: Sparkles, title: "Grooming", desc: "Professional hair and makeup to complete your transformation." },
    { icon: Camera, title: "Photoshoot", desc: "Capture your stunning look with our in-house photographers." }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background" id="services">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground"
          >
            The Complete <span className="text-primary italic font-light">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard className="h-full">
                <div className="h-full group p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-glass hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all relative overflow-hidden" style={{ transform: "translateZ(30px)" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <svc.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{svc.title}</h3>
                    <p className="text-foreground/70 font-light">{svc.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
