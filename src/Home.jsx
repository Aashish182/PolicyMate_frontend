
import React from "react";
import Navbar from "./components/Navbar"; 

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-rose-100 to-amber-50 font-sans text-[#3a1f1f]">
      {/* Hero Section */}<Navbar />
      <header className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-rose-500 to-amber-600 shadow-lg">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            🤝 Welcome to PolicyMate
          </h1>
          <p className="text-lg text-rose-100">
            We explain your insurance like a fun story. No confusion. No big words. Just friendly help.
          </p>
        </div>
        <img
            src="https://img.freepik.com/free-vector/children-insurance-concept-illustration_114360-7345.jpg"
            alt="Insurance Help"
            className="w-full md:w-[380px] lg:w-[460px] xl:w-[500px] mt-10 md:mt-0 md:ml-10 rounded-xl shadow-xl"
        />

      </header>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-700">
          💼 What Can We Help With?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white border border-rose-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-rose-800">📖 Read My Policy</h3>
            <p className="text-base mb-4">
              Upload your policy PDF. We’ll turn it into a small story you can understand in minutes!
            </p>
            <a
              href="/simplify"
              className="inline-block bg-rose-100 text-rose-800 font-medium py-2 px-4 rounded hover:bg-rose-200"
            >
              Read Now →
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-yellow-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-yellow-800">✍️ Rejection Response Tool</h3>
            <p className="text-base mb-4">
              Was your claim rejected? We’ll help you write a polite and clear letter to respond.
            </p>
            <a
              href="/rebuttal"
              className="inline-block bg-yellow-100 text-yellow-800 font-medium py-2 px-4 rounded hover:bg-yellow-200"
            >
              Write Reply →
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-amber-800">🔎 Claim Checker</h3>
            <p className="text-base mb-4">
              Not sure if what the agent said is true? We compare it to your policy and tell you.
            </p>
            <a
              href="/verify"
              className="inline-block bg-amber-100 text-amber-800 font-medium py-2 px-4 rounded hover:bg-amber-200"
            >
              Check Now →
            </a>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="bg-gradient-to-l from-rose-100 to-yellow-50 py-12 text-center">
        <h3 className="text-2xl font-semibold text-brown-800 mb-3">👦 Friendly For All Ages</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 px-4">
          Whether you're 10 or 70, PolicyMate explains things in simple, soft words. No hard stuff, no tricks — just help.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#3a1f1f] text-[#fce8e8] text-sm">
        <p>&copy; 2025 PolicyMate — Soft & Simple Insurance Help for Everyone 💗</p>
      </footer>
    </div>
  );
};

export default Home;
