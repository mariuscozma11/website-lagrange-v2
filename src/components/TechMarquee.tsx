import { type LucideIcon } from "lucide-react";

type TechItem = {
  Icon: LucideIcon;
  label: string;
};

export default function TechMarquee({ items }: { items: TechItem[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/60 p-3 sm:p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/10">
      {/* mask for smooth edges */}
      <div className="pointer-events-none absolute inset-0 marquee-mask" />

      <div className="flex w-max items-center gap-3 whitespace-nowrap will-change-transform animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map(({ Icon, label }, idx) => (
          <div
            key={`${label}-${idx}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-200/60 bg-white/70 px-3 py-2 text-xs sm:text-sm text-gray-800 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
          >
            <Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}