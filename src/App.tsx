import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import BackgroundController from './components/BackgroundController'
import Home from './pages/Home'
import Docs from './pages/Docs'
import CinoAI from './pages/CinoAI'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{ fontFamily: '"Fredoka One", cursive' }} className="relative w-full min-h-screen text-white overflow-hidden select-none">
        {/* Background */}
        <BackgroundController />

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4">
          <Link to="/" className="text-2xl text-white hover:opacity-80 transition-opacity cursor-pointer">
            {">n_"}
          </Link>
          
          <NavBar />

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/AI" element={<CinoAI />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <footer className="fixed bottom-4 w-full text-center text-white/30 text-sm">
          © 2025 ngoclin.h_
        </footer>
      </div>
    </Router>
  )
}

export default App
