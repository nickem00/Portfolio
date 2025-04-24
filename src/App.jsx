import { useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"

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
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
