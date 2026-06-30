import { Analytics } from '@vercel/analytics/react'
import About from './components/About'
import Assessment from './components/Assessment'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <main id="top" className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-8 sm:px-10 sm:py-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Assessment />
        <Contact />
      </div>
      <Analytics />
    </main>
  )
}

export default App
