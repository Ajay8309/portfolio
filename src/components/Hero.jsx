import { useEffect, useState } from 'react'
import { ArrowDown, Sparkles, MapPin, Download, Play } from 'lucide-react'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const roles = ['Full Stack Developer', 'MERN Stack Expert', 'Problem Solver', 'Tech Enthusiast']

    useEffect(() => {
        const currentRole = roles[currentIndex]
        let charIndex = 0
        let isDeleting = false

        const typeEffect = setInterval(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, charIndex + 1))
                charIndex++
                if (charIndex === currentRole.length) {
                    setTimeout(() => { isDeleting = true }, 2000)
                }
            } else {
                setDisplayText(currentRole.substring(0, charIndex - 1))
                charIndex--
                if (charIndex === 0) {
                    isDeleting = false
                    setCurrentIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearInterval(typeEffect)
    }, [currentIndex])

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-fade-in">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-300">Available for freelance work</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
                    <span className="text-white">Hi, I'm </span>
                    <span className="gradient-text">Ajay</span>
                </h1>

                {/* Typing Effect */}
                <div className="h-16 flex items-center justify-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <span className="text-cyan-400">&lt;</span>
                        {displayText}
                        <span className="animate-pulse">|</span>
                        <span className="text-cyan-400">/&gt;</span>
                    </h2>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    I craft <span className="text-white font-medium">scalable web applications</span> that solve real-world problems.
                    Specializing in the <span className="text-purple-400">MERN stack</span>, I turn complex ideas into
                    <span className="text-cyan-400"> elegant, production-ready</span> solutions.
                </p>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 text-gray-400 mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>India 🇮🇳</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <a
                        href="#projects"
                        className="glow-btn text-white flex items-center gap-2 group"
                    >
                        <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <Download className="w-5 h-5" />
                        Download CV
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    {[
                        { value: '2+', label: 'Years Experience' },
                        { value: '15+', label: 'Projects Completed' },
                        { value: '10+', label: 'Happy Clients' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
                    <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
                        <span className="text-sm mb-2">Scroll Down</span>
                        <ArrowDown className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
