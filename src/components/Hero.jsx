function Hero() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Fast Hosting for
          <span className="text-cyan-400"> Everyone</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          Launch your website in minutes with secure hosting, free SSL,
          lightning-fast servers, and affordable pricing.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>

          <button className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition">
            View Plans
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;