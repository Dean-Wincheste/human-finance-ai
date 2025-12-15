const stats = [
  { value: "10", unit: "min", label: "Average Processing Time" },
  { value: "35×", unit: "", label: "ROI Potential" },
  { value: "60%", unit: "", label: "Cost Reduction" },
  { value: "50k+", unit: "", label: "Leads/Month Capacity" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
                <span className="text-accent">{stat.unit}</span>
              </div>
              <p className="text-primary-foreground/70 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
