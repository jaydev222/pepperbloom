import { CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Weddings',
      description: 'From intimate ceremonies to grand celebrations, we create weddings that beautifully reflect your love story.',
      features: [
        'Full event planning and design',
        'Venue selection and styling',
        'Catering coordination',
        'Floral and decor arrangements',
        'Timeline management',
        'Day-of coordination'
      ]
    },
    {
      title: 'Private Celebrations',
      description: 'Birthdays, anniversaries, and milestone celebrations deserve to be truly special.',
      features: [
        'Theme development',
        'Invitation design',
        'Venue decoration',
        'Entertainment coordination',
        'Catering services',
        'Photography liaison'
      ]
    },
    {
      title: 'Corporate Experiences',
      description: 'Professional events that inspire, connect, and leave lasting impressions on your guests.',
      features: [
        'Conference design',
        'Gala planning',
        'Product launches',
        'Team building events',
        'Awards ceremonies',
        'Brand activation'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FDFBF7] to-[#F5EFE9]">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-['Playfair_Display'] text-5xl mb-6 text-[#30383B] leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-[#5A5A5A] max-w-3xl leading-relaxed">
            Whatever you're celebrating, we craft every moment with intention, creativity, and meticulous attention to detail.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h2 className="font-['Playfair_Display'] text-4xl mb-4 text-[#6A1027]">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-[#EC6839] flex-shrink-0" />
                        <span className="text-[#5A5A5A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-[#EC6839]/20 to-[#F29EB7]/20 aspect-square rounded-lg ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#6A1027] text-[#E1D2C5]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#E1D2C5]">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Consultation', 'Design', 'Coordination', 'Celebration'].map((step, index) => (
              <div key={step} className="text-center">
                <div className="text-4xl font-bold text-[#EC6839] mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-[#E8D5C4]/80 text-sm">
                  {index === 0 && 'We listen, understand, and dream together'}
                  {index === 1 && 'Bringing your vision to life through detailed planning'}
                  {index === 2 && 'Managing every detail with precision and care'}
                  {index === 3 && 'Experiencing the magic of your perfect moment'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl mb-6 text-[#30383B]">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg text-[#5A5A5A] mb-8 leading-relaxed">
            Let's talk about your vision and how we can bring it to life with elegance and artistry.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-[#6A1027] text-white font-medium tracking-wide rounded transition-all hover:bg-[#30383B] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EC6839]/35 shadow-md shadow-[#6A1027]/25"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
