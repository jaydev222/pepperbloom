import { Link } from 'react-router-dom';

const PageNav = () => {
  return (
    <section className="flex gap-4 justify-center py-16 pb-8">
      <Link
        to="/about"
        className="px-6 py-3 bg-white border border-[#6A1027]/20 rounded text-[#6A1027] font-medium transition-all hover:bg-[#6A1027] hover:text-white hover:border-[#6A1027]"
      >
        Learn About Us
      </Link>
      <Link
        to="/contact"
        className="px-6 py-3 bg-white border border-[#6A1027]/20 rounded text-[#6A1027] font-medium transition-all hover:bg-[#6A1027] hover:text-white hover:border-[#6A1027]"
      >
        Get in Touch
      </Link>
    </section>
  );
};

export default PageNav;
