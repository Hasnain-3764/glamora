import { motion } from 'framer-motion';
import useMobileLayout from '../hooks/useMobileLayout';

export default function AmbientBackground() {
  const { shouldReduceEffects } = useMobileLayout();

  if (shouldReduceEffects) {
    return (
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
        <div className="absolute -top-[10%] left-[-15%] h-[60vw] w-[60vw] rounded-full bg-primary/8 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-20%] h-[55vw] w-[55vw] rounded-full bg-secondary/8 blur-[72px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-secondary/10 blur-[100px]"
      />
    </div>
  );
}
