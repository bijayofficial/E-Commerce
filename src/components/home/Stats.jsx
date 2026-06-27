const Stats = () => {
  const stats = [
    {
      label: "Students Enrolled",
      value: "1200+",
      growth: "+18%",
      color: "text-blue-400",
    },
    {
      label: "Courses Available",
      value: "35+",
      growth: "+5 new",
      color: "text-indigo-400",
    },
    {
      label: "Placement Rate",
      value: "92%",
      growth: "+3%",
      color: "text-emerald-400",
    },
    {
      label: "Industry Projects",
      value: "150+",
      growth: "+25",
      color: "text-pink-400",
    },
  ];

  const chartData = [
    { month: "Jan", students: 200 },
    { month: "Feb", students: 320 },
    { month: "Mar", students: 450 },
    { month: "Apr", students: 610 },
    { month: "May", students: 780 },
    { month: "Jun", students: 1200 },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Glow background */}
      <div className="absolute left-10 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">Our Growth in Numbers 📊</h2>

          <p className="mt-4 text-slate-400">
            Real impact created through quality education and mentorship
          </p>
        </div>

        {/* KPI Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/40"
            >
              <h3 className={`text-3xl font-bold ${item.color}`}>
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-slate-300">{item.label}</p>

              <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                {item.growth}
              </span>
            </div>
          ))}
        </div>

        {/* Chart Section (Custom Bar Visualization) */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Student Growth Trend 🚀</h3>

          <p className="mt-2 text-sm text-slate-400">
            Monthly enrollment growth over time
          </p>

          {/* Simple Bar Chart */}
          <div className="mt-10 flex items-end gap-4 h-64">
            {chartData.map((item) => (
              <div
                key={item.month}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-xl bg-gradient-to-t from-blue-600 to-indigo-500 transition hover:opacity-80"
                  style={{
                    height: `${(item.students / 1200) * 100}%`,
                  }}
                />

                <span className="text-xs text-slate-400">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
