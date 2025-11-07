import { Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Heartfelt Design',
      description: 'We pour genuine passion into every detail, creating experiences that resonate on an emotional level.'
    },
    {
      icon: Sparkles,
      title: 'Artistic Excellence',
      description: 'Our creative vision combines elegance with innovation, transforming moments into artistic expressions.'
    },
    {
      icon: Users,
      title: 'Personal Connection',
      description: 'We listen, collaborate, and understand your unique story to create celebrations authentically yours.'
    }
  ];

  const team = [
    {
      name: 'Sofia Rossi',
      role: 'Founder & Creative Director',
      bio: 'With over 15 years of event design experience, Sofia founded Pepperbloom to bring intentional beauty to every celebration.'
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Design',
      bio: 'Marcus brings artistic vision and meticulous attention to detail, crafting stunning visual experiences.'
    },
    {
      name: 'Elena Moretti',
      role: 'Event Coordinator',
      bio: 'Elena ensures every logistics detail is seamless, allowing our clients to simply enjoy their moments.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FDFBF7] to-[#F5EFE9]">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-['Playfair_Display'] text-5xl mb-6 text-[#30383B] leading-tight">
            Our Story
          </h1>
          <p className="text-xl text-[#5A5A5A] max-w-3xl leading-relaxed mb-8">
            Pepperbloom was born from a simple belief: celebrations are sacred moments that deserve intentional, thoughtful design. What began as a passion for creating beautiful events has blossomed into a full-service design studio dedicated to crafting unforgettable experiences.
          </p>
          <p className="text-xl text-[#5A5A5A] max-w-3xl leading-relaxed">
            Every event we design tells a unique story. We don't just plan celebrations—we create canvases for life's most meaningful moments, ensuring that beauty, elegance, and authenticity shine through in every detail.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-['Playfair_Display'] text-4xl mb-16 text-center text-[#30383B]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-[#6A1027]/10 rounded-full">
                      <Icon size={40} className="text-[#6A1027]" />
                    </div>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-[#6A1027]">
                    {value.title}
                  </h3>
                  <p className="text-lg text-[#5A5A5A] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-['Playfair_Display'] text-4xl mb-16 text-center text-[#30383B]">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white p-12 rounded-lg border border-[#6A1027]/10 text-center transition-all hover:shadow-lg hover:shadow-[#6A1027]/15"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#EC6839] to-[#F29EB7] rounded-full"></div>
                <h3 className="font-['Playfair_Display'] text-2xl mb-2 text-[#6A1027]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#EC6839] uppercase tracking-wide mb-4">
                  {member.role}
                </p>
                <p className="text-[#5A5A5A] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
