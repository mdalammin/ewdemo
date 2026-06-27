const journeyStages = [
    {
        stage: "Stage 01",
        title: "Admission",
        copy: "Aptitude plus interview. Rolling intake in Spring, Summer, Fall.",
    },
    {
        stage: "Stage 02",
        title: "Foundation Year",
        copy: "Math, programming, discrete structures, and a research seminar.",
    },
    {
        stage: "Stage 03",
        title: "Core Engineering",
        copy: "OS, networks, databases, algorithms, and software engineering.",
    },
    {
        stage: "Stage 04",
        title: "Specialization",
        copy: "Pick AI, Cybersecurity, Data Science, Robotics, or IoT.",
    },
    {
        stage: "Stage 05",
        title: "Industry Training",
        copy: "Mandatory 12-week paid internship with a partner company.",
    },
    {
        stage: "Stage 06",
        title: "Capstone Launch",
        copy: "Ship a real project, demo it, and graduate with a portfolio.",
    },
];

const outcomeStats = [
    { value: "95%", label: "Employment within 6 months" },
    { value: "18%", label: "Pursue Graduate Studies" },
    { value: "42+", label: "Student-Led Startups" },
    // { value: "$65,000", label: "Avg. Global Salary (USD)" },
];

const destinations = [
    { label: "Software Engineering", value: 48 },
    { label: "Data / AI", value: 22 },
    { label: "Cybersecurity", value: 12 },
    { label: "Graduate Studies", value: 11 },
    { label: "Founders", value: 7 },
];

const salaries = [
    { label: "$25k", height: 36 },
    { label: "$45k", height: 50 },
    { label: "$65k", height: 76 },
    { label: "$85k", height: 88 },
    { label: "$110k", height: 84 },
    { label: "$140k+", height: 62 },
];

export default function JourneyOutcomeSplit() {
    return (
        <section className="bg-[#f8efe8] px-5 py-16 text-[#1f120f] sm:px-8 sm:py-20 lg:px-10 xl:px-12">
            <div className="mx-auto grid max-w-[1560px] gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                <div className="overflow-hidden rounded-[28px] border border-[#e5d6cc] bg-[#f3e2d8] p-5 shadow-[0_18px_60px_rgba(65,28,18,0.08)] sm:p-7 lg:p-8">
                    <SectionKicker number="10" label="Future Journey Roadmap" />
                    <h2 className="mb-8 max-w-[560px] text-[clamp(34px,4.5vw,56px)] font-medium leading-[1.02]">
                        Not a curriculum PDF. <span className="font-normal text-[#bc3c35]">A journey</span>
                    </h2>

                    <div className="journey-roadmap relative grid gap-4">
                        {journeyStages.map((item, index) => (
                            <article
                                key={item.stage}
                                className={`journey-card relative rounded-2xl border border-[#e0d4cc] bg-white p-5 shadow-[0_16px_36px_rgba(54,29,20,0.08)] ${index % 2 === 1 ? "journey-card-right" : "journey-card-left"
                                    }`}
                            >
                                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.32em] text-[#bd3b33]">
                                    {item.stage}
                                </span>
                                <h3 className="mb-2 text-xl font-extrabold leading-tight">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-[#4f3c35]">{item.copy}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="rounded-[28px] border border-[#e5d6cc] bg-[#faf2ed] p-5 shadow-[0_18px_60px_rgba(65,28,18,0.06)] sm:p-7 lg:p-8">
                    <SectionKicker number="11" label="Career Outcome Dashboard" />
                    <h2 className="mb-8 max-w-[700px] text-[clamp(38px,5vw,64px)] font-medium leading-[1.05]">
                        The numbers parents
                        <span className="font-normal text-[#bc3c35]"> want to see.</span>
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {outcomeStats.map((stat) => (
                            <div key={stat.label} className="rounded-2xl border border-[#dfd2c9] bg-white p-5">
                                <strong className="block text-[clamp(36px,4vw,52px)] font-bold leading-none text-[#b9342e]">
                                    {stat.value}
                                </strong>
                                <span className="mt-3 block text-sm leading-snug text-[#4f3c35]">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 grid gap-5 lg:grid-cols-[1.28fr_0.9fr]">
                        <div className="rounded-2xl border border-[#dfd2c9] bg-white p-5 sm:p-7">
                            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                                <h3 className="text-xl font-extrabold">Where the Class of 2025 went</h3>
                                <span className="text-xs text-[#6b5850]">First-destination : n=312</span>
                            </div>

                            <div className="space-y-5">
                                {destinations.map((item) => (
                                    <div key={item.label}>
                                        <div className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold">
                                            <span>{item.label}</span>
                                            <span>{item.value}%</span>
                                        </div>
                                        <div className="h-2.5 overflow-hidden rounded-full bg-[#f1ded5]">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-[#8d1716] to-[#ef5738]"
                                                style={{ width: `${item.value}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-[#24100c] p-5 text-white sm:p-7">
                            <h3 className="mb-8 text-xl font-extrabold">Salary range (first job)</h3>
                            <div className="flex h-[170px] items-end justify-between gap-3">
                                {salaries.map((salary) => (
                                    <div key={salary.label} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                                        <div className="flex h-[112px] w-full items-end justify-center">
                                            <div
                                                className="w-full max-w-[66px] rounded-t-md bg-gradient-to-t from-[#ef5738] to-[#982821]"
                                                style={{ height: `${salary.height}px` }}
                                            />
                                        </div>
                                        <span className="text-[11px] text-[#d8c7bf]">{salary.label}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-sm leading-relaxed text-[#f0dfd8]">
                                Global market. Roles weighted across BD, US, EU, SG.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .journey-roadmap::before {
                    content: "";
                    position: absolute;
                    inset: 8px 50% 8px auto;
                    width: 2px;
                    transform: translateX(50%);
                    background: linear-gradient(to bottom, transparent, #bd3b33 10%, #bd3b33 90%, transparent);
                    opacity: 0.35;
                }

                .journey-card {
                    width: min(86%, 430px);
                }

                .journey-card::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    width: 12px;
                    height: 12px;
                    border-radius: 999px;
                    background: #bd3b33;
                    box-shadow: 0 0 0 7px rgba(189, 59, 51, 0.12);
                }

                .journey-card-left {
                    justify-self: start;
                }

                .journey-card-left::after {
                    right: calc(-16.3% - 6px);
                }

                .journey-card-right {
                    justify-self: end;
                }

                .journey-card-right::after {
                    left: calc(-16.3% - 6px);
                }

                @media (max-width: 767px) {
                    .journey-roadmap::before {
                        left: 10px;
                        right: auto;
                        transform: none;
                    }

                    .journey-card {
                        width: calc(100% - 30px);
                        justify-self: end;
                    }

                    .journey-card::after,
                    .journey-card-left::after,
                    .journey-card-right::after {
                        left: -26px;
                        right: auto;
                    }
                }
            `}</style>
        </section>
    );
}

function SectionKicker({ number, label }) {
    return (
        <p className="mb-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#bd3b33]">
            <span className="text-[#2c1610]">{number}</span>
            <span className="h-px w-8 bg-[#bd3b33]" />
            {label}
        </p>
    );
}
