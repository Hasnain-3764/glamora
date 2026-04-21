import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

export default function BookingModal({ isOpen, onClose, packageName }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-background rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              {submitted ? (
                <div className="py-12 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Request Received</h3>
                  <p className="text-foreground/70">Our styling team will contact you shortly to confirm your {packageName} appointment.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-heading font-bold mb-2">Book {packageName}</h3>
                  <p className="text-foreground/60 text-sm mb-8">Leave your details and our team will get back to you to finalize the booking.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Jane Doe" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Event Details / Notes</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about the occasion..." />
                    </div>
                    
                    <button type="submit" className="w-full py-4 bg-foreground text-white rounded-xl font-medium mt-4 hover:bg-foreground/90 transition-transform active:scale-95">
                      Submit Request
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
