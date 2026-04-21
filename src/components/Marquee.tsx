import { motion } from 'framer-motion';
import { useRef } from 'react';
import useMobileLayout from '../hooks/useMobileLayout';

export default function Marquee() {
  const { isMobileLayout, shouldReduceEffects } = useMobileLayout();
  const baseImages = [
    "/images/img1.jpeg",
    "/images/img2.jpg",
    "/images/img3.webp",
    "/images/img4.jpeg",
    "/images/img5.webp",
    "/images/img6.jpeg",
    "/images/img7.webp",
    "/images/img8.webp",
    "/images/img9.jpeg",
    "/images/img10.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg"
  ];

  const images = [...baseImages, ...baseImages];
  const displayedImages = isMobileLayout ? images.slice(0, 16) : images;

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-12 bg-background overflow-hidden relative border-y border-foreground/5">
      {/* Side fade + color masks — left goes B&W, right goes B&W, center is color */}
      <div className="absolute left-0 top-0 bottom-0 w-[18%] sm:w-[28%] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #fdfbf7 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-[18%] sm:w-[28%] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #fdfbf7 0%, transparent 100%)" }} />

      {/* The grayscale tint layer fades out in the center using a radial mask */}
      {!shouldReduceEffects && (
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            backdropFilter: "grayscale(1)",
            WebkitBackdropFilter: "grayscale(1)",
            maskImage: "linear-gradient(to right, black 0%, black 20%, transparent 40%, transparent 60%, black 80%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 20%, transparent 40%, transparent 60%, black 80%, black 100%)",
          }}
        />
      )}

      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: isMobileLayout ? 28 : 45, repeat: Infinity }}
      >
        {displayedImages.map((src, i) => (
          <div key={i} className="group relative h-[220px] w-[160px] shrink-0 overflow-hidden rounded-xl sm:h-[300px] sm:w-[220px] md:h-[340px] md:w-[260px]">
            <img
              src={src}
              alt="Fashion Gallery"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 639px) 160px, (max-width: 767px) 220px, 260px"
            />
            <div className="absolute inset-0 border border-foreground/10 rounded-xl" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
