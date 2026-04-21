import { motion } from 'framer-motion';

export default function SelfDrawingText() {
  const text = "Glamora";
  
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, duration: 1.5 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <div className="w-full flex justify-center items-center my-8">
      <motion.svg
        width="300"
        height="100"
        viewBox="0 0 300 100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="stroke-primary fill-transparent"
        style={{ strokeWidth: 2 }}
      >
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-heading text-5xl md:text-6xl tracking-widest"
          variants={draw}
          custom={0}
        >
          {text}
        </motion.text>
      </motion.svg>
    </div>
  );
}
