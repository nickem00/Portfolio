import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Developer/Header"
import Hero from "./components/Developer/Hero"
import Projects from "./components/Developer/Projects"
import About from "./components/Developer/About"
import Contact from "./components/Developer/Contact"
import Footer from "./components/Developer/Footer"
import Developer from "./pages/Developer"
import LinkTree from "./pages/LinkTree"
import Photography from "./pages/Photography"

function App() {
  // Ändra denna variabel till false för att inaktivera auto-scroll funktionen
  const enableScrollSnap = true;
  
  useEffect(() => {
    // Aktivera eller inaktivera scroll-snap baserat på konfigurationsvariabeln
    if (enableScrollSnap) {
      document.documentElement.classList.add('snap-enabled');
    } else {
      document.documentElement.classList.remove('snap-enabled');
    }
  }, [enableScrollSnap]);

  const ready = true; // Change this to true when ready
  if (!ready) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Under Development</h1>
    </div>
  )
  return (
    <>
      <Routes>
        <Route path="/" element={ <LinkTree /> }/>
        <Route path="/dev" element={ <Developer /> } />
        <Route path="/photo" element={ <Photography /> } />
      </Routes>
    </>
  )
}

export default App
