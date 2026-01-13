import Link from "next/link";

import Image from "next/image";

export const metadata = {
  title: "About | Portfolio",
  description:
    "Learn more about my journey from frontend development to network administration",
};

const timeline = [
  {
    year: "2024 - Present",
    title: "Transitioning to Network Administration",
    description:
      "Currently studying network fundamentals, pursuing certifications, and gaining hands-on experience with network infrastructure.",
    icon: "🔄",
  },
  {
    year: "2021 - 2024",
    title: "Senior Frontend Developer",
    description:
      "Led frontend development teams, architected scalable React applications, and mentored junior developers.",
    icon: "💼",
  },
  {
    year: "2020 - 2021",
    title: "Frontend Developer",
    description:
      "Developed responsive web applications using React and React Native. Collaborated with cross-functional teams.",
    icon: "👨‍💻",
  },
  {
    year: "2020",
    title: "Started Programming Journey",
    description:
      "Began learning web development, focusing on JavaScript, HTML, and CSS. Built first portfolio projects.",
    icon: "🚀",
  },
];

const certifications = [
  {
    name: "CompTIA Network+ (In Progress)",
    issuer: "CompTIA",
    status: "in-progress",
  },
  {
    name: "CCNA (Planned)",
    issuer: "Cisco",
    status: "planned",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "completed",
  },
];

const interests = [
  { name: "Network Security", icon: "🔒" },
  { name: "Cloud Computing", icon: "☁️" },
  { name: "Linux Administration", icon: "🐧" },
  { name: "Automation & Scripting", icon: "⚙️" },
  { name: "Open Source", icon: "📖" },
  { name: "Continuous Learning", icon: "📚" },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <Image
                      src={"/tikaram_ac.jpeg"}
                      alt="Profile Picture"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* <svg
                      className="w-32 h-32 text-foreground-muted"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg> */}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-sm font-medium">
                    3+ Years Experience
                  </span>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h1>
              <p className="text-lg text-foreground-secondary mb-4">
                I&apos;m a passionate software engineer with over 3 years of
                experience in frontend development. My journey has taken me
                through building modern web and mobile applications using React,
                Next.js, and React Native.
              </p>
              <p className="text-lg text-foreground-secondary mb-4">
                Now, I&apos;m embarking on an exciting new chapter:
                transitioning into{" "}
                <span className="text-primary font-semibold">
                  Network Administration
                </span>
                . I&apos;m drawn to the foundational role that networks play in
                our digital infrastructure and am eager to bring my
                problem-solving skills to this field.
              </p>
              <p className="text-lg text-foreground-secondary">
                I believe that my background in software development gives me a
                unique perspective on network systems, especially in areas like
                automation, cloud infrastructure, and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why The Change Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Network Administration?
            </h2>
            <p className="text-foreground-secondary">
              My journey from frontend development to network administration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Foundation of Everything",
                description:
                  "Every application I&apos;ve built relies on networks. I want to understand and manage this critical infrastructure.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                ),
              },
              {
                title: "Problem-Solving at Scale",
                description:
                  "Network issues affect entire organizations. I&apos;m excited by the challenge of troubleshooting complex systems.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
              },
              {
                title: "Security Focus",
                description:
                  "With cyber threats increasing, network security is more important than ever. I want to help protect organizations.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-foreground-secondary">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Journey
            </h2>
            <p className="text-foreground-secondary">
              A timeline of my professional growth and career transition
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 last:pb-0">
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs">
                  {item.icon}
                </div>
                {/* Content */}
                <div className="bg-card rounded-xl p-6 border border-border ml-4">
                  <span className="text-sm text-primary font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground-secondary mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications
            </h2>
            <p className="text-foreground-secondary">
              Building credentials for my network administration career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      cert.status === "completed"
                        ? "bg-success/20 text-success"
                        : cert.status === "in-progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-foreground-muted/20 text-foreground-muted"
                    }`}
                  >
                    {cert.status === "completed"
                      ? "Completed"
                      : cert.status === "in-progress"
                      ? "In Progress"
                      : "Planned"}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                <p className="text-sm text-foreground-secondary mt-1">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interests & Focus Areas
            </h2>
            <p className="text-foreground-secondary">
              Topics I&apos;m passionate about and actively learning
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-colors"
              >
                <span>{interest.icon}</span>
                <span className="text-foreground">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-foreground-secondary mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, whether in
            frontend development or network administration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
