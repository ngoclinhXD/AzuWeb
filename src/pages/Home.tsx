import SplitText from '../components/SplitText'
import TextType from '../components/TextType'

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2 text-5xl md:text-7xl mb-4">
        <SplitText 
          text="Hello, this is CinoTech." 
          className="inline-block" 
          delay={50}
          gradientRange={{
            start: 12,
            end: 20,
            gradient: 'linear-gradient(to right, #FF6E6E, #2D73FF)'
          }}
        />
      </div>
      
      <div className="text-2xl md:text-3xl text-blue-300 mt-2">
         <TextType 
           text={["Future Starts With Technology.", "Ideas Drive The Silicon."]}
           typingSpeed={50}
           deletingSpeed={25}
           pauseDuration={1500}
           loop={true}
           showCursor={true}
           cursorCharacter="_"
           cursorBlinkDuration={0.5}
         />
      </div>
    </main>
  );
};

export default Home;
