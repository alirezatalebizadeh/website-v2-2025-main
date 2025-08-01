import { Description, StatisticCard, HeroSection } from "@/modules/home";
import statistics from "@/lib/dummyData/heroStatisticsData.json";

export default function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto px-4 pt-20 pb-[20rem]">
        {/* Intro Header */}
        <HeroSection />

        {/* Statistics Section (dynamically mapped from JSON data) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {statistics?.map((stat, index) => (
            <StatisticCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      {/* Mission / Feature Overview */}
      <Description />
    </div>
  );
}
