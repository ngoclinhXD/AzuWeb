import DarkVeil from './components/DarkVeil'
import SplitText from './components/SplitText'

import TextType from './components/TextType'
import './App.css'

function App() {
  return (
    <div style={{ fontFamily: '"Fredoka One", cursive' }} className="relative w-full min-h-screen text-white overflow-hidden select-none">
      {/* Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <DarkVeil 
          speed={3}
          hueShift={289}
          noiseIntensity={0}
          scanlineFrequency={0.5}
          scanlineIntensity={0}
          warpAmount={0}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4">
        <div className="text-2xl text-white">{">n_"}</div>
        
        <div 
          className="flex items-center gap-8 px-12 py-3 rounded-full backdrop-blur-md"
          style={{
            background: 'linear-gradient(to right, rgba(49, 135, 255, 0.4), rgba(255, 114, 114, 0.4))',
          }}
        >
          <a href="#" className="text-white hover:opacity-80 transition-opacity">Home</a>
          <a href="#" className="text-white hover:opacity-80 transition-opacity">CinoAI</a>
          <a href="#" className="text-white hover:opacity-80 transition-opacity">About</a>
        </div>

        <a 
          href="https://github.com/ngoclinhXD/AzuWeb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </nav>

      {/* Main Content */}
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
      
      <footer className="fixed bottom-4 w-full text-center text-white/30 text-sm">
        © 2025 ngoclin.h_
      </footer>
    </div>
  )
}

export default App
