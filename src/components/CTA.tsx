import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SelfDrawingText from './SelfDrawingText';

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          style={{ y, scale: 1.4 }}
          src="/images/glamora_cta_bg.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <SelfDrawingText />
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 mt-4">
            Ready to <span className="italic font-light text-primary">Transform?</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto text-center"
        >
          Skip the stress of shopping. Book your slot and let our styling team do the magic.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a href="#packages" className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-transform active:scale-95 shadow-xl text-center inline-block">
            Book Appointment
          </a>
          <a href="https://www.instagram.com/glamora.official112/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/50 text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all active:scale-95 text-center inline-block">
            Explore Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
