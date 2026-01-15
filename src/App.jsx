import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ShadowResumeSection from './components/ShadowResumeSection';
import EthosSection from './components/EthosSection';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ShadowResumeSection />
        <EthosSection />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
