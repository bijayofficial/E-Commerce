const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Infosys",
  "Accenture",
  "Meta",
  "Apple",
  "IBM",
  "Wipro",
  "Cognizant",
  "Capgemini",
  "Oracle",
  "Salesforce",
];

const TrustedCompanies = () => {
  return (
    <section className="bg-slate-950 py-16 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-slate-300">
          Trusted By Students Working At
        </h2>

        {/* Marquee Wrapper */}
        <div className="relative mt-10 overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          {/* Scrolling Content */}
          <div className="flex w-max animate-scroll gap-10">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center whitespace-nowrap rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300 backdrop-blur-xl transition hover:scale-105 hover:text-white"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedCompanies;
