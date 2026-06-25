import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Bell, ArrowRight, Search } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute('/departmentewu')({
    component: RouteComponent,
})

const menuItems = [
    'Faculty Members',
    'Undergraduate Programs',
    'Graduate Programs',
    'Tuition Fees',
    'Publications',
    'Research Areas',
    'Lab Facilities',
    'Administrative Officials',
    'News',
    'Notices',
    'Events',
    'Achievements',
]


const NOTICES = [
    {
        date: "2026-06-25",
        tag: "Exam",
        title: "Makeup Midterm Examination Schedule - Spring 2026 Semester",
    },
    {
        date: "2026-06-22",
        tag: "Research",
        title: "Call for Proposals: Undergraduate Research Grant 2026",
    },
    {
        date: "2026-06-18",
        tag: "Event",
        title: "IEEE Student Branch Robotics Workshop Registration Open",
    },
    {
        date: "2026-06-14",
        tag: "Academic",
        title: "Lab Reservation & Equipment Request Guidelines Updated",
    },
    {
        date: "2026-06-10",
        tag: "Notice",
        title: "Revised Thesis Submission Deadlines for MSc Students",
    },
];

const COURSESDropdown = {
    "Computer Science & Engineering": ["CSE101", "CSE201", "CSE301", "CSE401"],
    "Business Administration": ["BBA101", "BBA201", "MBA301"],
    English: ["ENG101", "ENG201", "ENG301"],
    Law: ["LAW101", "LAW201"],
    Pharmacy: ["PHR101", "PHR201"],
    Architecture: ["ARC101", "ARC201"],
};

const DEPARTMENTS = Object.keys(COURSESDropdown);

// Fake events - replace with your real data
const EVENTS = [
    { date: "2025-07-10", tag: "Event", title: "Annual Tech Fest 2025" },
    { date: "2025-07-18", tag: "Seminar", title: "Career Development Workshop" },
    { date: "2025-08-02", tag: "Cultural", title: "Independence Day Celebration" },
];

const constellationNodes = [
    {
        id: 'ai',
        label: 'Artificial Intelligence',
        tag: 'ARTIFICIAL INTELLIGENCE',
        title: 'Inside the artificial intelligence cluster',
        desc: 'Exploring neural networks, deep learning, computer vision, and natural language processing to build next-generation intelligent agents.',
        projects: 45,
        publications: 120,
        labs: 3,
        x: 230,
        y: 230,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
            </svg>
        )
    },
    {
        id: 'cyber',
        label: 'Cyber Security',
        tag: 'CYBER SECURITY',
        title: 'Inside the cyber security cluster',
        desc: 'Safeguarding systems, networks, and programs from digital attacks. Focus on threat detection, encryption, and secure routing protocols.',
        projects: 18,
        publications: 54,
        labs: 1,
        x: 110,
        y: 130,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    },
    {
        id: 'datasci',
        label: 'Data Science',
        tag: 'DATA SCIENCE',
        title: 'Inside the data science cluster',
        desc: 'Funded projects across industry and government, peer-reviewed publications, and dedicated lab space – touch a node to explore.',
        projects: 31,
        publications: 89,
        labs: 2,
        x: 350,
        y: 110,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
        )
    },
    {
        id: 'robotics',
        label: 'Robotics',
        tag: 'ROBOTICS',
        title: 'Inside the robotics cluster',
        desc: 'Designing autonomous systems, human-robot interaction interfaces, and robotic control systems for industrial and domestic utility.',
        projects: 12,
        publications: 40,
        labs: 1,
        x: 130,
        y: 350,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M12 2v9" />
                <path d="M8 5h8" />
                <circle cx="12" cy="5" r="1" />
            </svg>
        )
    },
    {
        id: 'iot',
        label: 'IoT & Edge',
        tag: 'IOT & EDGE',
        title: 'Inside the IoT & edge cluster',
        desc: 'Connecting the physical world to digital networks via low-latency edge computing, smart sensors, and distributed IoT architectures.',
        projects: 24,
        publications: 76,
        labs: 2,
        x: 330,
        y: 330,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.58 16.14a6 6 0 0 1 6.84 0" />
                <circle cx="12" cy="20" r="1.5" />
            </svg>
        )
    }
];

function VideoAnimation() {
    const scrollTrackRef = useRef(null);
    const videoWrapRef = useRef(null);
    const videoElRef = useRef(null);

    const [showPlay, setShowPlay] = useState(true);

    const handlePlay = (e) => {
        e.stopPropagation();
        const video = videoElRef.current;
        if (!video) return;
        video.muted = false;
        video.play().catch(() => { }); // Ensure it plays even if already playing
        setShowPlay(false);
    };

    const handleVideoClick = () => {
        const video = videoElRef.current;
        if (!video) return;
        video.muted = true;
        setShowPlay(true);
    };

    const handleVideoEnd = () => {
        const video = videoElRef.current;
        if (!video) return;
        video.muted = true;
        setShowPlay(true);
        video.play().catch(() => { }); // Restart muted video for manual looping
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                videoWrapRef.current,
                { scale: 0.55, borderRadius: "24px" },
                {
                    scale: 1,
                    borderRadius: "0px",
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollTrackRef.current,
                        pin: true,
                        start: "top 10%",
                        end: "+=100%",
                        scrub: 0.8,
                    },
                },
            );

            // Refresh ScrollTrigger to ensure correct positions
            ScrollTrigger.refresh();
        });

        // Only set up the IntersectionObserver after the window has fully loaded
        // so we don't compete with critical page resources
        let observer;
        const setupObserver = () => {
            observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && videoElRef.current) {
                        videoElRef.current.play().catch(() => { });
                        observer.disconnect();
                    }
                },
                { rootMargin: "200px", threshold: 0.1 }
            );
            if (videoWrapRef.current) {
                observer.observe(videoWrapRef.current);
            }
        };

        if (document.readyState === "complete") {
            setupObserver();
        } else {
            window.addEventListener("load", setupObserver, { once: true });
        }

        return () => {
            ctx.revert();
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <div ref={scrollTrackRef} className="hidden md:block relative h-[100vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center bg-white overflow-hidden">
                <div
                    ref={videoWrapRef}
                    onClick={handleVideoClick}
                    className="relative w-full h-full bg-transparent overflow-hidden cursor-pointer"
                    style={{ willChange: "transform, border-radius" }}
                >
                    {/* Video with audio — University campus clip with clear audio */}
                    {/* <video
                        ref={videoElRef}
                        muted
                        onEnded={handleVideoEnd}
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                    >
                        <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-on-a-university-campus-4503-large.mp4"
                            type="video/mp4"
                        />
                    </video> */}

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/EZGyk4GZ4eU?autoplay=1&mute=1&loop=1&playlist=EZGyk4GZ4eU"
                        title="University Life"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    {/* Overlay — dims video when play button is showing */}
                    <div
                        className="absolute inset-0 bg-black transition-opacity duration-500"
                        style={{ opacity: showPlay ? 0.1 : 0, pointerEvents: "none" }}
                    />

                    {/* Play button — truly centered with flexbox on a full-size absolute div */}
                    <div
                        className="absolute inset-0 flex items-center justify-center hidden"
                        style={{ pointerEvents: showPlay ? "auto" : "none" }}
                    >
                        <button
                            onClick={handlePlay}
                            aria-label="Play with sound"
                            className="relative flex items-center justify-center cursor-pointer rounded-full bg-white/20 hover:scale-105 active:scale-95 transition-transform duration-300"
                            style={{
                                width: 110,
                                height: 110,
                                opacity: showPlay ? 1 : 0,
                                transform: showPlay ? "scale(1)" : "scale(0.7)",
                                transition: "opacity 0.4s ease, transform 0.4s ease",
                                pointerEvents: showPlay ? "auto" : "none",
                            }}
                        >
                            {/* Circular Text */}
                            <div
                                className="absolute inset-0 origin-center"
                                style={{
                                    animation: "rotate-text 10s linear infinite",
                                }}
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                                        />
                                    </defs>
                                    <text
                                        className="font-bold fill-gray-600"
                                        style={{
                                            fontSize: "9px",
                                            textTransform: "uppercase",
                                            letterSpacing: "3px",
                                        }}
                                    >
                                        <textPath href="#circlePath">
                                            Click To Play • Click To Play •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Central Play Icon (Purple Rounded Triangle) */}
                            <div className="relative z-10 w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path
                                        d="M35 30C35 27.5 37.5 26 39.5 27.2L68 44.7C70 45.9 70 49.1 68 50.3L39.5 67.8C37.5 69 35 67.5 35 65V30Z"
                                        fill="#a64b2a"
                                        stroke="#a64b2a"
                                        strokeWidth="6"
                                        strokeLinejoin="round"
                                        className="drop-shadow-md"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes rotate-text {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}

function RouteComponent() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(null)
    const sidebarRef = useRef(null)

    // notice board section - helper
    const [openCourse, setOpenCourse] = useState(null);

    const [activeTab, setActiveTab] = useState("notice");
    const [keyword, setKeyword] = useState("");
    const [department, setDepartment] = useState("");
    const [course, setCourse] = useState("");

    const handleDeptChange = (e) => {
        setDepartment(e.target.value);
        setCourse("");
    };

    const items = activeTab === "notice" ? NOTICES : EVENTS;
    const availableCourses = department ? (COURSESDropdown[department] ?? []) : [];

    // Research Universe Constellation States
    const [activeNodeIndex, setActiveNodeIndex] = useState(2); // start with Data Science
    const [displayNode, setDisplayNode] = useState(constellationNodes[2]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef(null);

    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setActiveNodeIndex((prev) => (prev + 1) % constellationNodes.length);
        }, 5000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setDisplayNode(constellationNodes[activeNodeIndex]);
            setIsTransitioning(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [activeNodeIndex]);

    const handleNodeClick = (index) => {
        setActiveNodeIndex(index);
        resetTimer();
    };

    // Close on outside click
    useEffect(() => {
        function handleClick(e) {
            if (
                sidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target)
            ) {
                // Don't close if clicking the tab trigger itself
                const trigger = document.getElementById('sidebar-trigger')
                if (trigger && trigger.contains(e.target)) return
                setSidebarOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [sidebarOpen])

    return (
        <div
            style={{
                fontFamily: 'Poppins, system-ui, sans-serif',
                background: '#fffaf7',
                color: '#2c1610',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* ══════════════════════════════════════════════════
          FIXED LEFT SIDEBAR TAB + DRAWER
      ══════════════════════════════════════════════════ */}

            {/* Backdrop blur overlay */}
            <div
                onClick={() => setSidebarOpen(false)}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(44, 22, 16, 0.35)',
                    backdropFilter: 'blur(3px)',
                    zIndex: 39,
                    opacity: sidebarOpen ? 1 : 0,
                    pointerEvents: sidebarOpen ? 'auto' : 'none',
                    transition: 'opacity 0.35s ease',
                }}
            />

            {/* Tab trigger — always visible on left edge */}
            <button
                id="sidebar-trigger"
                onClick={() => setSidebarOpen((v) => !v)}
                style={{
                    position: 'fixed',
                    left: sidebarOpen ? 300 : 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 41,
                    background: '#a64b2a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0 8px 8px 0',
                    padding: '18px 10px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    boxShadow: '10px 0 10px rgba(166,75,42,0.25)',
                    transition: 'left 0.38s cubic-bezier(0.4,0,0.2,1)',
                }}
                aria-label={sidebarOpen ? 'Close department menu' : 'Open department menu'}
            >
                {/* Hamburger / X */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 18 }}>
                    <span
                        style={{
                            display: 'block',
                            height: 2,
                            background: '#fff',
                            borderRadius: 1,
                            width: sidebarOpen ? '100%' : '100%',
                            transform: sidebarOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                            transition: 'transform 0.25s ease',
                        }}
                    />
                    <span
                        style={{
                            display: 'block',
                            height: 2,
                            background: '#fff',
                            borderRadius: 1,
                            opacity: sidebarOpen ? 0 : 1,
                            transition: 'opacity 0.25s ease',
                        }}
                    />
                    <span
                        style={{
                            display: 'block',
                            height: 2,
                            background: '#fff',
                            borderRadius: 1,
                            transform: sidebarOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                            transition: 'transform 0.25s ease',
                        }}
                    />
                </div>
                {/* Rotated label */}
                <span
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: '#ffe0d0',
                        marginTop: 8,
                        whiteSpace: 'nowrap',
                    }}
                >
                    CSE DEPT
                </span>
            </button>

            {/* Sidebar drawer */}
            <div
                ref={sidebarRef}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: '50%',
                    transform: `translateY(-50%) translateX(${sidebarOpen ? '0' : '-100%'})`,
                    width: 300,
                    height: '68vh',
                    maxHeight: 660,
                    background: 'linear-gradient(160deg, #a64b2a 0%, #7a281a 100%)',
                    borderRadius: '0 16px 16px 0',
                    boxShadow: '8px 0 40px rgba(122,40,26,0.35)',
                    zIndex: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
                }}
            >
                {/* Sidebar header */}
                <div
                    style={{
                        padding: '28px 28px 20px',
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                        flexShrink: 0,
                    }}
                >
                    <div
                        style={{
                            fontSize: 10,
                            letterSpacing: '0.14em',
                            color: 'rgba(255,224,208,0.7)',
                            fontWeight: 600,
                            marginBottom: 6,
                        }}
                    >
                        EAST WEST UNIVERSITY
                    </div>
                    <div
                        style={{
                            fontSize: 17,
                            fontWeight: 700,
                            color: '#fff',
                            lineHeight: 1.35,
                        }}
                    >
                        Department of Computer Science &amp; Engineering
                    </div>
                </div>

                {/* Menu items */}
                <div
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '8px 0',
                        scrollbarWidth: 'none',
                    }}
                >
                    {menuItems.map((item) => {
                        const isActive = activeItem === item
                        return (
                            <button
                                key={item}
                                onClick={() => setActiveItem(isActive ? null : item)}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: '13px 28px',
                                    background: isActive
                                        ? 'rgba(255,255,255,0.14)'
                                        : 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    color: isActive ? '#fff' : 'rgba(255,240,232,0.88)',
                                    fontSize: 14,
                                    fontWeight: isActive ? 600 : 400,
                                    fontFamily: 'inherit',
                                    transition: 'background 0.15s ease, color 0.15s ease',
                                    borderLeft: isActive
                                        ? '3px solid rgba(255,255,255,0.6)'
                                        : '3px solid transparent',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive)
                                        e.currentTarget.style.background =
                                            'rgba(255,255,255,0.07)'
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive)
                                        e.currentTarget.style.background =
                                            'transparent'
                                }}
                            >
                                <span>{item}</span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    style={{
                                        flexShrink: 0,
                                        opacity: 0.6,
                                        transform: isActive ? 'rotate(90deg)' : 'none',
                                        transition: 'transform 0.2s ease',
                                    }}
                                >
                                    <path
                                        d="M6 4l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        )
                    })}
                </div>

                {/* Footer */}
                <div
                    style={{
                        padding: '14px 28px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        flexShrink: 0,
                    }}
                >
                    <button
                        onClick={() => setSidebarOpen(false)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            background: 'rgba(0,0,0,0.15)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 6,
                            padding: '8px 16px',
                            color: 'rgba(255,240,232,0.8)',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            width: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        ← CLOSE MENU
                    </button>
                </div>
            </div>

            {/* ══════════════════════════════════════════════════
          HERO SECTION — full screen
      ══════════════════════════════════════════════════ */}
            <section
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    minHeight: 600,
                    overflow: 'hidden',
                }}
            >
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=85&fit=crop"
                    alt="East West University campus"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />

                {/* Dark gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(135deg, rgba(44,22,16,0.82) 0%, rgba(44,22,16,0.55) 55%, rgba(44,22,16,0.25) 100%)',
                    }}
                />

                {/* Subtle texture pattern */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'radial-gradient(circle at 70% 30%, rgba(166,75,42,0.18) 0%, transparent 55%)',
                    }}
                />

                {/* Hero content */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '0 80px 0 100px',
                        maxWidth: 1420,
                        margin: '0 auto',
                    }}
                >
                    {/* Eyebrow */}
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 8,
                        }}
                    >
                        <span
                            style={{
                                width: 32,
                                height: 2,
                                background: '#a64b2a',
                                display: 'inline-block',
                                borderRadius: 1,
                            }}
                        />
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: '0.2em',
                                color: '#c26d45',
                                textTransform: 'uppercase',
                            }}
                        >
                            East West University
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1
                        style={{
                            fontSize: 'clamp(38px, 5.5vw, 72px)',
                            fontWeight: 800,
                            color: '#fff',
                            lineHeight: 1.1,
                            margin: '0 0 12px',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Department of
                        <br />
                        <span
                            style={{
                                color: '#c26d45',
                                fontStyle: 'italic',
                                fontWeight: 700,
                            }}
                        >
                            Computer Science
                        </span>
                        <br />
                        &amp; Engineering
                    </h1>

                    {/* Subtext */}
                    <p
                        style={{
                            fontSize: 16,
                            color: 'rgba(255,240,232,0.75)',
                            margin: '16px 0 40px',
                            lineHeight: 1.7,
                            maxWidth: 480,
                            fontWeight: 400,
                        }}
                    >
                        Shaping the engineers and researchers who will define the next
                        generation of intelligent systems — from algorithms to applications.
                    </p>

                    {/* Stats row */}
                    <div
                        style={{
                            display: 'flex',
                            gap: 36,
                            marginBottom: 12,
                            paddingBottom: 36,
                            borderBottom: '1px solid rgba(255,255,255,0.12)',
                        }}
                    >
                        {[
                            { value: '48+', label: 'Faculty' },
                            { value: '1,200+', label: 'Students' },
                            { value: '32', label: 'Research Labs' },
                            { value: '96%', label: 'Placement Rate' },
                        ].map((s) => (
                            <div key={s.label}>
                                <div
                                    style={{
                                        fontSize: 26,
                                        fontWeight: 800,
                                        color: '#fff',
                                        lineHeight: 1,
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: 11,
                                        color: 'rgba(255,224,208,0.6)',
                                        marginTop: 4,
                                        fontWeight: 500,
                                        letterSpacing: '0.06em',
                                    }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <button
                            style={{
                                background: '#a64b2a',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 6,
                                padding: '14px 28px',
                                fontSize: 13,
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                boxShadow: '0 8px 24px rgba(166,75,42,0.4)',
                            }}
                        >
                            EXPLORE PROGRAMS ↗
                        </button>
                        <button
                            style={{
                                background: 'transparent',
                                color: '#fff',
                                border: '1px solid rgba(255,255,255,0.35)',
                                borderRadius: 6,
                                padding: '14px 28px',
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            MEET OUR FACULTY
                        </button>
                        <button
                            onClick={() => setSidebarOpen(true)}
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                color: '#ffe0d0',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: 6,
                                padding: '14px 22px',
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                backdropFilter: 'blur(8px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                            }}
                        >
                            ☰ DEPT MENU
                        </button>
                    </div>
                </div>

                {/* Scroll cue */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 32,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8,
                        zIndex: 2,
                    }}
                >
                    <span
                        style={{
                            fontSize: 10,
                            letterSpacing: '0.14em',
                            color: 'rgba(255,255,255,0.4)',
                            fontWeight: 600,
                        }}
                    >
                        SCROLL
                    </span>
                    <div
                        style={{
                            width: 1,
                            height: 40,
                            background:
                                'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
                            animation: 'scrollPulse 2s ease-in-out infinite',
                        }}
                    />
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
          MESSAGE FROM THE CHAIR SECTION
      ══════════════════════════════════════════════════ */}
            <section
                style={{
                    background: '#eeded5',
                    padding: '100px 48px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 80,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* Left: Chair Image Card */}
                    <div
                        style={{
                            position: 'relative',
                            width: 360,
                            height: 450,
                            borderRadius: 24,
                            backgroundImage: 'linear-gradient(135deg, rgba(166,75,42,0.45), rgba(122,40,26,0.45)), url("https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&fit=crop")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: '0 20px 40px rgba(122,40,26,0.12)',
                        }}
                    >
                        <img
                            src="src/assets/faculty/cse_dean.jpg"
                            alt="Dr. Rashed Karim"
                            style={{
                                position: 'absolute',
                                top: 20,
                                left: 20,
                                width: 'calc(100% - 40px)',
                                height: 'calc(100% - 40px)',
                                objectFit: 'cover',
                                borderRadius: 20,
                            }}
                        />

                        {/* White Badge Label */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: -20,
                                right: 30,
                                background: '#fff',
                                padding: '16px 24px',
                                borderRadius: 12,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                minWidth: 180,
                                zIndex: 3,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 9,
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: '#a64b2a',
                                    marginBottom: 4,
                                }}
                            >
                                DEPARTMENT CHAIR
                            </div>
                            <div
                                style={{
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: '#2c1610',
                                    marginBottom: 2,
                                }}
                            >
                                Dr. Rashed Karim
                            </div>
                            <div
                                style={{
                                    fontSize: 11,
                                    color: '#8c7a70',
                                }}
                            >
                                PhD, Stanford · 22 yrs
                            </div>
                        </div>
                    </div>

                    {/* Right: Message Content */}
                    <div style={{ flex: '1 1 500px', maxWidth: 650 }}>
                        {/* Eyebrow */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                marginBottom: 16,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: '#8c7a70',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                02
                            </span>
                            <span style={{ width: 24, height: 1, background: '#a64b2a' }} />
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.15em',
                                    color: '#a64b2a',
                                }}
                            >
                                MESSAGE FROM THE CHAIR
                            </span>
                        </div>

                        {/* SVG Quote mark */}
                        <svg
                            width="40"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="none"
                            style={{ marginBottom: 16, color: '#e0a996' }}
                        >
                            <path
                                d="M12.1 32C8.3 32 5.1 30.2 2.5 26.6C-0.1 23 -0.6 18.6 1.1 13.4C2.8 8.2 6.5 3.7 12.2 0L15.3 4C11.3 7.3 8.7 10.6 7.5 13.8C8.9 13.6 10.3 13.9 11.7 14.7C13.8 15.9 14.8 18.2 14.8 21.6C14.8 24.8 13.9 27.4 12.1 29.4C12.1 30.7 12.1 31.6 12.1 32ZM34.1 32C30.3 32 27.1 30.2 24.5 26.6C21.9 23 21.4 18.6 23.1 13.4C24.8 8.2 28.5 3.7 34.2 0L37.3 4C33.3 7.3 30.7 10.6 29.5 13.8C30.9 13.6 32.3 13.9 33.7 14.7C35.8 15.9 36.8 18.2 36.8 21.6C36.8 24.8 35.9 27.4 34.1 29.4C34.1 30.7 34.1 31.6 34.1 32Z"
                                fill="currentColor"
                            />
                        </svg>

                        {/* Quote Text */}
                        <h2
                            style={{
                                fontSize: 'clamp(22px, 3vw, 32px)',
                                fontWeight: 500,
                                color: '#2c1610',
                                lineHeight: 1.35,
                                margin: '0 0 24px 0',
                            }}
                        >
                            “We don't graduate students.
                            <br />
                            We graduate{' '}
                            <span style={{ color: '#a64b2a', fontWeight: 700 }}>
                                engineers
                            </span>{' '}
                            who ship, <span style={{ fontStyle: 'italic' }}>scientists</span>{' '}
                            who publish, and <span style={{ fontWeight: 700 }}>founders</span>{' '}
                            who hire.”
                        </h2>

                        {/* Paragraph */}
                        <p
                            style={{
                                fontSize: 14,
                                color: '#6d5a50',
                                lineHeight: 1.6,
                                margin: '0 0 32px 0',
                                maxWidth: 580,
                            }}
                        >
                            Every classroom in this department opens into a lab. Every lab opens
                            into a startup, a paper, or an internship at a company you've heard of.
                            The work is hard. The outcomes are not accidents.
                        </p>

                        {/* Stats / Badges */}
                        <div
                            style={{
                                display: 'flex',
                                gap: 24,
                                flexWrap: 'wrap',
                                borderTop: '1px solid rgba(166,75,42,0.15)',
                                paddingTop: 24,
                                color: '#8c4e35',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ flexShrink: 0 }}
                                >
                                    <circle cx="12" cy="8" r="7" />
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                </svg>
                                ACM Senior Member
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ flexShrink: 0 }}
                                >
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                                180+ Publications
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ flexShrink: 0 }}
                                >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                42 PhDs Supervised
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Video Scroll Animation ── */}
            <VideoAnimation />


            {/* ── 2. NOTICE BOARD ──────────────────────────────────── */}
            <section className="bg-muted/40 border-y border-border py-16 mt-8">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {/* â"€â"€ Left: Notice Board â"€â"€ */}
                        <div>
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
                                        Stay Updated
                                    </p>
                                    <h2 className="font-serif text-2xl font-bold">Notice Board</h2>
                                    <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
                                </div>
                                <button className="inline-flex items-center gap-1.5 rounded-lg border border-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                                    <Bell className="h-3.5 w-3.5" /> All Notices
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-border mb-4">
                                {["notice", "events"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-5 py-2.5 text-sm font-semibold capitalize transition-colors relative cursor-pointer ${activeTab === tab
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {tab === "notice" ? "Notice" : "Events"}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Items */}
                            <div className="flex flex-col gap-3">
                                {items.map((n, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary hover:shadow-brick cursor-pointer"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-border group-hover:bg-primary transition-colors" />
                                        <div className="ml-2 shrink-0 text-center w-8">
                                            <p className="font-bold text-lg text-primary leading-none">
                                                {new Date(n.date).getDate()}
                                            </p>
                                            <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
                                                {new Date(n.date).toLocaleString("en-US", { month: "short" })}
                                            </p>
                                        </div>
                                        <div className="h-8 w-px bg-border shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <span className="inline-block rounded-full bg-primary-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary mb-1">
                                                {n.tag}
                                            </span>
                                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                                {n.title}
                                            </p>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* â"€â"€ Right: Search Course â"€â"€ */}
                        <div>
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
                                    Find Your Course
                                </p>
                                <h2 className="font-serif text-2xl font-bold">Search Course</h2>
                                <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
                            </div>

                            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                                {/* Keyword */}
                                <div className="relative">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    <input
                                        type="text"
                                        placeholder="Keywords"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                </div>

                                {/* Department + Course */}
                                <div className="grid grid-cols-2 gap-3">
                                    <select
                                        value={department}
                                        onChange={handleDeptChange}
                                        className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer appearance-none"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "right 12px center",
                                        }}
                                    >
                                        <option value="">Select Department</option>
                                        {DEPARTMENTS.map((d) => (
                                            <option key={d} value={d}>
                                                {d}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                        disabled={!department}
                                        className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "right 12px center",
                                        }}
                                    >
                                        <option value="">Select Course</option>
                                        {availableCourses.map((c) => (
                                            <option key={c} value={c}>
                                                {c}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Search Button */}
                                <button className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all cursor-pointer">
                                    Search Course
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── 3. RESEARCH & INNOVATION UNIVERSE ─────────────────── */}
            <section
                id="research-universe"
                style={{
                    background: '#130c0a',
                    color: '#fff',
                    padding: '100px 48px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background stars texture */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(166,75,42,0.1) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(210,92,56,0.08) 0%, transparent 50%)',
                        pointerEvents: 'none',
                    }}
                />

                <div
                    style={{
                        maxWidth: 1200,
                        width: '100%',
                        zIndex: 2,
                    }}
                >
                    {/* Header */}
                    <div style={{ marginBottom: 60 }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                marginBottom: 16,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,0.4)',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                03
                            </span>
                            <span style={{ width: 24, height: 1, background: '#d25c38' }} />
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.15em',
                                    color: '#d25c38',
                                    textTransform: 'uppercase',
                                }}
                            >
                                RESEARCH & INNOVATION UNIVERSE
                            </span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 4vw, 42px)',
                                fontWeight: 800,
                                color: '#fff',
                                lineHeight: 1.15,
                                margin: 0,
                            }}
                        >
                            Five constellations.
                            <br />
                            <span
                                style={{
                                    color: '#d25c38',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                }}
                            >
                                One curiosity.
                            </span>
                        </h2>
                    </div>

                    {/* Columns */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 80,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {/* Left Column: Constellation */}
                        <div
                            style={{
                                width: 460,
                                height: 460,
                                position: 'relative',
                                flexShrink: 0,
                            }}
                        >
                            {/* Orbit and line segments SVG */}
                            <svg
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                }}
                            >
                                {/* Concentric Orbits */}
                                <circle
                                    cx="230"
                                    cy="230"
                                    r="120"
                                    fill="none"
                                    stroke="rgba(166,75,42,0.18)"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="230"
                                    cy="230"
                                    r="180"
                                    fill="none"
                                    stroke="rgba(166,75,42,0.12)"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="230"
                                    cy="230"
                                    r="250"
                                    fill="none"
                                    stroke="rgba(166,75,42,0.12)"
                                    strokeWidth="3"
                                    strokeDasharray="4,4"
                                />

                                {/* Interactive Connection Lines */}
                                {constellationNodes.map((node) => {
                                    if (node.id === 'ai') return null; // center node
                                    const isActiveSegment = displayNode.id === node.id;
                                    return (
                                        <line
                                            key={node.id}
                                            x1="230"
                                            y1="230"
                                            x2={node.x}
                                            y2={node.y}
                                            stroke={isActiveSegment ? '#d25c38' : 'rgba(166,75,42,0.22)'}
                                            strokeWidth={isActiveSegment ? 2 : 1}
                                            strokeDasharray={isActiveSegment ? 'none' : '4,4'}
                                            style={{
                                                transition: 'stroke 0.4s ease, stroke-width 0.4s ease',
                                            }}
                                        />
                                    );
                                })}
                            </svg>

                            {/* Node buttons */}
                            {constellationNodes.map((node, index) => {
                                const isActive = displayNode.id === node.id;
                                return (
                                    <button
                                        key={node.id}
                                        onClick={() => handleNodeClick(index)}
                                        style={{
                                            position: 'absolute',
                                            top: node.y,
                                            left: node.x,
                                            width: 74,
                                            height: 74,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            border: isActive
                                                ? 'none'
                                                : '1px solid rgba(166,75,42,0.3)',
                                            background: isActive ? '#d25c38' : '#1e1411',
                                            color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                                            zIndex: 5,
                                            outline: 'none',
                                            animation: isActive
                                                ? 'floatActive 3.5s ease-in-out infinite, glowActive 2s ease-in-out infinite'
                                                : 'none',
                                            transform: 'translate(-50%, -50%)',
                                            transition:
                                                'background 0.3s ease, border 0.3s ease, color 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'rgba(166,75,42,0.2)';
                                                e.currentTarget.style.color = '#fff';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = '#1e1411';
                                                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                            }
                                        }}
                                    >
                                        {node.icon}

                                        {/* Label text */}
                                        <span
                                            style={{
                                                position: 'absolute',
                                                top: 50,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                fontSize: 11,
                                                fontWeight: 600,
                                                letterSpacing: '0.05em',
                                                color: isActive ? '#fff' : 'rgba(255,255,255,0.45)',
                                                whiteSpace: 'nowrap',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >
                                            {node.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Column: Dynamic Info Card */}
                        <div
                            style={{
                                flex: '1 1 450px',
                                maxWidth: 580,
                                opacity: isTransitioning ? 0.3 : 1,
                                transform: isTransitioning
                                    ? 'translateY(8px)'
                                    : 'translateY(0)',
                                transition: 'opacity 0.25s ease, transform 0.25s ease',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    color: '#d25c38',
                                    marginBottom: 12,
                                    textTransform: 'uppercase',
                                }}
                            >
                                {displayNode.tag}
                            </div>
                            <h3
                                style={{
                                    fontFamily: 'Poppins, system-ui, sans-serif',
                                    fontSize: 'clamp(22px, 3.5vw, 32px)',
                                    fontWeight: 700,
                                    color: '#fff',
                                    lineHeight: 1.25,
                                    margin: '0 0 20px 0',
                                }}
                            >
                                {displayNode.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14,
                                    color: 'rgba(255,255,255,0.65)',
                                    lineHeight: 1.65,
                                    margin: '0 0 36px 0',
                                }}
                            >
                                {displayNode.desc}
                            </p>

                            {/* Stats */}
                            <div
                                style={{
                                    display: 'flex',
                                    gap: 16,
                                    marginBottom: 36,
                                }}
                            >
                                {[
                                    { value: displayNode.projects, label: 'PROJECTS' },
                                    { value: displayNode.publications, label: 'PUBLICATIONS' },
                                    { value: displayNode.labs, label: 'LABS' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        style={{
                                            flex: 1,
                                            background: '#1c1310',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: 12,
                                            padding: '16px 20px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: 28,
                                                fontWeight: 800,
                                                color: '#fff',
                                                lineHeight: 1,
                                                marginBottom: 4,
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 9,
                                                fontWeight: 700,
                                                color: 'rgba(255,255,255,0.4)',
                                                letterSpacing: '0.08em',
                                            }}
                                        >
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Link */}
                            <a
                                href="#labs"
                                style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: '#d25c38',
                                    textDecoration: 'none',
                                    letterSpacing: '0.06em',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                }}
                            >
                                See the labs ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* CSS animation styles */}
                <style>{`
                    @keyframes floatActive {
                        0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
                        50% { transform: translate(-50%, -50%) translateY(-6px); }
                    }
                    @keyframes glowActive {
                        0%, 100% { box-shadow: 0 0 15px rgba(210, 92, 56, 0.4); }
                        50% { box-shadow: 0 0 30px rgba(210, 92, 56, 0.85); }
                    }
                `}</style>
            </section>


            {/* ── 5. FACULTY EXCELLENCE WALL ──────────────────────── */}
            <section
                id="faculty-excellence"
                style={{
                    background: '#FAF1EA',
                    padding: '100px 48px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        width: '100%',
                        zIndex: 2,
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexWrap: 'wrap',
                            gap: 24,
                            marginBottom: 48,
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginBottom: 16,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(44, 22, 16, 0.4)',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    05
                                </span>
                                <span style={{ width: 24, height: 1, background: '#d25c38' }} />
                                <span
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 700,
                                        letterSpacing: '0.15em',
                                        color: '#d25c38',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    FACULTY EXCELLENCE WALL
                                </span>
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(28px, 4vw, 42px)',
                                    fontWeight: 800,
                                    color: '#2c1610',
                                    lineHeight: 1.15,
                                    margin: 0,
                                }}
                            >
                                Mentors who literally
                                <br />
                                <span
                                    style={{
                                        color: '#d25c38',
                                        fontWeight: 800,
                                    }}
                                >
                                    wrote the chapter.
                                </span>
                            </h2>
                        </div>

                        <a
                            href="#all-faculty"
                            style={{
                                fontSize: 13,
                                fontWeight: 700,
                                color: '#d25c38',
                                textDecoration: 'none',
                                letterSpacing: '0.06em',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                paddingBottom: 6,
                                borderBottom: '2px solid transparent',
                                transition: 'border-color 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d25c38'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                        >
                            All faculty ↗
                        </a>
                    </div>

                    {/* Grid Container */}
                    <div
                        className="grid faculty-grid-container"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 24,
                        }}
                    >
                        {[
                            {
                                name: 'Dr. Anika Rahman',
                                role: 'MACHINE LEARNING',
                                pubs: 84,
                                awards: 6,
                                image: 'src/assets/faculty/dr_anindita_paul.jpg',
                                class: 'faculty-card-1',
                                tall: true,
                            },
                            {
                                name: 'Prof. Imran Hossain',
                                role: 'CYBERSECURITY',
                                pubs: 71,
                                awards: 4,
                                image: 'src/assets/faculty/dr_md_naimul.jpg',
                                class: 'faculty-card-2',
                                tall: false,
                            },
                            {
                                name: 'Dr. Farzana Akter',
                                role: 'ROBOTICS & CONTROL',
                                pubs: 102,
                                awards: 9,
                                image: 'src/assets/faculty/dr_maheen_islam.jpg',
                                class: 'faculty-card-4',
                                tall: false,
                            },
                            {
                                name: 'Dr. Sumaiya Khan',
                                role: 'HCI',
                                pubs: 48,
                                awards: 5,
                                image: 'src/assets/face-1.jpg',
                                class: 'faculty-card-3',
                                tall: false,
                            },
                            {
                                name: 'Prof. Kazi Mahbub',
                                role: 'ALGORITHMS',
                                pubs: 130,
                                awards: 7,
                                image: 'src/assets/faculty/khairul_alam.jpg',
                                class: 'faculty-card-5',
                                tall: false,
                            },
                            {
                                name: 'Dr. Tanvir Ahmed',
                                role: 'DISTRIBUTED SYSTEMS',
                                pubs: 58,
                                awards: 3,
                                image: 'src/assets/person/Professor-Shams-Rahman.jpg',
                                class: 'faculty-card-6',
                                tall: true,
                            },
                        ].map((card) => (
                            <div
                                key={card.name}
                                className={`group faculty-card-all ${card.class}`}
                            >
                                {/* Image */}
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                        zIndex: 0,
                                    }}
                                    className="group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(16, 8, 5, 0.95) 0%, rgba(16, 8, 5, 0.5) 40%, transparent 100%)',
                                        zIndex: 1,
                                    }}
                                />

                                {/* Content */}
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    {/* Tag */}
                                    <div
                                        style={{
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: '0.12em',
                                            color: '#e0a996',
                                            marginBottom: 6,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {card.role}
                                    </div>

                                    {/* Name */}
                                    <h3
                                        style={{
                                            fontSize: card.tall ? 22 : 17,
                                            fontWeight: 700,
                                            color: '#fff',
                                            margin: '0 0 12px 0',
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {card.name}
                                    </h3>

                                    {/* Stats Pills */}
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <span
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                backdropFilter: 'blur(8px)',
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                padding: '4px 10px',
                                                borderRadius: 20,
                                                fontSize: 10,
                                                fontWeight: 600,
                                                color: '#f9f0ea',
                                            }}
                                        >
                                            {card.pubs} pubs
                                        </span>
                                        <span
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                backdropFilter: 'blur(8px)',
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                padding: '4px 10px',
                                                borderRadius: 20,
                                                fontSize: 10,
                                                fontWeight: 600,
                                                color: '#f9f0ea',
                                            }}
                                        >
                                            {card.awards} awards
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS animation and grid responsiveness styles */}
                <style>{`
                    .faculty-card-all {
                        position: relative;
                        border-radius: 24px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        padding: 28px 24px;
                        cursor: pointer;
                        box-shadow: 0 4px 20px rgba(16, 8, 5, 0.04);
                        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
                    }
                    .faculty-card-all:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 20px 38px rgba(16, 8, 5, 0.15);
                    }
                    @media (min-width: 1025px) {
                        .faculty-card-1 { grid-column: 1; grid-row: span 2; height: 540px; }
                        .faculty-card-2 { grid-column: 2; grid-row: 1; height: 258px; }
                        .faculty-card-3 { grid-column: 2; grid-row: 2; height: 258px; }
                        .faculty-card-4 { grid-column: 3; grid-row: 1; height: 258px; }
                        .faculty-card-5 { grid-column: 3; grid-row: 2; height: 258px; }
                        .faculty-card-6 { grid-column: 4; grid-row: span 2; height: 540px; }
                    }
                    @media (max-width: 1024px) and (min-width: 641px) {
                        .faculty-grid-container {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                        .faculty-card-1 { grid-column: 1; grid-row: span 2; height: 500px; }
                        .faculty-card-2 { grid-column: 2; grid-row: 1; height: 238px; }
                        .faculty-card-3 { grid-column: 2; grid-row: 2; height: 238px; }
                        .faculty-card-4 { grid-column: 2; grid-row: 3; height: 238px; }
                        .faculty-card-5 { grid-column: 2; grid-row: 4; height: 238px; }
                        .faculty-card-6 { grid-column: 1; grid-row: 3 / span 2; height: 500px; }
                    }
                    @media (max-width: 640px) {
                        .faculty-grid-container {
                            grid-template-columns: 1fr !important;
                        }
                        .faculty-card-all {
                            height: 340px !important;
                            grid-column: span 1 !important;
                            grid-row: auto !important;
                        }
                    }
                `}</style>
            </section>

            {/* ══════════════════════════════════════════════════
          PLACEHOLDER CONTENT BELOW HERO
      ══════════════════════════════════════════════════ */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '80px 48px',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 24,
                    }}
                >
                    {[
                        {
                            icon: '🎓',
                            title: 'Undergraduate Programs',
                            desc: 'B.Sc. in CSE — a rigorous four-year program combining theory with hands-on systems work.',
                        },
                        {
                            icon: '🔬',
                            title: 'Research Areas',
                            desc: 'AI, Machine Learning, Cybersecurity, Human-Computer Interaction, and Distributed Systems.',
                        },
                        {
                            icon: '🏛️',
                            title: 'Lab Facilities',
                            desc: '32 specialised labs equipped with state-of-the-art hardware for research and student projects.',
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            style={{
                                background: '#fff',
                                border: '1px solid #d2c9c2',
                                borderRadius: 10,
                                padding: '28px 24px',
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{ fontSize: 28, marginBottom: 14 }}>{card.icon}</div>
                            <div
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: '#2c1610',
                                    marginBottom: 8,
                                }}
                            >
                                {card.title}
                            </div>
                            <div
                                style={{ fontSize: 14, color: '#6d5a50', lineHeight: 1.65 }}
                            >
                                {card.desc}
                            </div>
                            <div
                                style={{
                                    marginTop: 20,
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: '#a64b2a',
                                    letterSpacing: '0.06em',
                                }}
                            >
                                LEARN MORE ↗
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scroll animation keyframe */}
            <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.15); }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
        </div>
    )
}