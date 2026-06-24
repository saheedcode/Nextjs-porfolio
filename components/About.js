export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <p className="text-gray-600">
              I am a Full Stack Developer passionate
              about creating scalable and modern web
              applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="shadow p-6 rounded-xl">
              <h3 className="text-3xl font-bold">
                3+
              </h3>
              <p>Years Experience</p>
            </div>

            <div className="shadow p-6 rounded-xl">
              <h3 className="text-3xl font-bold">
                20+
              </h3>
              <p>Projects</p>
            </div>

            <div className="shadow p-6 rounded-xl">
              <h3 className="text-3xl font-bold">
                10+
              </h3>
              <p>Technologies</p>
            </div>

            <div className="shadow p-6 rounded-xl">
              <h3 className="text-3xl font-bold">
                5+
              </h3>
              <p>Clients</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}