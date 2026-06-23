import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  GraduationCap,
  User,
  Briefcase,
  Phone,
  LogIn,
  Search,
} from "lucide-react";

import { useTheme } from "./ThemeProvider";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site-data";

const MAIN_NAV = [
  { to: "/", label: "Home" },
  // { to: "/departments", label: "Departments" },
  // { to: "/faculty", label: "Faculty" },
  { to: "/clubs", label: "Clubs" },
  // { to: "/about", label: "About" },
  // { to: "/admission", label: "Admission" },
  // { to: "/facilities", label: "Facilities" },
  // { to: "/research", label: "Research" },
] as const;

const OTHERS = [
  { to: "/departments", label: "Departments" },
  { to: "/faculty", label: "Faculty" },
  { to: "/clubs", label: "Clubs" },
  { to: "/academic-calendar", label: "Academic Calendar" },
  { to: "/contact", label: "Contact" },
] as const;

const LOGINS = [
  {
    to: "/login/student",
    label: "Student",
    icon: GraduationCap,
    desc: "Grades, registration, resources",
  },
  { to: "/login/faculty", label: "Faculty", icon: User, desc: "Courses, attendance, grading" },
  { to: "/login/nts", label: "NTS", icon: Briefcase, desc: "Non-teaching staff workspace" },
] as const;

const FACULTIES_MENU = [
  { slug: "science-engineering", label: "Faculty of Science & Engineering" },
  // { to: "/faculties/business-economics", label: "Business & Economics" },
  // { to: "/faculties/liberal-arts-social-sciences", label: "Liberal Arts & Social Sciences" },
] as const;

const DEPARTMENTS_MENU = [
  { to: "/computer-science-engineering", label: "Computer Science & Engineering", short: "CSE" },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const [mobile, setMobile] = React.useState(false);
  const [othersOpen, setOthersOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [facultiesOpen, setFacultiesOpen] = React.useState(false);
  const [departmentsOpen, setDepartmentsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      {/* Top bar */}
      <div className="hidden border-b border-border/70 bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
            >
              <Phone className="h-3 w-3" /> {SITE.phone}
            </a>
            <span className="opacity-60">|</span>
            <span className="opacity-90">Emergency: {SITE.emergency}</span>
          </div>
          <div className="opacity-80">{SITE.tagline}</div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="East West University home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary after:!w-full" }}
              inactiveProps={{ className: "text-foreground/80" }}
              className="relative py-2 text-md font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}

          {/* Faculties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFacultiesOpen(true)}
            onMouseLeave={() => setFacultiesOpen(false)}
            onFocus={() => setFacultiesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                setFacultiesOpen(false);
            }}
          >
            <button
              aria-haspopup="menu"
              aria-expanded={facultiesOpen}
              className={`relative inline-flex items-center gap-1 py-2 text-md font-medium cursor-pointer transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${facultiesOpen ? "text-primary after:!w-full" : "text-foreground/80"
                }`}
            >
              Faculties <ChevronDown className="h-4 w-4" />
            </button>
            {facultiesOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-brick animate-in fade-in slide-in-from-top-2 duration-200">
                  {FACULTIES_MENU.map((fMenu) => (
                    <Link
                      key={fMenu.slug}
                      to="/faculties/$slug"
                      params={{ slug: fMenu.slug }}
                      onClick={() => setFacultiesOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground font-medium"
                    >
                      {fMenu.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Departments Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDepartmentsOpen(true)}
            onMouseLeave={() => setDepartmentsOpen(false)}
            onFocus={() => setDepartmentsOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                setDepartmentsOpen(false);
            }}
          >
            <button
              aria-haspopup="menu"
              aria-expanded={departmentsOpen}
              className={`relative inline-flex items-center gap-1 py-2 text-md font-medium cursor-pointer transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${departmentsOpen ? "text-primary after:!w-full" : "text-foreground/80"
                }`}
            >
              Departments <ChevronDown className="h-4 w-4" />
            </button>
            {departmentsOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-brick animate-in fade-in slide-in-from-top-2 duration-200">
                  {DEPARTMENTS_MENU.map((dMenu) => (
                    <Link
                      key={dMenu.to}
                      to={dMenu.to}
                      onClick={() => setDepartmentsOpen(false)}
                      className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground font-medium"
                    >
                      <span className="inline-flex h-6 w-10 shrink-0 items-center justify-center rounded bg-primary/10 text-[9px] font-black uppercase tracking-wider text-primary">
                        {dMenu.short}
                      </span>
                      {dMenu.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Single Login dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
            onFocus={() => setLoginOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                setLoginOpen(false);
            }}
          >
            <button
              aria-haspopup="menu"
              aria-expanded={loginOpen}
              className={`relative inline-flex items-center gap-1 py-2 text-sm font-medium cursor-pointer transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${loginOpen ? "text-primary after:!w-full" : "text-foreground/80"}`}
            >
              <LogIn className="h-4 w-4" /> Login <ChevronDown className="h-4 w-4" />
            </button>
            {loginOpen && (
              <div className="absolute right-0 top-full w-72 pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-brick">
                  {LOGINS.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-accent"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg brand-gradient text-primary-foreground">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <p className="text-sm font-semibold leading-tight">{l.label} Portal</p>
                        <p className="text-xs text-muted-foreground">{l.desc}</p>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-1.5">
          <div
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                setSearchOpen(false);
            }}
          >
            <button
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search"
              aria-expanded={searchOpen}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 lg:w-72">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-brick">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search programs, faculties..."
                      className="w-full rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      autoFocus
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="#"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-brick transition-colors hover:bg-primary-deep md:inline-flex"
          >
            Apply Now
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobile((m) => !m)}
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {[...MAIN_NAV].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobile(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Faculties
            </p>
            {FACULTIES_MENU.map((item) => (
              <Link
                key={item.slug}
                to="/faculties/$slug"
                params={{ slug: item.slug }}
                onClick={() => setMobile(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Departments
            </p>
            {DEPARTMENTS_MENU.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobile(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-accent"
              >
                <span className="inline-flex h-5 w-9 shrink-0 items-center justify-center rounded bg-primary/10 text-[9px] font-black uppercase tracking-wider text-primary">
                  {item.short}
                </span>
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Login
            </p>
            <div className="grid grid-cols-3 gap-2">
              {LOGINS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobile(false)}
                  className="flex flex-col items-center gap-1 rounded-md border border-border bg-card px-2 py-3 text-xs font-medium"
                >
                  <l.icon className="h-4 w-4 text-primary" />
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              to="#"
              onClick={() => setMobile(false)}
              className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
