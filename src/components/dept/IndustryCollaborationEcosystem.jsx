import { useLayoutEffect, useRef } from "react";
import { BriefcaseBusiness, Rocket, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const companies = [
    { name: "Samsung", x: 24, y: 22 },
    { name: "Intel", x: 68, y: 22 },
    { name: "NVIDIA", x: 42, y: 38, muted: true },
    { name: "Adobe", x: 66, y: 48, muted: true },
    { name: "Huawei", x: 20, y: 48, muted: true },
    { name: "Meta", x: 8, y: 62 },
    { name: "Google", x: 84, y: 62 },
    { name: "Oracle", x: 71, y: 70, muted: true },
    { name: "IBM", x: 26, y: 78, muted: true },
    { name: "Cisco", x: 51, y: 88, muted: true },
    { name: "Amazon", x: 24, y: 104 },
    { name: "Microsoft", x: 68, y: 104 },
];

const cards = [
    {
        Icon: BriefcaseBusiness,
        title: "Internship Programs",
        copy: "320+ paid summer placements across 14 countries every year.",
    },
    {
        Icon: Sparkles,
        title: "Joint Research",
        copy: "Active sponsored research with Microsoft Research, Samsung AI, and Huawei Edge Labs.",
    },
    {
        Icon: Rocket,
        title: "Industry Capstones",
        copy: "Final-year teams ship production code to real partner products.",
    },
];

const marquee = ["Google", "Microsoft", "Amazon", "Meta", "Samsung", "Intel", "Oracle", "Cisco", "IBM", "Huawei"];

export default function IndustryCollaborationEcosystem() {
    const sectionRef = useRef(null);
    const panelRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const panel = panelRef.current;
        const content = contentRef.current;

        if (!section || !panel || !content || typeof window === "undefined") return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        const ctx = gsap.context(() => {
            gsap.set(panel, { clipPath: "circle(8% at 50% 100%)" });
            gsap.set(content, { opacity: 0, y: 40 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 50%",
                    end: "top top",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            })
                .to(panel, {
                    clipPath: "circle(150% at 50% 100%)",
                    ease: "none",
                    duration: 1,
                })
                .to(content, {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    duration: 0.4,
                }, 0.6);
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen bg-[#f8efe8]">
            <div
                ref={panelRef}
                className="relative flex h-full items-center overflow-hidden bg-[#1d0d0a] px-5 py-20 text-white sm:px-8 lg:px-12"
            >
                {/* Grid pattern */}
                {/* <div className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                /> */}

                {/* Radial glow — center */}
                <div className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(192,65,26,0.18) 0%, transparent 70%)'
                    }}
                />

                {/* Corner accent — top right */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(192,65,26,0.12) 0%, transparent 65%)'
                    }}
                />

                {/* Bottom left accent */}
                <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,180,130,0.07) 0%, transparent 65%)'
                    }}
                />

                <div ref={contentRef} className="relative z-10 mx-auto w-full max-w-[1180px]">
                    <div className="mb-12">
                        <p className="mb-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#c0411a]">
                            <span>08</span>
                            <span className="h-px w-8 bg-[#c0411a]" />
                            Industry Collaboration Ecosystem
                        </p>
                        <h2 className="max-w-[620px] text-[clamp(38px,5vw,34px)] font-medium leading-[1.02]">
                            The companies
                            <span> you want to work at</span>
                            <span className="block font-normal italic text-[#ffd8cc]">already work with us.</span>
                        </h2>
                    </div>

                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
                        <div className="relative mx-auto aspect-square w-full max-w-[430px]">
                            <div className="absolute inset-[3%] rounded-full border border-white/13" />
                            <div className="absolute inset-[15%] rounded-full border border-white/14" />
                            <div className="absolute inset-[27%] rounded-full border border-white/16" />
                            <div className="absolute left-1/2 top-1/2 z-10 flex h-[94px] w-[94px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2c1610] text-center text-sm font-extrabold shadow-[0_20px_45px_rgba(44,22,16,0.34)]">
                                EWU
                                <br />
                                CSE
                            </div>
                            {companies.map((company) => (
                                <span
                                    key={company.name}
                                    className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-[11px] font-extrabold shadow-sm ${company.muted
                                        ? "bg-white/24 text-white ring-1 ring-white/15"
                                        : "bg-white text-[#1f120f]"
                                        }`}
                                    style={{ left: `${company.x}%`, top: `${company.y}%` }}
                                >
                                    {company.name}
                                </span>
                            ))}
                        </div>

                        <div className="grid gap-4">
                            {cards.map(({ Icon, title, copy }) => (
                                <article
                                    key={title}
                                    className="rounded-2xl border border-[#f8efe8]/18 bg-[#2c1610]/16 p-5 shadow-[0_20px_50px_rgba(44,22,16,0.12)] backdrop-blur-sm transition-colors duration-300 hover:border-[#ffd8cc]/70 hover:bg-[#2c1610]/24 sm:p-6"
                                >
                                    <div className="mb-2 flex items-center gap-3">
                                        <Icon size={18} className="text-[#ffd8cc]" />
                                        <h3 className="text-base font-extrabold">{title}</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-white/78">{copy}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-24 overflow-hidden">
                        <div className="industry-marquee flex w-max gap-12 text-2xl font-medium text-white/45">
                            {[...marquee, ...marquee].map((item, index) => (
                                <span key={`${item}-${index}`}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .industry-pattern {
                    background-image: linear-gradient(150deg, rgba(255,255,255,0.08) 10%, transparent 10%, transparent 50%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.08) 60%, transparent 60%, transparent 100%);
                    background-size: 42px 42px;
                }
                .industry-marquee {
                    animation: industry-marquee 22s linear infinite;
                }
                @keyframes industry-marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .industry-marquee { animation: none; }
                }
            `}</style>
        </section>
    );
}