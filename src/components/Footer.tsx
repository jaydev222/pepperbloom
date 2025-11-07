import { Link } from 'react-router-dom';
import BloomIcon from './BloomIcon';

const Footer = () => {
  return (
    <footer className="bg-[#30383B] text-[#E1D2C5] py-16 mt-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity w-fit">
              <BloomIcon size={28} centerColor="#E1D2C5" />
              <span className="font-['Playfair_Display'] text-2xl text-[#E1D2C5] tracking-wider font-semibold">
                Pepperbloom
              </span>
            </Link>
            <p className="text-base text-[#E8D5C4]/80 italic">
              Moments crafted with care
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold text-[#E1D2C5] mb-4 tracking-widest uppercase">
                Navigate
              </h4>
              <ul className="list-none space-y-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About', path: '/about' },
                  { label: 'Services', path: '/services' },
                  { label: 'Gallery', path: '/gallery' },
                  { label: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-[#E8D5C4]/80 transition-colors hover:text-[#EC6839]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#E1D2C5] mb-4 tracking-widest uppercase">
                Connect
              </h4>
              <ul className="list-none space-y-3">
                <li>
                  <a
                    href="mailto:hello@pepperbloom.com"
                    className="text-[#E8D5C4]/80 transition-colors hover:text-[#EC6839]"
                  >
                    hello@pepperbloom.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/pepperbloom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8D5C4]/80 transition-colors hover:text-[#EC6839]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/pepperbloom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8D5C4]/80 transition-colors hover:text-[#EC6839]"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#E8D5C4]/20 text-center">
          <p className="text-sm text-[#E8D5C4]/70 m-0">
            &copy; 2024 Pepperbloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
