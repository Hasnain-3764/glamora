import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      name: "Essential",
      price: "₹1,999",
      desc: "Perfect for a single event or night out.",
      features: ["1 Designer Outfit", "Basic Alterations", "2-Day Rental", "Dry Cleaning Included"],
      highlight: false
    },
    {
      name: "Signature",
      price: "₹4,999",
      desc: "The complete styling and grooming experience.",
      features: ["1 Premium Outfit", "Professional Styling", "Hair & Makeup", "3-Day Rental", "VIP Support"],
      highlight: true
    },
    {
      name: "Editorial",
      price: "₹9,999",
      desc: "For photoshoots and major life events.",
      features: ["2 Couture Outfits", "On-Set Stylist", "Premium Grooming", "Professional Photoshoot", "10 Edited Digital Photos"],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-foreground relative overflow-hidden" id="packages">
      <BookingModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        packageName={selectedPackage || ""} 
      />

      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Curated <span className="text-primary italic font-light">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg font-light max-w-xl mx-auto"
          >
            Choose the level of service that matches your occasion. No hidden fees, just pure glamour.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`p-8 rounded-3xl relative ${
                pkg.highlight 
                  ? 'bg-primary border-none shadow-2xl scale-105 z-10' 
                  : 'bg-white/5 border border-white/10 backdrop-blur-sm'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold tracking-wider uppercase py-1 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-heading font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-white'}`}>{pkg.name}</h3>
              <div className={`text-4xl font-light mb-4 ${pkg.highlight ? 'text-white' : 'text-primary'}`}>{pkg.price}</div>
              <p className={`font-light text-sm mb-8 ${pkg.highlight ? 'text-white/80' : 'text-white/60'}`}>{pkg.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check size={18} className={pkg.highlight ? 'text-white' : 'text-primary'} />
                    <span className={`text-sm font-light ${pkg.highlight ? 'text-white/90' : 'text-white/70'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setSelectedPackage(pkg.name)}
                className={`w-full py-4 rounded-full font-medium transition-transform active:scale-95 ${
                pkg.highlight 
                  ? 'bg-white text-foreground hover:bg-white/90' 
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
