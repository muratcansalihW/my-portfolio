"use client";

export default function Experience() {
  const companies = [
    { name: "Pfizer", logo: "/logos/pfizer.svg" },
    { name: "AstraZeneca", logo: "/logos/astrazeneca.svg" },
    { name: "Peugeot", logo: "/logos/peugeot.svg" },
    { name: "Vodafone", logo: "/logos/vodafone.svg" },
    { name: "Danone", logo: "/logos/danone.svg" },
    { name: "Viatris", logo: "/logos/viatris.svg" }, // dosya adın küçük harfse böyle bırak
    { name: "Axa Sigorta", logo: "/logos/axa.svg" },
    { name: "Bezmialem", logo: "/logos/bezmialem.svg" },
    { name: "J&J", logo: "/logos/j&j.svg" },
  ];

  // Sonsuz kayma için bir kere kopyalıyoruz
  const marqueeItems = [...companies, ...companies];

  return (
    <section id="experience" className="py-20 bg-gray-100 text-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>

        <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-10">
          Over the past <span className="font-semibold">4+ years</span>, I’ve
          contributed to more than{" "}
          <span className="font-semibold">400+ web projects</span> for global
          brands and enterprise companies.
        </p>

        {/* Kayar logo şeridi */}
        <div className="relative overflow-hidden py-6">
          <div className="flex gap-12 animate-logo-marquee w-max">
            {marqueeItems.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex items-center justify-center h-16"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Logos are used only to represent companies I have worked with. All
          trademarks belong to their respective owners.
        </p>
      </div>
    </section>
  );
}
