import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="py-24 text-center bg-gradient-to-br from-[#FDFBF7] to-[#F5EFE9]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="font-['Playfair_Display'] text-6xl mb-6 max-w-4xl mx-auto text-[#30383B] leading-tight tracking-tight">
          Moments that Bloom into Lasting Memories
        </h1>
        <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto mb-10 leading-relaxed">
          We design events with heart, artistry, and intention — so you can simply be present for the moments that matter.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#6A1027] text-white font-medium tracking-wide rounded transition-all hover:bg-[#30383B] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EC6839]/35 shadow-md shadow-[#6A1027]/25"
          >
            Plan Your Event
          </Link>
          <Link
            to="/gallery"
            className="inline-block px-10 py-4 bg-transparent text-[#6A1027] font-medium tracking-wide rounded border-2 border-[#6A1027] transition-all hover:bg-[#6A1027] hover:text-white"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
