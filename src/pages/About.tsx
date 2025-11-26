import Particles from '../components/Particles';

const About = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={400}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 text-center pt-20 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-white/70 max-w-2xl">
          We are CinoTech, driving the future of technology with innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
