import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
      {/* Intro Label */}
      <div className="text-gray-500 text-[0.5rem] sm:text-xs border-2 w-fit p-2 border-primary rounded-full">
        گام‌های کوچک ولی مستمر برای تحقق عدالت آموزشی
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
        شروع کن، یاد بگیر، پیشرفت کن
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        تجربه‌ای <span className="text-primary font-semibold">رایگان</span> از
        یادگیری تخصصی با همراهی{" "}
        <span className="text-primary font-semibold">اساتید حرفه‌ای</span>
      </p>

      {/* Call To Action */}
      <Button className="flex items-center justify-center gap-3 w-11/12 sm:w-7/12 md:w-1/2 lg:w-1/3 bg-primary hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <span>شروع رایگان</span>
        {/* Left Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </Button>
    </div>
  );
}
