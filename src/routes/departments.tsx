import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, GraduationCap, ChevronRight, BookOpen } from "lucide-react";
import { DEPARTMENTS } from "@/lib/site-data";
import { CommunitySlider } from "@/components/site/CommunitySlider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments , East West University" },
      {
        name: "description",
        content:
          "Explore EWU's faculties and departments across Engineering, Business, Pharmacy, Law and Liberal Arts.",
      },
      { property: "og:title", content: "Departments at EWU" },
      { property: "og:description", content: "Faculties and departments across EWU." },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  const byFaculty = DEPARTMENTS.reduce<Record<string, typeof DEPARTMENTS>>((acc, d) => {
    (acc[d.faculty] ||= []).push(d);
    return acc;
  }, {});
  const facultyGroups = Object.entries(byFaculty);
  const defaultFaculty = facultyGroups[0]?.[0];

  return (
    <>
      <div>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="relative h-[65vh] min-h-[750px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
            alt="EWU Departments"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-between mx-auto max-w-7xl px-6 py-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/90">Departments</span>
            </nav>

            {/* Main content */}
            <div className="max-w-2xl my-6">
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm mb-5">
                Academic Excellence
              </span>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Six Faculties.
                <br />
                Thirty Programs.
                <br />
                One Mission.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Explore EWU's full academic offering — from undergraduate degrees to PhD research
                streams — across engineering, business, law, pharmacy, and liberal arts.
              </p>
              <div className="my-8 flex flex-wrap gap-3">
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brick transition-colors hover:bg-primary-deep"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#departments"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Browse Departments
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 border-t border-white/20 pt-6">
              {[
                { icon: BookOpen, value: "30+", label: "Programs" },
                { icon: Users, value: "15,000+", label: "Students" },
                { icon: GraduationCap, value: "6", label: "Faculties" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-bold text-white leading-none">
                      {s.value}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="departments" className="mx-auto max-w-7xl px-6 py-16">
          <Tabs defaultValue={defaultFaculty} className="w-full">
            <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto rounded-2xl border border-border bg-card p-2 text-muted-foreground">
              {facultyGroups.map(([faculty, depts]) => (
                <TabsTrigger
                  key={faculty}
                  value={faculty}
                  className="min-h-12 shrink-0 gap-2 rounded-xl px-4 py-2 text-left text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-brick"
                >
                  <span>{faculty}</span>
                  <span className="rounded-full bg-background/80 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                    {depts.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {facultyGroups.map(([faculty, depts]) => (
              <TabsContent key={faculty} value={faculty} className="mt-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      Departments
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-bold">{faculty}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {depts.length} {depts.length === 1 ? "department" : "departments"}
                  </p>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {depts.map((d) => (
                    <Link
                      key={d.slug}
                      to="/departments/$slug"
                      params={{ slug: d.slug }}
                      className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick"
                    >
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient font-bold text-primary-foreground">
                        {d.short}
                      </div>
                      <h3 className="font-serif text-lg font-bold">{d.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{d.summary}</p>
                      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-3">
                          <span className="inline-flex items-center gap-1">
                            <Users className="h-3 w-3" /> {d.students.toLocaleString()}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <GraduationCap className="h-3 w-3" /> {d.programs}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Chairperson's Message */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold">Chairperson's Message</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our mission is to foster an environment of academic excellence, innovation, and
                ethical leadership across all disciplines. Watch the video to learn more about our
                vision for the future of our educational programs and the core objectives that drive
                our departments forward.
              </p>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-brick">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/JiyYFyJK-AU?si=J0LCDh26I6bSKbo5&rel=0"
                title="Chairperson Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Success Stories & Testimonials */}
        <section className="bg-card border-y border-border py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-3xl font-bold text-center">
              Success Stories & Testimonials
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our current students and successful alumni who are making a
              significant career impact across the globe.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-sm">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/p9BdSGgjS64?si=zsYRvbEFEuMyTq34&rel=0"
                    title="Student Testimonial"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Student Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Current students share their inspiring academic journeys.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-sm">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/p9BdSGgjS64?si=zsYRvbEFEuMyTq34&rel=0"
                    title="Alumni Success Story"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Alumni Success</h3>
                  <p className="text-sm text-muted-foreground">
                    How our graduates are shaping the future of their respective industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Visuals – full-width GSAP scroll slider */}
      </div>
      <CommunitySlider />
    </>
  );
}
