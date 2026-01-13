import Link from "next/link";

export const metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts on frontend development, network administration, and tech career transitions",
};

const blogPosts = [
  {
    slug: "transitioning-from-frontend-to-networking",
    title: "Transitioning from Frontend Development to Network Administration",
    excerpt:
      "After 3 years in frontend development, I've decided to make a career switch to network administration. Here's why and how I'm approaching this transition.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Career",
    featured: true,
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: Lessons from Production",
    excerpt:
      "Key performance optimizations I've learned from building and maintaining large-scale React applications. From code splitting to memoization.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "React",
    featured: true,
  },
  {
    slug: "networking-fundamentals-for-developers",
    title: "Networking Fundamentals Every Developer Should Know",
    excerpt:
      "Understanding how networks work can make you a better developer. A practical guide to TCP/IP, DNS, and how the internet actually works.",
    date: "2024-01-02",
    readTime: "10 min read",
    category: "Networking",
    featured: false,
  },
  {
    slug: "building-mobile-apps-with-react-native",
    title: "Building Cross-Platform Mobile Apps with React Native",
    excerpt:
      "My experience building a mobile banking app with React Native. Tips, challenges, and best practices I've learned along the way.",
    date: "2023-12-20",
    readTime: "15 min read",
    category: "React Native",
    featured: false,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Codebases",
    excerpt:
      "How to effectively use TypeScript in large projects. Patterns, tips, and common mistakes to avoid when scaling your TypeScript codebase.",
    date: "2023-12-10",
    readTime: "11 min read",
    category: "TypeScript",
    featured: false,
  },
  {
    slug: "linux-basics-for-web-developers",
    title: "Linux Basics for Web Developers",
    excerpt:
      "Essential Linux commands and concepts every web developer should know. From navigation to file management and shell scripting.",
    date: "2023-12-01",
    readTime: "9 min read",
    category: "Linux",
    featured: false,
  },
];

const categories = [
  "All",
  "Career",
  "React",
  "React Native",
  "TypeScript",
  "Networking",
  "Linux",
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Thoughts on frontend development, network administration, and
            navigating a tech career transition
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Featured Posts
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Featured Image Placeholder */}
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground-muted">
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-foreground-secondary text-sm mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground-muted">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-primary hover:text-primary-hover font-medium transition-colors inline-flex items-center gap-1"
                    >
                      Read more
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-y border-border bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-card text-foreground-secondary hover:text-foreground hover:bg-card-hover border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            All Posts
          </h2>

          <div className="space-y-6">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground-muted">
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-foreground-secondary text-sm">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                    <span className="text-xs text-foreground-muted">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-primary hover:text-primary-hover font-medium transition-colors inline-flex items-center gap-1"
                    >
                      Read
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="text-foreground-secondary mb-8">
            Get notified when I publish new articles about web development,
            networking, and career growth.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-foreground-muted mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
