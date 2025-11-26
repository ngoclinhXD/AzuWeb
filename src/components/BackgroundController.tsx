import { useLocation } from 'react-router-dom';
import DarkVeil from './DarkVeil';
import ColorBends from './ColorBends';
import PrismaticBurst from './PrismaticBurst';

const BackgroundController = () => {
  const location = useLocation();
  const isDocs = location.pathname === '/docs';
  const isAI = location.pathname === '/AI';
  const isAbout = location.pathname === '/about';

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      {/* DarkVeil Background (Default) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${!isDocs && !isAI && !isAbout ? 'opacity-100' : 'opacity-0'}`}
      >
        <DarkVeil 
          speed={3}
          hueShift={289}
          noiseIntensity={0}
          scanlineFrequency={0.5}
          scanlineIntensity={0}
          warpAmount={0}
          paused={isDocs || isAI || isAbout}
          offset={{ x: 0.5, y: -0.5 }}
        />
      </div>

      {/* ColorBends Background (Docs) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isDocs ? 'opacity-100' : 'opacity-0'}`}
      >
        <ColorBends
          rotation={0}
          autoRotate={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0.5}
          noise={0.1}
          transparent={false}
          paused={!isDocs}
        />
      </div>

      {/* PrismaticBurst Background (AI) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isAI ? 'opacity-100' : 'opacity-0'}`}
      >
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={!isAI}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={0}
          mixBlendMode="lighten"
        />
      </div>
    </div>
  );
};

export default BackgroundController;
