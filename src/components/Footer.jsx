import { Heart, ArrowUp, Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Ajay8309', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/ajaypanaskar', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/ajaypanaskar', label: 'Twitter' },
        { icon: Mail, href: 'mailto:ajaypanaskar@email.com', label: 'Email' },
    ]

    return (
        <footer className="relative py-16 px-6 border-t border-white/10">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold gradient-text">Ajay.dev</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full Stack Developer specializing in building exceptional digital experiences.
                            Let's turn your ideas into reality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & CTA */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-white text-sm font-medium hover:from-purple-500/30 hover:to-cyan-500/30 transition-all"
                        >
                            Let's Work Together
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        © {currentYear} Ajay Panaskar. Crafted with
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        in India
                    </p>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
                    >
                        Back to top
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
