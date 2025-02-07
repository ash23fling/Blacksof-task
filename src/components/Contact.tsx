import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white px-8 py-12 transition duration-300 transform hover:scale-105">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="mt-4">
            <span className="block">Address:</span>
            110, Tish Road, Cheethur, Mumbai - 400071
          </p>
          <p className="mt-4">
            <span className="block">Phone:</span>
            +91 22 23020822
          </p>
          <p className="mt-4">
            <span className="block">Email:</span>
            info@supremegroup.co.in
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-2 rounded bg-white text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 rounded bg-white text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded bg-white text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 rounded bg-white text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-200 transition duration-300">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
