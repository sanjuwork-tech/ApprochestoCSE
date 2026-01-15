import { WifiOff, BrainCircuit, Heart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white border border-slate-100 p-6 rounded-xl hover:shadow-md transition-all">
      <div className="mb-4 p-3 bg-accent-green/20 rounded-lg inline-block">
        <Icon size={32} strokeWidth={1.5} className="text-accent-green" />
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: WifiOff,
      title: 'Offline-First',
      description: 'Download classes. Read editorials on 2G. No buffering.'
    },
    {
      icon: BrainCircuit,
      title: 'Adaptive AI',
      description: 'The system finds your weak subjects and auto-schedules revision.'
    },
    {
      icon: Heart,
      title: 'Dignified Community',
      description: 'Mentorship based on Seva. No fear-mongering.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for Bharat
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technology that works for everyone, everywhere in India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
