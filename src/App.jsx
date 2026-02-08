import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-500/20 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
