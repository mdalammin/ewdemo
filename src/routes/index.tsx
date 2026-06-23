import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { NewsTicker } from "@/components/site/NewsTicker";
import { PortalsBar } from "@/components/site/PortalsBar";
import { PartnersFloating } from "@/components/site/PartnersFloating";

import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Stats } from "@/components/home/Stats";
import { FeaturedDepartments } from "@/components/home/FeaturedDepartments";
import { ScholarshipsBlock } from "@/components/home/ScholarshipsBlock";
import { FacilitiesBlock } from "@/components/home/FacilitiesBlock";
import { ResearchHighlights } from "@/components/home/ResearchHighlights";
import { FacultySpotlight } from "@/components/home/FacultySpotlight";
import { ClubsBlock } from "@/components/home/ClubsBlock";
import { CalendarPreview } from "@/components/home/CalendarPreview";
import { AchievementsBlock } from "@/components/home/AchievementsBlock";
import { GalleryBlock } from "@/components/home/GalleryBlock";
import { AlumniBlock } from "@/components/home/AlumniBlock";
import { FAQBlock } from "@/components/home/FAQBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "East West University, Excellence in Education" },
      { name: "description", content: "EWU is a leading private university in Dhaka offering 30+ programs across Engineering, Business, Pharmacy, Law and Liberal Arts." },
      { property: "og:title", content: "East West University" },
      { property: "og:description", content: "Excellence in Education. Programs, admission, research and campus life in Dhaka, Bangladesh." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <Hero />
      <PortalsBar />
      <NewsTicker />
      <AboutPreview />
      <Stats />
      <FeaturedDepartments />
      <ScholarshipsBlock />
      <FacilitiesBlock />
      <ResearchHighlights />
      <FacultySpotlight />
      <ClubsBlock />
      <CalendarPreview />
      <AchievementsBlock />
      <GalleryBlock />
      <AlumniBlock />
      <FAQBlock />
      <PartnersFloating />
    </div>
  );
}
