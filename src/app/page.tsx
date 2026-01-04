import Link from "next/link";
import TypingName from "@/components/TypingName";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "React Native", level: 80 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 95 },
];

const networkSkills = [
  { name: "Network Fundamentals", level: 60 },
  { name: "TCP/IP", level: 55 },
  { name: "Linux Administration", level: 50 },
  { name: "Network Security", level: 45 },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float delay-500" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full animate-fade-in-down">
              <span className="text-primary text-sm font-medium">
                Open to Opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up delay-100">
              Hi, I&apos;m <TypingName />
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Software Engineer with 3+ years of experience in frontend development.
              Currently transitioning to{" "}
              <span className="text-primary font-semibold">Network Administration</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-all hover-lift hover-glow"
              >
                Get in Touch
                <svg
                  className="ml-2 w-4 h-4 animate-bounce-subtle"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center px-8 py-3 bg-card hover:bg-card-hover text-foreground font-medium rounded-lg border border-border transition-all hover-lift"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <svg
            className="w-6 h-6 text-foreground-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Expertise in modern frontend technologies with a growing foundation in network administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <div className="bg-card rounded-xl p-6 border border-border card-interactive hover-glow">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-primary animate-pulse"
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
                Frontend Development
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground-secondary text-sm">
                        {skill.name}
                      </span>
                      <span className="text-foreground-muted text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                        style={{
                          "--skill-level": `${skill.level}%`,
                          "--delay": `${index * 0.15}s`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Skills */}
            <div className="bg-card rounded-xl p-6 border border-border card-interactive hover-glow">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-secondary animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                Network Administration
                <span className="ml-2 text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full animate-pulse">
                  Learning
                </span>
              </h3>
              <div className="space-y-4">
                {networkSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground-secondary text-sm">
                        {skill.name}
                      </span>
                      <span className="text-foreground-muted text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-secondary to-secondary-hover rounded-full"
                        style={{
                          "--skill-level": `${skill.level}%`,
                          "--delay": `${index * 0.15}s`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground-muted">
                Currently studying for certifications and hands-on practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-foreground-secondary">
              Some of the projects I&apos;ve worked on
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "Full-featured e-commerce solution built with Next.js and Stripe",
                tags: ["Next.js", "TypeScript", "Stripe"],
              },
              {
                title: "Mobile Banking App",
                description:
                  "React Native app for mobile banking with biometric authentication",
                tags: ["React Native", "Redux", "Biometrics"],
              },
              {
                title: "Dashboard Analytics",
                description:
                  "Real-time analytics dashboard with interactive charts and data visualization",
                tags: ["React", "D3.js", "WebSocket"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all card-interactive"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-12 h-12 text-primary/50 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-background-secondary rounded-full text-foreground-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/experience"
              className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors link-animated"
            >
              View All Projects
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-float delay-300" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-foreground-secondary mb-8 max-w-2xl mx-auto">
            Whether you need a frontend developer or someone passionate about
            network administration, I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-all hover-lift animate-pulse-glow"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
