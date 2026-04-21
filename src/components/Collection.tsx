import { motion } from 'framer-motion';
import { useState } from 'react';
import TiltCard from './TiltCard';

export default function Collection() {
  const [expanded, setExpanded] = useState(false);

  const images = [
    { src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80', text: 'Designer Wear', span: 'md:col-span-2 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80', text: 'Bold & Modern', span: 'col-span-1 row-span-1' },
    { src: '/images/glamora_event_ready.png', text: 'Event Ready Looks', span: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80', text: 'Classic Elegance', span: 'col-span-1 row-span-1' },
    { src: '/images/664186199_959738956505621_4526864566520120310_n.jpg', text: 'Premium Styling', span: 'col-span-1 row-span-1' },
  ];

  const moreImages = [
    { src: '/images/img6.jpeg', text: 'Avant-Garde', span: 'col-span-1 row-span-1' },
    { src: '/images/img7.webp', text: 'Street Chic', span: 'col-span-1 row-span-2' },
    { src: '/images/img9.jpeg', text: 'Timeless', span: 'col-span-1 row-span-1' },
    { src: '/images/glamora_mens_fashion.png', text: 'Modern Menswear', span: 'md:col-span-2 md:row-span-2' },
    { src: '/images/574619787_1975557796626300_1313499537675492947_n.jpg', text: 'Ethereal', span: 'col-span-1 row-span-1' },
  ];

  const displayedImages = expanded ? [...images, ...moreImages] : images;

  return (
    <section className="py-24 bg-background" id="collection">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            >
              The <span className="text-primary italic font-light">Collection</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground/70 text-lg font-light max-w-md"
            >
              From traditional elegance to modern bold statements. Find your perfect fit.
            </motion.p>
          </div>
          <motion.button 
            onClick={() => setExpanded(!expanded)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block pb-1 border-b border-foreground text-foreground uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors"
          >
            {expanded ? "Show Less" : "View All Looks"}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] perspective-1000">
          {displayedImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1, duration: 0.6 }}
              className={img.span}
            >
              <TiltCard className="w-full h-full">
                <div className="relative w-full h-full overflow-hidden rounded-xl group cursor-pointer" style={{ transform: "translateZ(20px)" }}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 duration-500" />
                  <img 
                    src={img.src} 
                    alt={img.text} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-2xl font-heading font-medium tracking-wide drop-shadow-md border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                      {img.text}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        {!expanded && (
          <div className="mt-12 flex justify-center md:hidden">
            <button 
              onClick={() => setExpanded(true)}
              className="px-8 py-3 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-white transition-colors uppercase tracking-widest text-sm"
            >
              View All Looks
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
