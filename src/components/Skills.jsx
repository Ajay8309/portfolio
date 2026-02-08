import { Code, Database, Server, Palette, Cloud, Terminal } from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: Palette,
            color: 'from-purple-500 to-pink-500',
            skills: ['React.js', 'Next.js', 'TailwindCSS', 'JavaScript', 'TypeScript', 'HTML/CSS'],
        },
        {
            title: 'Backend',
            icon: Server,
            color: 'from-cyan-500 to-blue-500',
            skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT Auth'],
        },
        {
            title: 'Database',
            icon: Database,
            color: 'from-emerald-500 to-teal-500',
            skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose', 'Prisma', 'Firebase'],
        },
        {
            title: 'DevOps',
            icon: Cloud,
            color: 'from-orange-500 to-red-500',
            skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Nginx', 'Linux'],
        },
        {
            title: 'Tools & Others',
            icon: Terminal,
            color: 'from-violet-500 to-purple-500',
            skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Jira', 'Vercel'],
        },
    ]

    const techStack = [
        { name: 'React', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'TypeScript', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'PostgreSQL', level: 70 },
    ]

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                        <Code className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300">Tech Arsenal</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                                <category.icon className="w-full h-full text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proficiency Bars */}
                <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Proficiency</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {techStack.map((tech, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white font-medium">{tech.name}</span>
                                    <span className="text-gray-400">{tech.level}%</span>
                                </div>
                                <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000"
                                        style={{ width: `${tech.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
