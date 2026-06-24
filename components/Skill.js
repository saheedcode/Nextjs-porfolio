const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-xl shadow p-6 text-center"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}