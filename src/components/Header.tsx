import { Link, useLocation } from 'react-router-dom';
import BloomIcon from './BloomIcon';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#6A1027]/10">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <BloomIcon size={32} />
          <span className="font-['Playfair_Display'] text-2xl text-[#6A1027] tracking-wider font-semibold">
            Pepperbloom
          </span>
        </Link>
        <ul className="flex gap-10 list-none">
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
                className={`text-sm font-medium tracking-wide transition-colors relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#EC6839] after:transition-all ${
                  isActive(item.path)
                    ? 'text-[#EC6839] after:w-full'
                    : 'text-[#30383B] after:w-0 hover:text-[#EC6839] hover:after:w-full'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
