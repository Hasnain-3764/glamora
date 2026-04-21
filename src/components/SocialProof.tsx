import { motion } from 'framer-motion';

export default function SocialProof() {
  const posts = [
    { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80', likes: '1.2k', type: 'reel' },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80', likes: '842', type: 'post' },
    { src: '/images/glamora_mens_fashion.png', likes: '2.5k', type: 'reel' },
    { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80', likes: '956', type: 'post' },
  ];

  return (
    <section className="py-24 bg-foreground text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Loved by <span className="text-secondary italic font-light">100+</span> Influencers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg font-light"
            >
              Real engagement. Real transformations. Join the movement of smart, aesthetic styling that the college audience is obsessing over.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full backdrop-blur-md"
          >
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-secondary">50k+</div>
              <div className="text-sm text-white/70 tracking-wide uppercase">Followers</div>
            </div>
            <div className="w-px h-12 bg-white/20 mx-2" />
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-secondary">4.9</div>
              <div className="text-sm text-white/70 tracking-wide uppercase">Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group bg-white/5"
            >
              <img 
                src={post.src} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full">
                {post.type === 'reel' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
                <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded backdrop-blur-sm">@glamora.official</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a href="https://instagram.com/glamora.official" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white hover:text-foreground transition-colors inline-block">
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
