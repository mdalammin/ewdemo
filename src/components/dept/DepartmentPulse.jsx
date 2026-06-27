import {
    BookOpen,
    BriefcaseBusiness,
    CalendarDays,
    Handshake,
    Medal,
    Presentation,
} from "lucide-react";

const pulseItems = [
    {
        type: "Publication",
        title: '"Graph-Aware LLMs for Code Repair" accepted at NeurIPS \'26',
        time: "2h ago",
        Icon: BookOpen,
    },
    {
        type: "Grant",
        title: "$1.2M ICT Division grant for national cyber range",
        time: "Yesterday",
        Icon: Medal,
    },
    {
        type: "Event",
        title: "Open Day & lab walkthrough - Sat 11 Jul",
        time: "3d",
        Icon: CalendarDays,
    },
    {
        type: "Conference",
        title: "Dr. Anika keynotes IEEE SmartCities, Lisbon",
        time: "5d",
        Icon: Presentation,
    },
    {
        type: "Publication",
        title: 'New textbook: "Edge Intelligence in Practice"',
        time: "1w",
        Icon: BookOpen,
    },
    {
        type: "Partnership",
        title: "Joint AI lab launched with Samsung Research Bangladesh",
        time: "2w",
        Icon: Handshake,
    },
];

export default function DepartmentPulse() {
    return (
        <section className="bg-[#1d0d0a] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1180px]">
                <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.34em] text-[#ff5536]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5536]" />
                    Department Pulse - Live
                </p>

                <h2 className="max-w-3xl text-[clamp(42px,6vw,72px)] font-medium leading-[1.02] tracking-[-0.02em]">
                    A department that
                    <span className="block font-normal italic text-white/90">never stops shipping.</span>
                </h2>

                <div className="mt-14 border-y border-white/10">
                    {pulseItems.map(({ type, title, time, Icon }, index) => (
                        <article
                            key={`${type}-${title}`}
                            className={`group grid gap-4 border-white/10 px-3 py-5 transition-all duration-300 hover:rounded-lg hover:border-[#4c2b25] hover:bg-[#2b1a16] sm:grid-cols-[135px_1fr_auto] sm:items-center sm:px-4 ${index === 0 ? "" : "border-t"
                                }`}
                        >
                            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff5536] transition-colors duration-300 group-hover:text-[#ff7a5d]">
                                <Icon size={15} strokeWidth={1.9} />
                                <span>{type}</span>
                            </div>

                            <h3 className="text-base font-medium leading-snug text-white transition-colors duration-300 group-hover:text-[#ff5536] sm:text-[17px]">
                                {title}
                            </h3>

                            <time className="text-sm font-medium text-white/55 transition-colors duration-300 group-hover:text-white/80">
                                {time}
                            </time>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
