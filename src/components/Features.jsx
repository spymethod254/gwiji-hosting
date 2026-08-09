const features = [
      {
          icon: "⚡",
              title: "Fast Performance",
                  description:
                        "Lightning-fast servers designed to keep your websites running smoothly.",
                          },
                            {
                                icon: "🔒",
                                    title: "Free SSL",
                                        description:
                                              "Keep your visitors protected with SSL security included with every plan.",
                                                },
                                                  {
                                                      icon: "🌍",
                                                          title: "Global Infrastructure",
                                                              description:
                                                                    "Reliable infrastructure built to deliver your website to visitors quickly.",
                                                                      },
                                                                        {
                                                                            icon: "💾",
                                                                                title: "Reliable Storage",
                                                                                    description:
                                                                                          "Secure SSD storage gives your websites the space they need to grow.",
                                                                                            },
                                                                                              {
                                                                                                  icon: "🛡️",
                                                                                                      title: "Secure Hosting",
                                                                                                          description:
                                                                                                                "Multiple layers of protection help keep your websites and data secure.",
                                                                                                                  },
                                                                                                                    {
                                                                                                                        icon: "🎧",
                                                                                                                            title: "Customer Support",
                                                                                                                                description:
                                                                                                                                      "Get help when you need it as you build and grow your online presence.",
                                                                                                                                        },
                                                                                                                                        ];

                                                                                                                                        function Features() {
                                                                                                                                          return (
                                                                                                                                              <section id="features" className="bg-slate-900 text-white py-20">
                                                                                                                                                    <div className="max-w-7xl mx-auto px-6">

                                                                                                                                                            <div className="text-center">
                                                                                                                                                                      <h2 className="text-3xl md:text-4xl font-bold">
                                                                                                                                                                                  Everything You Need
                                                                                                                                                                                            </h2>

                                                                                                                                                                                                      <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                                                                                                                                                                                                                  Powerful features designed to make launching and managing your
                                                                                                                                                                                                                              website simple.
                                                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                                                                                                                                                                                                                                  {features.map((feature) => (
                                                                                                                                                                                                                                                                              <div
                                                                                                                                                                                                                                                                                            key={feature.title}
                                                                                                                                                                                                                                                                                                          className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400 transition"
                                                                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                                                                                    <div className="text-4xl">
                                                                                                                                                                                                                                                                                                                                                    {feature.icon}
                                                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                                                                <h3 className="mt-5 text-xl font-bold">
                                                                                                                                                                                                                                                                                                                                                                                                {feature.title}
                                                                                                                                                                                                                                                                                                                                                                                                              </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                            <p className="mt-3 text-slate-400 leading-relaxed">
                                                                                                                                                                                                                                                                                                                                                                                                                                            {feature.description}
                                                                                                                                                                                                                                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    export default Features;