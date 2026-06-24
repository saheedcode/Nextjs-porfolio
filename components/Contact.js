export default function Contact() {
  return (
    <section id="contact" className="py-24">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-semibold">
              Let's Work Together
            </h3>

            <p className="mt-4">
              hello@gmail.com
            </p>
          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-3 rounded-xl"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}