// Central image map so any component can resolve a string key to an imported URL.
import face1 from "@/assets/faculty/dr_maheen_islam.jpg";
import face2 from "@/assets/faculty/dr_md_naimul.jpg";
import face3 from "@/assets/faculty/khairul_alam.jpg";
import face4 from "@/assets/faculty/dr_anindita_paul.jpg";

import face5 from "@/assets/faculty/cse_dean.jpg";

import alum1 from "@/assets/alumni/fahim.jpg";
import alum2 from "@/assets/alumni/miraj.jpg";
import alum3 from "@/assets/alumni/safayat.jpg";
import alum4 from "@/assets/alumni/sajjad.jpg";

import facLibrary from "@/assets/library/lib2.jpg";
const facClassroom = "/__l5e/assets-v1/e422edcc-dc87-4149-b94a-e00674d6760f/fac-classroom.jpg";
import facComputer from "@/assets/fac-computer.jpg";
import facResearch from "@/assets/fac-research.jpg";
import facAuditorium from "@/assets/fac-auditorium.jpg";
import facCafeteria from "@/assets/fac-cafeteria.jpg";
import facSports from "@/assets/fac-sports.jpg";
import facMedical from "@/assets/fac-medical.jpg";
import facTransport from "@/assets/fac-transport.jpg";

import clubComputer from "@/assets/club/computer.jpg";
import clubBusiness from "@/assets/club/business.jpg";
import clubDebate from "@/assets/club/debate.jpg";
import clubRobotics from "@/assets/club/robotics.jpg";
import clubDrama from "@/assets/club/robotics.jpg";
import clubPhoto from "@/assets/club/robotics.jpg";
import clubSports from "@/assets/club/robotics.jpg";
import clubSocial from "@/assets/club/robotics.jpg";

import ach1 from "@/assets/price/price5.jpg";
import ach2 from "@/assets/price/price6.jpg";
import ach3 from "@/assets/price/price7.jpg";
import ach4 from "@/assets/price/price4.jpg";

import calendarBg from "@/assets/calendar-bg.jpg";

import res1 from "@/assets/research/research1.jpg";
import res2 from "@/assets/research/research3.jpg";
import res3 from "@/assets/research/research2.jpg";

import hero2 from "@/assets/dept/cse.jpg";
import hero3 from "@/assets/dept/eee.jpg";
import hero4 from "@/assets/dept/bba.jpg";
import hero5 from "@/assets/dept/eco.jpg";
import hero6 from "@/assets/dept/civil.jpg";
import hero7 from "@/assets/dept/english.jpg";

export const IMG: Record<string, string> = {
  "face-1": face1,
  "face-2": face2,
  "face-3": face3,
  "face-4": face4,
  "face-5": face5,
  "alum-1": alum1,
  "alum-2": alum2,
  "alum-3": alum3,
  "alum-4": alum4,
  "fac-library": facLibrary,
  "fac-classroom": facClassroom,
  "fac-computer": facComputer,
  "fac-research": facResearch,
  "fac-auditorium": facAuditorium,
  "fac-cafeteria": facCafeteria,
  "fac-sports": facSports,
  "fac-medical": facMedical,
  "fac-transport": facTransport,
  "club-computer": clubComputer,
  "club-business": clubBusiness,
  "club-debate": clubDebate,
  "club-robotics": clubRobotics,
  "club-drama": clubDrama,
  "club-photo": clubPhoto,
  "club-sports": clubSports,
  "club-social": clubSocial,
  "ach-1": ach1,
  "ach-2": ach2,
  "ach-3": ach3,
  "ach-4": ach4,
  "calendar-bg": calendarBg,
  "res-1": res1,
  "res-2": res2,
  "res-3": res3,
  "hero-2": hero2,
  "hero-3": hero3,
  "hero-4": hero4,
  "hero-5": hero5,
  "hero-6": hero6,
  "hero-7": hero7,
};

export function img(key: string): string {
  return IMG[key] ?? "";
}

export const GALLERY_KEYS = ["hero-2", "hero-3", "hero-4", "hero-5", "hero-6", "hero-7"];
