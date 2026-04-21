import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import useMobileLayout from '../hooks/useMobileLayout';

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 8,
  opacity: Math.random() * 0.4 + 0.1,
}));

const WORDS = ["Style.", "Speed.", "Confidence.", "Glamora."];

export default function AtmosphericTransition() {
  const ref = useRef<HTMLElement>(null);
  const { isMobileLayout, shouldReduceEffects } = useMobileLayout();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  // Parallax layers
  const bgY      = useTransform(smoothProgress, [0, 1], ["0%", "-25%"]);
  const midY     = useTransform(smoothProgress, [0, 1], ["0%", "-12%"]);
  const textY    = useTransform(smoothProgress, [0, 1], ["10%", "-10%"]);
  const opacity  = useTransform(smoothProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);
  const scale    = useTransform(smoothProgress, [0, 0.2], [0.95, 1]);

  if (shouldReduceEffects) {
    return (
      <section
        ref={ref}
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#0d0d0d] px-6 py-20 sm:min-h-[500px]"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80"
            alt="Fashion atmosphere"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
          <div className="absolute inset-x-0 top-[18%] mx-auto h-40 w-40 rounded-full bg-primary/20 blur-[88px]" />
        </div>
        <div className="relative z-10 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary sm:text-sm">
            The Glamora Experience
          </p>
          <h2 className="mx-auto max-w-4xl text-4xl font-heading font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Style. Speed. Confidence. <span className="font-light italic text-primary">Glamora.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
            Walk in. Get styled. Step out luminous in under two hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={`relative flex items-center justify-center overflow-hidden bg-[#0d0d0d] ${isMobileLayout ? 'h-[80vh] min-h-[520px]' : 'h-[90vh] min-h-[600px]'}`}
    >
      {/* ── Layer 1: cinematic background image ── */}
      <motion.div
        style={{ y: bgY, scale: 1.15 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80"
          alt="Fashion atmosphere"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </motion.div>

      {/* ── Layer 2: mid-ground warm light streak ── */}
      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 z-[1] pointer-events-none"
      >
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15], x: ["-5%", "5%", "-5%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[80%] h-[40%] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(180,144,96,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[15%] right-[15%] w-[50%] h-[50%] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(100,90,80,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* ── Layer 3: floating particles ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#b49060]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Layer 4: animated horizontal scan line ── */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          className="absolute left-0 right-0 h-[1px]"
          style={{ background: "linear-gradient(to right, transparent, rgba(180,144,96,0.4), transparent)" }}
        />
      </div>

      {/* ── Layer 5: main copy ── */}
      <motion.div
        style={{ y: textY, opacity, scale }}
        className="relative z-10 text-center px-6"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-primary uppercase text-xs md:text-sm tracking-[0.3em] mb-8 font-medium"
        >
          The Glamora Experience
        </motion.p>

        {/* Staggered headline words */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 mb-10">
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-none ${
                i === WORDS.length - 1
                  ? "text-primary italic font-light"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white/60 font-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
        >
          Walk in. Get styled. Step out luminous — in under two hours.
        </motion.p>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 uppercase tracking-widest text-[10px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* ── Vignette border ── */}
      <div
        className="absolute inset-0 z-[8] pointer-events-none"
        style={{ boxShadow: "inset 0 0 120px 40px rgba(0,0,0,0.6)" }}
      />
    </section>
  );
}
