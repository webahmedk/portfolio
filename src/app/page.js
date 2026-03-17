export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-16">

      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Khalid Ahmed Khan
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl">
          MERN Stack Developer specializing in building modern web
          applications using React, Next.js, Node.js, and MongoDB.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-2 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>

        <p className="text-gray-400 max-w-3xl">
          I am a full-stack developer focused on the MERN stack and modern
          frameworks like Next.js. I enjoy building scalable applications,
          learning new technologies, and creating clean user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Prisma",
            "Tailwind CSS",
          ].map((skill) => (
            <div
              key={skill}
              className="border border-gray-700 rounded-lg p-4 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="text-gray-400 mt-2">
              A full-stack MERN application with authentication and REST API.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="text-gray-400 mt-2">
              A Next.js application with server-side rendering and Prisma.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <p className="text-gray-400">
          Email: khalid@example.com
        </p>
      </section>

    </main>
  );
}