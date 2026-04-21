export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <img src="/images/logo_wide.svg" alt="Glamora" className="h-14 md:h-16 object-contain mb-6 brightness-0 invert opacity-90" />
          <p className="font-light text-sm text-balance max-w-xs mb-6">
            Style meets speed. Solving the last-minute outfit struggle with premium rental and styling services.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/glamora.official112/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              @glamora.official112
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Explore</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#experience" className="hover:text-white transition-colors">The Experience</a></li>
            <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Legal</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Rental Agreement</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-4 font-light text-sm">
            <li>Mumbai, India</li>
            <li>hello@glamora.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-light">
        <p>&copy; {new Date().getFullYear()} Glamora. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for the bold and beautiful.</p>
      </div>
    </footer>
  );
}
