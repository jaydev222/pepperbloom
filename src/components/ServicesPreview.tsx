const services = [
  {
    title: 'Weddings',
    description: 'Timeless celebrations crafted with emotion and effortless beauty.',
  },
  {
    title: 'Private Celebrations',
    description: 'Birthdays, anniversaries, and intimate gatherings tailored to your style.',
  },
  {
    title: 'Corporate Experiences',
    description: 'Refined events that inspire connection and leave a lasting impression.',
  },
];

const ServicesPreview = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#FDFBF7] to-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-12 text-center border border-[#6A1027]/10 rounded-lg transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6A1027]/15 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#EC6839] before:to-[#F29EB7] before:scale-x-0 before:transition-transform hover:before:scale-x-100"
          >
            <h3 className="font-['Playfair_Display'] text-3xl mb-4 text-[#6A1027]">
              {service.title}
            </h3>
            <p className="text-lg text-[#5A5A5A] leading-relaxed m-0">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
