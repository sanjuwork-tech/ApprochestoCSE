import { Quote } from 'lucide-react';

const EthosSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-earth-clay text-white overflow-hidden">
      {/* Background Quote Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Quote size={300} strokeWidth={1} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Sanskrit Verse */}
          <p className="text-2xl sm:text-3xl md:text-4xl italic font-heading leading-relaxed">
            विद्या ददाति विनयं
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl italic font-heading leading-relaxed">
            विनयाद् याति पात्रताम्।
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl italic font-heading leading-relaxed">
            पात्रत्वात् धनमाप्नोति
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl italic font-heading leading-relaxed">
            धनात् धर्मं ततः सुखम्॥
          </p>

          {/* Divider */}
          <div className="py-4">
            <div className="w-24 h-0.5 bg-white/50 mx-auto"></div>
          </div>

          {/* English Translation */}
          <div className="space-y-3">
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              Knowledge imparts humility...
            </p>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              humility leads to worthiness...
            </p>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              worthiness brings prosperity...
            </p>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              prosperity enables righteousness, and from that comes happiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthosSection;
