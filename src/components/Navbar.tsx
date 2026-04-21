import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-3 ${scrolled ? 'text-foreground' : 'text-white'
        }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 ${scrolled
          ? 'border-white/60 bg-background/80'
          : 'border-white/15 bg-black/10'
        }`}>
        <div className={`transition-all duration-300 ${scrolled ? 'brightness-0' : 'brightness-0 invert'}`}>
          <img src="/images/logo_wide.svg" alt="Glamora" className="h-10 md:h-16 object-contain" />
        </div>

        <div className="hidden md:flex space-x-8">
          {['Experience', 'Collection', 'Services', 'Packages'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white/70'}`}>
              {item}
            </a>
          ))}
        </div>

        <a href="#packages" className={`px-6 py-2 rounded-full text-sm font-medium transition-transform active:scale-95 shadow-sm inline-block ${scrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-foreground hover:bg-white/90'}`}>
          Book Now
        </a>
      </div>
    </motion.nav>
  );
}
