import { useMemo, useState } from "react";

import cse from "@/assets/dept/cse.jpg";
import eco from "@/assets/dept/eco.jpg";
import eee from "@/assets/dept/eee.jpg";
import english from "@/assets/dept/english.jpg";
import businessClub from "@/assets/club/business.jpg";
import computerClub from "@/assets/club/computer.jpg";
import debateClub from "@/assets/club/debate.jpg";
import roboticsClub from "@/assets/club/robotics.jpg";

const filters = ["All", "Clubs", "Sports", "Programming Contest", "Cultural", "Study Tours"];

const stories = [
    {
        title: "Contest prep nights",
        category: "Programming Contest",
        image: computerClub,
        layout: "tall-left",
    },
    {
        title: "Campus festival mornings",
        category: "Cultural",
        image: eco,
        layout: "wide",
    },
    {
        title: "Robotics lab showcase",
        category: "Clubs",
        image: roboticsClub,
        layout: "wide",
    },
    {
        title: "Study tour workshops",
        category: "Study Tours",
        image: eee,
        layout: "wide",
    },
    {
        title: "Convocation throw",
        category: "Cultural",
        image: english,
        layout: "wide",
    },
    {
        title: "Trophy day",
        category: "Programming Contest",
        image: cse,
        layout: "tall-right",
    },
    {
        title: "Business club meetups",
        category: "Clubs",
        image: businessClub,
        layout: "wide",
    },
    {
        title: "Debate practice",
        category: "Sports",
        image: debateClub,
        layout: "wide",
    },
];

export default function StudentLifeStoryboard() {
    const [activeFilter, setActiveFilter] = useState("All");

    const visibleStories = useMemo(() => {
        if (activeFilter === "All") return stories.slice(0, 6);

        const filteredStories = stories.filter((story) => story.category === activeFilter);
        return filteredStories.length >= 3 ? filteredStories : stories.filter((story) => story.category === activeFilter || story.category === "Clubs");
    }, [activeFilter]);

    return (
        <section className="bg-[#f8efe8] px-5 py-16 text-[#1f120f] sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="mb-10">
                    <p className="mb-4 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b83c34]">
                        <span className="text-[#2c1610]">09</span>
                        <span className="h-px w-8 bg-[#c84035]" />
                        Student Life Storyboard
                    </p>
                    <h2 className="max-w-3xl text-[clamp(36px,6vw,64px)] font-medium leading-[0.98]">
                        What 4 years here
                        <span className="block font-normal text-[#c33f37]">actually looks like.</span>
                    </h2>
                </div>

                <div className="mb-10 flex flex-wrap gap-2.5 sm:gap-3">
                    {filters.map((filter) => {
                        const isActive = filter === activeFilter;

                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-5 ${isActive
                                    ? "border-[#bd3b33] bg-[#bd3b33] text-white"
                                    : "border-[#dfd2c9] bg-white text-[#1f120f] hover:border-[#bd3b33] hover:text-[#bd3b33]"
                                    }`}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>

                <div className="storyboard-grid grid gap-4 sm:gap-5">
                    {visibleStories.map((story, index) => (
                        <article
                            key={`${story.title}-${activeFilter}-${index}`}
                            className={`storyboard-card storyboard-${story.layout} group relative min-h-[220px] overflow-hidden rounded-2xl bg-[#eadbd1] ${story.layout === "wide" ? "aspect-[1.42]" : ""
                                }`}
                        >
                            <img
                                src={story.image}
                                alt={story.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                            <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#1f120f] shadow-sm">
                                {story.category}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
                .storyboard-grid {
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    grid-auto-rows: minmax(210px, auto);
                }

                .storyboard-tall-left {
                    grid-column: 1;
                    grid-row: span 2;
                    min-height: 455px;
                }

                .storyboard-tall-right {
                    grid-column: 4;
                    grid-row: 1 / span 2;
                    min-height: 455px;
                }

                @media (min-width: 768px) {
                    .storyboard-wide {
                        min-height: 210px;
                    }
                }

                @media (max-width: 1023px) {
                    .storyboard-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .storyboard-tall-left,
                    .storyboard-tall-right {
                        grid-column: auto;
                        grid-row: span 2;
                    }
                }

                @media (max-width: 640px) {
                    .storyboard-grid {
                        grid-template-columns: 1fr;
                    }

                    .storyboard-card,
                    .storyboard-tall-left,
                    .storyboard-tall-right {
                        grid-column: auto;
                        grid-row: auto;
                        min-height: 260px;
                    }
                }
            `}</style>
        </section>
    );
}
