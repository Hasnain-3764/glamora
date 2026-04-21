import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import useMobileLayout from '../hooks/useMobileLayout';

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const { isMobileLayout, shouldReduceEffects } = useMobileLayout();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceEffects ? ["0%", "0%"] : ["-10%", "10%"]);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[360px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[440px] md:h-[600px]"
          >
            <motion.img 
              style={{ y, scale: isMobileLayout ? 1.04 : 1.2 }}
              src="/images/glamora_problem.png" 
              alt="Last minute outfit stress" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-lg font-light italic sm:text-xl">"I have a wedding in 3 hours and nothing to wear..."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="mb-6 text-4xl font-heading font-bold text-foreground md:mb-8 md:text-5xl">
              The Last-Minute <br /> <span className="text-primary italic font-light">Struggle</span>
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {[
                { title: "Nothing to wear", desc: "A closet full of clothes, but none fit the occasion or your current vibe." },
                { title: "No time to prepare", desc: "Between work, college, and travel, finding the perfect outfit takes too long." },
                { title: "The outfit repeat problem", desc: "You don't want to post the same look on Instagram twice, but buying new is expensive." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-foreground sm:text-xl">{item.title}</h3>
                    <p className="text-foreground/70 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
