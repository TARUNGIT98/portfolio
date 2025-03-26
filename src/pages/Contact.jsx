import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://formspree.io/f/xrberblb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-100 py-24 px-6" id="contact">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Contact Me</h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Got an exciting idea or opportunity? Feel free to drop me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-xl shadow-xl px-8 py-12 md:px-20 space-y-8"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 px-5 py-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 px-5 py-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 h-40 bg-gray-50 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-10 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition hover:scale-105"
            >
              SEND ➤
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
