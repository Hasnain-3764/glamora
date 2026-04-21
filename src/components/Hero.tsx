import { motion, useScroll, useTransform } from 'framer-motion';
import useMobileLayout from '../hooks/useMobileLayout';

export default function Hero() {
  const { isMobileLayout, shouldReduceEffects } = useMobileLayout();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, shouldReduceEffects ? 90 : 300]);
  const opacity = useTransform(scrollY, [0, shouldReduceEffects ? 250 : 400], [1, 0]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      <motion.div 
        style={shouldReduceEffects ? undefined : { y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/55 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%)] z-10" />
        <img 
          src="/images/glamora_hero_generated.png" 
          alt="Glamora Style" 
          className={`h-full w-full object-cover ${isMobileLayout ? 'object-center' : 'object-top scale-105'}`}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-14 pt-28 text-center sm:px-6 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            Premium Styling & Rental
          </span>
          <motion.h1 
            className="mb-5 flex flex-wrap justify-center gap-x-3 text-balance font-heading text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:mb-6 md:text-7xl lg:text-8xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
              }
            }}
          >
            {["Style", "Meets"].map((word, i) => (
              <motion.span 
                key={i} 
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
              >
                {word}
              </motion.span>
            ))}
            <br className="sm:hidden" />
            <motion.span 
              className="italic font-light text-secondary"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
              }}
            >
              Speed
            </motion.span>
          </motion.h1>
          <p className="mx-auto mb-8 max-w-xl text-base font-light text-white/90 text-balance sm:text-lg md:mb-10 md:text-xl">
            Walk in. Get styled. Step out event-ready. 
            The complete transformation experience for the modern aesthetic.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#collection" className="w-full sm:w-auto px-8 py-4 bg-white text-foreground rounded-full font-medium hover:bg-opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block text-center">
              Explore Looks
            </a>
            <a href="#packages" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all active:scale-95 inline-block text-center">
              Get Styled
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 text-left sm:mt-12 sm:grid-cols-3 sm:gap-4">
            {[
              { value: '24 hr', label: 'Fast turnaround styling' },
              { value: '100+', label: 'Looks curated for events' },
              { value: '4.9/5', label: 'Average client rating' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md shadow-lg shadow-black/10 sm:px-5">
                <div className="text-2xl font-heading font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-white/75">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
