import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Marquee from './components/Marquee';
import Solution from './components/Solution';
import Collection from './components/Collection';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Packages from './components/Packages';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import AmbientBackground from './components/AmbientBackground';
import AtmosphericTransition from './components/AtmosphericTransition';
import useMobileLayout from './hooks/useMobileLayout';

function App() {
  const { shouldReduceEffects } = useMobileLayout();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-secondary selection:text-white">
      <AmbientBackground />
      {!shouldReduceEffects && <Cursor />}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <AtmosphericTransition />
        <Problem />
        <Solution />
        <Collection />
        <Services />
        <SocialProof />
        <Packages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
