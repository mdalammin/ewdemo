import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bba from "@/assets/dept/bba.jpg";
import civil from "@/assets/dept/civil.jpg";
import cse from "@/assets/dept/cse.jpg";
import eco from "@/assets/dept/eco.jpg";
import eee from "@/assets/dept/eee.jpg";
import english from "@/assets/dept/english.jpg";

const departments = [
    {
        img: bba,
        tag: "Business Administration",
        title: "BBA",
        story: "Shaping tomorrow's business leaders.",
    },
    {
        img: civil,
        tag: "Civil Engineering",
        title: "Civil",
        story: "Building the infrastructure of the future.",
    },
    {
        img: cse,
        tag: "Computer Science",
        title: "CSE",
        story: "ACM-ICPC World Finalists. Google Hash Code Top 30.",
    },
    {
        img: eco,
        tag: "Economics",
        title: "Economics",
        story: "Understanding the forces that move the world.",
    },
    {
        img: eee,
        tag: "Electrical Engineering",
        title: "EEE",
        story: "Powering innovation through research and design.",
    },
    {
        img: english,
        tag: "English",
        title: "English",
        story: "Crafting voices that resonate across cultures.",
    },

    {
        img: bba,
        tag: "Business Administration",
        title: "BBA",
        story: "Shaping tomorrow's business leaders.",
    },
    {
        img: civil,
        tag: "Civil Engineering",
        title: "Civil",
        story: "Building the infrastructure of the future.",
    },
    {
        img: cse,
        tag: "Computer Science",
        title: "CSE",
        story: "ACM-ICPC World Finalists. Google Hash Code Top 30.",
    },
    {
        img: eco,
        tag: "Economics",
        title: "Economics",
        story: "Understanding the forces that move the world.",
    },
    {
        img: eee,
        tag: "Electrical Engineering",
        title: "EEE",
        story: "Powering innovation through research and design.",
    },
    {
        img: english,
        tag: "English",
        title: "English",
        story: "Crafting voices that resonate across cultures.",
    },

    {
        img: bba,
        tag: "Business Administration",
        title: "BBA",
        story: "Shaping tomorrow's business leaders.",
    },
    {
        img: civil,
        tag: "Civil Engineering",
        title: "Civil",
        story: "Building the infrastructure of the future.",
    },
    {
        img: cse,
        tag: "Computer Science",
        title: "CSE",
        story: "ACM-ICPC World Finalists. Google Hash Code Top 30.",
    },
    {
        img: eco,
        tag: "Economics",
        title: "Economics",
        story: "Understanding the forces that move the world.",
    },
    {
        img: eee,
        tag: "Electrical Engineering",
        title: "EEE",
        story: "Powering innovation through research and design.",
    },
    {
        img: english,
        tag: "English",
        title: "English",
        story: "Crafting voices that resonate across cultures.",
    },
];

export default function DeptShowcase() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.ticker.lagSmoothing(0);

        const track = trackRef.current;
        const trigger = triggerRef.current;
        if (!track || !trigger) return;


        const getScrollAmount = () =>
            Math.max(0, track.scrollWidth - trigger.clientWidth);

        const ctx = gsap.context(() => {
            gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger,
                    start: "top 10%",
                    end: () => `+=${getScrollAmount()}`,
                    scrub: 1.5,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    fastScrollEnd: true,      // blink fix
                    preventOverlaps: true,    // blink fix
                },
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        const refresh = () => ScrollTrigger.refresh();
        const images = Array.from(track.querySelectorAll("img"));

        images.forEach((image) => {
            if (!image.complete) {
                image.addEventListener("load", refresh, { once: true });
                image.addEventListener("error", refresh, { once: true });
            }
        });

        const resizeObserver = new ResizeObserver(refresh);
        resizeObserver.observe(trigger);
        resizeObserver.observe(track);

        return () => {
            images.forEach((image) => {
                image.removeEventListener("load", refresh);
                image.removeEventListener("error", refresh);
            });
            resizeObserver.disconnect();
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#120d0a]">
            <div ref={triggerRef} className="relative py-16 overflow-hidden">
                {/* Header */}
                <div className="px-10 pt-14 pb-8">
                    <p className="text-xs tracking-[0.25em] text-[#c0411a] uppercase mb-3 flex items-center gap-3">
                        <span className="text-[#555]">06</span>
                        <span className="h-px w-10 bg-[#555]" />
                        Student Achievement Showcase
                    </p>
                    <h2 className="text-5xl font-extrabold text-white leading-tight">
                        They built things.
                    </h2>
                    <h2 className="text-5xl font-extrabold italic text-[#c0411a] leading-tight">
                        The world noticed.
                    </h2>
                </div>

                {/* Horizontal scrolling track */}
                <div
                    ref={trackRef}
                    className="flex gap-5 px-10 pb-14"
                    style={{
                        width: "max-content",
                        willChange: "transform",
                        // ei duto GPU acceleration force kore
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {departments.map((dept, i) => (
                        <Card key={i} dept={dept} />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="px-10 pt-6 flex justify-center">
                    <button className="border border-[#c0411a] text-[#c0411a] text-sm tracking-widest uppercase px-6 py-3 hover:bg-[#c0411a] hover:text-white transition-colors duration-300 cursor-pointer">
                        Explore All Departments →
                    </button>
                </div>
            </div>
        </section>
    );
}

function Card({ dept }) {
    // console.log("dept", dept)
    return (
        <div className="relative w-[300px] h-[420px] rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer">
            <img
                src={dept.img}
                alt={dept.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#c0411a] font-semibold mb-2">
                    {dept.tag}
                </p>
                <h3 className="text-white text-2xl font-bold leading-snug mb-1">
                    {dept.title}
                </h3>
                <p className="text-gray-400 text-sm leading-snug mb-4">{dept.story}</p>
                <button className="flex items-center gap-1.5 text-white text-sm font-medium group/btn">
                    <span>Read story</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                    </span>
                </button>
            </div>
        </div>
    );
}