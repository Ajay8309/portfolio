import { User, Target, Zap, Heart } from 'lucide-react'

const About = () => {
    const highlights = [
        {
            icon: Target,
            title: 'Goal-Oriented',
            description: 'I focus on delivering results that drive business value and user satisfaction.',
        },
        {
            icon: Zap,
            title: 'Fast Learner',
            description: 'Quick to adapt to new technologies and embrace emerging industry trends.',
        },
        {
            icon: Heart,
            title: 'Passionate',
            description: 'Genuinely love building products that make a difference in people\'s lives.',
        },
    ]

    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-300">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Building <span className="gradient-text">Digital Solutions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A passionate developer with a love for creating exceptional digital experiences
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image/Avatar Side */}
                    <div className="relative flex justify-center">
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
                            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl" />

                            {/* Profile Card */}
                            <div className="relative glass-card p-8 max-w-md">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
                                    <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center text-5xl font-bold text-white">
                                        AP
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white text-center mb-2">Ajay Panaskar</h3>
                                <p className="text-cyan-400 text-center mb-4">Full Stack Developer</p>
                                <div className="flex justify-center gap-4">
                                    <span className="skill-tag">Remote Ready</span>
                                    <span className="skill-tag">Freelancer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Hey there! I'm <span className="text-white font-semibold">Ajay Panaskar</span>, a Full Stack Developer based in India.
                                I specialize in building robust, scalable web applications using the <span className="text-purple-400 font-medium">MERN stack</span>
                                (MongoDB, Express.js, React, Node.js).
                            </p>
                            <p>
                                With over <span className="text-cyan-400 font-medium">2 years of experience</span>, I've worked on diverse projects
                                ranging from e-commerce platforms to booking systems. I believe in writing clean, maintainable code
                                that not only works but is built to last.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
                                or brainstorming the next big idea. I'm always excited to take on challenging projects that
                                push the boundaries of what's possible.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-3 gap-4 mt-8">
                            {highlights.map((item, index) => (
                                <div key={index} className="glass-card p-4 text-center hover:scale-105 transition-all duration-300">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
