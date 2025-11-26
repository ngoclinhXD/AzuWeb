import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const navRect = navRef.current?.getBoundingClientRect();
    
    if (navRect) {
      const rect = target.getBoundingClientRect();
      setPillStyle({
        left: rect.left - navRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setPillStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const navItems = [
    { name: 'Docs', path: '/docs' },
    { name: 'CinoAI', path: '/AI' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div 
      ref={navRef}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/10"
      onMouseLeave={handleMouseLeave}
    >
      {/* Sliding Pill */}
      <div
        className="absolute top-1 bottom-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] pointer-events-none"
        style={{
          left: pillStyle.left,
          width: pillStyle.width,
          opacity: pillStyle.opacity,
          background: 'linear-gradient(to right, rgba(49, 135, 255, 0.8), rgba(255, 114, 114, 0.8))',
          // Adjust top/bottom to match padding if needed, or use height
          height: 'calc(100% - 8px)', 
          top: '4px'
        }}
      />

      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="relative z-10 px-6 py-2 text-white transition-colors duration-200"
          onMouseEnter={handleMouseEnter}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
