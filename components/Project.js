const projects = [
  {
    title: "Finance Dashboard",
  },
  {
    title: "E-Commerce",
  },
  {
    title: "Task Manager",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl shadow overflow-hidden"
            >
              <div className="h-56 bg-gray-200"></div>

              <div className="p-5">
                <h3 className="font-bold text-xl">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  Project description here.
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}