import { useState } from 'react';
import { Book, Briefcase, Pen, Laptop, Users, Mic } from 'lucide-react';

const FlipCard = ({ frontIcon: FrontIcon, frontText, backIcon: BackIcon, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 bg-white border border-slate-100 p-6 rounded-xl flex flex-col items-center justify-center gap-4 backface-hidden transition-all ${
            isFlipped ? 'opacity-0' : 'opacity-100 hover:shadow-md'
          }`}
        >
          <div className="p-4 bg-blue-50 rounded-full">
            <FrontIcon size={40} strokeWidth={1.5} className="text-brand-blue" />
          </div>
          <h3 className="text-xl font-heading font-bold text-center">{frontText}</h3>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-brand-blue to-blue-600 p-6 rounded-xl flex flex-col items-center justify-center gap-4 backface-hidden transition-all ${
            isFlipped ? 'opacity-100 shadow-xl' : 'opacity-0'
          }`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="p-4 bg-white/20 rounded-full">
            <BackIcon size={40} strokeWidth={1.5} className="text-white" />
          </div>
          <h3 className="text-xl font-heading font-bold text-white text-center">{backText}</h3>
        </div>
      </div>
    </div>
  );
};

const ShadowResumeSection = () => {
  const cards = [
    {
      frontIcon: Book,
      frontText: 'Ethics Paper',
      backIcon: Briefcase,
      backText: 'Corporate Decision Making Certification'
    },
    {
      frontIcon: Pen,
      frontText: 'Answer Writing',
      backIcon: Laptop,
      backText: 'Content Strategy & Drafting'
    },
    {
      frontIcon: Users,
      frontText: 'Interview Prep',
      backIcon: Mic,
      backText: 'Business Communication'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How We Protect Your Career
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every skill you learn for UPSC translates to corporate excellence. 
            Hover over the cards to see the transformation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              frontIcon={card.frontIcon}
              frontText={card.frontText}
              backIcon={card.backIcon}
              backText={card.backText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShadowResumeSection;
