export const metadata = {
  title: "Experience | Portfolio",
  description: "My professional experience and projects in frontend development",
};

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    location: "Remote",
    period: "2023 - 2024",
    description:
      "Led a team of 4 developers in building and maintaining a large-scale e-commerce platform. Implemented performance optimizations that reduced page load times by 40%.",
    achievements: [
      "Architected a micro-frontend system that improved team velocity by 30%",
      "Mentored 3 junior developers, conducting code reviews and pair programming sessions",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      "Led migration from JavaScript to TypeScript across the entire codebase",
    ],
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Startup Inc",
    location: "On-site",
    period: "2021 - 2023",
    description:
      "Developed responsive web applications and mobile apps using React and React Native. Collaborated closely with UX designers and backend engineers.",
    achievements: [
      "Built a React Native mobile app from scratch, reaching 50k+ downloads",
      "Implemented real-time features using WebSocket connections",
      "Reduced bundle size by 60% through code splitting and lazy loading",
      "Created a component library used across 5 different projects",
    ],
    technologies: ["React", "React Native", "Redux", "Node.js", "MongoDB"],
  },
  {
    title: "Junior Frontend Developer",
    company: "Digital Agency",
    location: "Hybrid",
    period: "2020 - 2021",
    description:
      "Started my professional development career building websites and web applications for various clients across different industries.",
    achievements: [
      "Developed 15+ responsive websites for clients in various industries",
      "Learned and applied modern frontend frameworks and best practices",
      "Collaborated with cross-functional teams in an agile environment",
      "Received recognition for quick learning and problem-solving abilities",
    ],
    technologies: ["JavaScript", "React", "HTML/CSS", "SASS", "Git"],
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with cart management, payment processing, and order tracking. Built with performance and accessibility in mind.",
    image: null,
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Server-side rendering for SEO",
      "Real-time inventory management",
      "Multiple payment providers",
      "Admin dashboard",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, transaction history, and fund transfers.",
    image: null,
    technologies: ["React Native", "Redux", "Node.js", "Express", "JWT"],
    features: [
      "Biometric authentication",
      "Real-time transaction updates",
      "Push notifications",
      "Offline support",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, data visualization, and customizable widgets.",
    image: null,
    technologies: ["React", "D3.js", "WebSocket", "Chart.js", "Material-UI"],
    features: [
      "Real-time data updates",
      "Interactive charts",
      "Exportable reports",
      "Custom dashboard layouts",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative project management tool with drag-and-drop functionality, team assignments, and deadline tracking.",
    image: null,
    technologies: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    features: [
      "Drag-and-drop kanban board",
      "Team collaboration",
      "File attachments",
      "Activity timeline",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Experience() {
  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Projects
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            3+ years of frontend development experience building modern web and
            mobile applications
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-foreground-secondary">{exp.period}</p>
                    <p className="text-foreground-muted text-sm">{exp.location}</p>
                  </div>
                </div>

                <p className="text-foreground-secondary mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground-secondary text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground-secondary text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs text-foreground-secondary flex items-center gap-1"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-background-secondary rounded text-foreground-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-sm text-foreground-secondary hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-sm text-foreground-secondary hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Technologies I Work With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "Vue.js", "TypeScript"] },
              { category: "Mobile", skills: ["React Native", "Expo", "iOS", "Android"] },
              { category: "Styling", skills: ["Tailwind CSS", "SASS", "CSS-in-JS", "Framer Motion"] },
              { category: "Backend", skills: ["Node.js", "Express", "GraphQL", "REST APIs"] },
              { category: "Databases", skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"] },
              { category: "DevOps", skills: ["Git", "Docker", "CI/CD", "AWS"] },
              { category: "Testing", skills: ["Jest", "Cypress", "React Testing Library", "E2E"] },
              { category: "Tools", skills: ["VS Code", "Figma", "Postman", "Terminal"] },
            ].map((group, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 border border-border"
              >
                <h3 className="text-sm font-semibold text-primary mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-foreground-secondary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
