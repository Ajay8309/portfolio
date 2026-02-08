import { Folder, ExternalLink, Github, Star, GitFork } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: 'Maali - E-Commerce Platform',
            description: 'A production-ready, full-stack e-commerce platform for plants and gardening services built from scratch. Features a complete shopping experience with product catalog, advanced cart system, multiple payment options (Razorpay + Manual UPI), real-time order tracking, comprehensive admin dashboard with analytics, and a unique "Book a Maali" (gardener) service with worker assignment system. Built with enterprise-grade security including JWT authentication, rate limiting, input validation with Zod, MongoDB injection protection, and Redis caching for optimal performance.',
            image: '/maali-preview.png',
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'Razorpay', 'Redis', 'Docker', 'JWT', 'Zod'],
            features: [
                'Complete user auth (register, login, password reset)',
                'Product catalog with search, filters & categories',
                'Real-time cart, wishlist & coupon system',
                'Razorpay + Manual UPI payment integration',
                'Order tracking with status updates & PDF invoices',
                'Admin dashboard with product/order/user management',
                'Maali (gardener) booking with worker assignment',
                'Email notifications & review system',
                'Redis caching for 10x faster responses',
                'Docker deployment with health checks',
            ],
            github: 'https://github.com/Ajay8309/maali',
            live: 'https://maali.live',
            featured: true,
        },
        {
            title: 'AI Study Assistant',
            description: 'An intelligent study companion that uses AI to help students learn more effectively. Features include smart flashcards, voice-based study mode, and progress tracking.',
            image: '/study-assistant.png',
            tags: ['Next.js', 'OpenAI', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
            features: [
                'AI-powered flashcard generation',
                'Voice study mode with speech recognition',
                'Spaced repetition algorithm',
                'Progress analytics dashboard',
            ],
            github: 'https://github.com/Ajay8309/study-assistant',
            live: '#',
            featured: true,
        },
        {
            title: 'Real-Time Chat App',
            description: 'A modern chat application with real-time messaging, group chats, and file sharing capabilities.',
            image: '/chat-app.png',
            tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
            features: [
                'Real-time messaging with WebSockets',
                'Group chat functionality',
                'File and image sharing',
                'Online status indicators',
            ],
            github: 'https://github.com/Ajay8309/chat-app',
            live: '#',
            featured: false,
        },
        {
            title: 'Task Management Dashboard',
            description: 'A Kanban-style project management tool with drag-and-drop functionality and team collaboration features.',
            image: '/task-manager.png',
            tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
            features: [
                'Drag and drop interface',
                'Real-time collaboration',
                'Task assignments & deadlines',
                'Activity logs',
            ],
            github: 'https://github.com/Ajay8309/task-manager',
            live: '#',
            featured: false,
        },
    ]

    const featuredProjects = projects.filter(p => p.featured)
    const otherProjects = projects.filter(p => !p.featured)

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Folder className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">My Work</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and experience
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="space-y-16 mb-20">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Project Image */}
                            <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                <div className="relative glass-card overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                                            <Folder className="w-10 h-10 text-white" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                                        {project.featured && (
                                            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-400">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="text-sm">Featured Project</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div>
                                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mb-2">
                                        <Star className="w-4 h-4" />
                                        Featured Project
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="skill-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                        Code
                                    </a>
                                    {project.live !== '#' && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="glow-btn text-white flex items-center gap-2"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Projects Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Other Noteworthy Projects</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {otherProjects.map((project, index) => (
                            <div key={index} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                                        <Folder className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        {project.live !== '#' && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 4).map((tag, i) => (
                                        <span key={i} className="text-xs text-gray-500">
                                            {tag}{i < 3 && ' •'}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
