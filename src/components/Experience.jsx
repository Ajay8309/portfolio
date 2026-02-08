import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            title: 'Digital Specialist Engineer (DSE)',
            company: 'Infosys',
            location: 'Pune, India',
            period: '2024 - Present',
            type: 'Full-Time',
            description: 'Working as a Digital Specialist Engineer, developing enterprise-grade applications and contributing to client-facing solutions using modern web technologies.',
            achievements: [
                'Developing scalable enterprise applications',
                'Working with React, Node.js, and cloud technologies',
                'Collaborating with global teams on client projects',
                'Following best practices for code quality and delivery',
            ],
            current: true,
        },
        {
            title: 'Full Stack Developer',
            company: 'Freelance',
            location: 'Remote',
            period: '2023 - Present',
            type: 'Self-Employed',
            description: 'Building custom web applications for clients worldwide. Specializing in MERN stack development with focus on e-commerce platforms, booking systems, and business solutions.',
            achievements: [
                'Built Maali - a production-ready e-commerce platform',
                'Implemented Razorpay & UPI payment integrations',
                'Developed real-time features with WebSockets',
                'Deployed applications using Docker & CI/CD pipelines',
            ],
            current: true,
        },
    ]

    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            field: 'Computer Applications',
            institution: 'MIT World Peace University, Pune',
            period: '2022 - 2024',
            description: 'Specialized in advanced software development, database management, distributed systems, and full-stack web technologies.',
        },
    ]

    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                        <Briefcase className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-orange-300">Career Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey and academic background
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Experience Timeline */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Briefcase className="w-6 h-6 text-purple-400" />
                            Work Experience
                        </h3>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-emerald-500" />

                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-14">
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-0 top-2 w-11 h-11 rounded-full flex items-center justify-center ${exp.current
                                            ? 'bg-gradient-to-br from-purple-500 to-cyan-500'
                                            : 'bg-gray-700 border-2 border-gray-600'
                                            }`}>
                                            <Briefcase className="w-5 h-5 text-white" />
                                        </div>

                                        <div className="glass-card p-6 hover:scale-[1.01] transition-all duration-300">
                                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                <div>
                                                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                                                    <p className="text-purple-400 font-medium">{exp.company}</p>
                                                </div>
                                                {exp.current && (
                                                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                                                        Current
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {exp.period}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {exp.location}
                                                </div>
                                                <span className="skill-tag text-xs">{exp.type}</span>
                                            </div>

                                            <p className="text-gray-300 mb-4">{exp.description}</p>

                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Calendar className="w-6 h-6 text-cyan-400" />
                            Education
                        </h3>

                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <div key={index} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                                        <span className="text-2xl">🎓</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                                    <p className="text-cyan-400 font-medium mb-2">{edu.field}</p>
                                    <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                                        <Calendar className="w-4 h-4" />
                                        {edu.period}
                                    </div>
                                    <p className="text-gray-400 text-sm">{edu.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Certifications or Additional Info */}
                        <div className="glass-card p-6 mt-4">
                            <h4 className="text-lg font-bold text-white mb-4">Continuous Learning</h4>
                            <div className="space-y-3">
                                {[
                                    'Advanced React Patterns',
                                    'System Design Fundamentals',
                                    'Docker & Kubernetes',
                                    'AWS Cloud Practitioner',
                                ].map((cert, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                        <CheckCircle className="w-4 h-4 text-purple-400" />
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
