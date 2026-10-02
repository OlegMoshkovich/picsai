"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SiteNavbar from "./components/PicsaiNavbar";

import SiteFooter from "./components/SiteFooter";


const SPEAKERS26 = [
  {
    initials: "YA",
    name: "Yasin Abbasi Yadkori",
    title: "Principal Research Scientist",
    affiliation: "The AIR Lab",
    photo: "/team_photo/Yasin.png?v=2",
    scholar: "https://scholar.google.com/citations?user=-D0EgMIAAAAJ",
  },
  {
    initials: "GN",
    name: "Gergely Neu",
    title: "Associate Professor",
    affiliation: "Universitat Pompeu Fabra",
    photo: "/picsai/Gergely.jpg",
    scholar: "https://scholar.google.com/citations?user=uz27G84AAAAJ",
  },
  {
    initials: "IK",
    name: "Ilja Kuzborskij",
    title: "Research Scientist",
    affiliation: "Google DeepMind",
    photo: "/picsai/Ilja.jpg",
    scholar: "https://scholar.google.com/citations?user=4Io_CtIAAAAJ",
  },
  {
    initials: "NM",
    name: "Nishant Mehta",
    title: "Associate Professor",
    affiliation: "University of Victoria",
    photo: "/picsai/Nishant.jpg",
    scholar: "https://scholar.google.com/citations?user=YGeqVQkAAAAJ",
  },
  {
    initials: "HK",
    name: "Hani Kim",
    title: "Artist",
    affiliation: "Independent artist",
    photo: "/picsai/Hani.jpg",
    scholar: "",
  },
  {
    initials: "SV",
    name: "Sattar Vakili",
    title: "Associate Professor",
    affiliation: "University College London",
    photo: "/picsai/Sattar.jpg",
    scholar: "https://scholar.google.com/citations?user=N9xs8w0AAAAJ",
  },
  {
    initials: "AA",
    name: "Anna Aristova",
    title: "Artist",
    affiliation: "Royal Colleg of Art",
    photo: "/team_photo/Anna.png?v=2",
    scholar: "",
  },
  {
    initials: "OM",
    name: "Oleg Moshkovich",
    title: "Co-founder",
    affiliation: "The AIR Lab",
    photo: "/team_photo/Oleg_Moshkovich.png?v=2",
    scholar: "",
  },
] as const;
const SPEAKERS25 = [
  {
    initials: "YA",
    name: "Yasin Abbasi Yadkori",
    title: "Principal Research Scientist",
    affiliation: "Sapient Intellegence",
    photo: "/team_photo/Yasin.png?v=2",
    scholar: "https://scholar.google.com/citations?user=-D0EgMIAAAAJ",
  },
  {
    initials: "GN",
    name: "Gergely Neu",
    title: "Associate Professor",
    affiliation: "Universitat Pompeu Fabra",
    photo: "/picsai/Gergely.jpg",
    scholar: "https://scholar.google.com/citations?user=uz27G84AAAAJ",
  },
  {
    initials: "IK",
    name: "Ilja Kuzborskij",
    title: "Research Scientist",
    affiliation: "Google DeepMind",
    photo: "/picsai/Ilja.jpg",
    scholar: "https://scholar.google.com/citations?user=4Io_CtIAAAAJ",
  },
  {
    initials: "US",
    name: "Umut Simsekli",
    title: "Research Director",
    affiliation: "Inria Paris",
    photo: "/picsai/Umut.png",
    scholar: "https://scholar.google.com/citations?user=CuArAkgAAAAJ",
  },
  {
    initials: "FA",
    name: "Francesco Arzani",
    title: "Research Scientist",
    affiliation: "INRIA Paris",
    photo: "/picsai/Francesco.png",
    scholar: "https://scholar.google.com/citations?user=xRDb0O8AAAAJ",
  },
  {
    initials: "WK",
    name: "Wojciech Kotłowski",
    title: "Associate Professor",
    affiliation: "Poznań University of Technology",
    photo: "/picsai/Wojciech.jpg",
    scholar: "https://scholar.google.com/citations?user=-75xQzMAAAAJ",
  },
  {
    initials: "AA",
    name: "Anna Aristova",
    title: "Artist",
    affiliation: "Royal Colleg of Art",
    photo: "/team_photo/Anna.png?v=2",
    scholar: "",
  },
  {
    initials: "RG",
    name: "Roza Gazarian",
    title: "Artist",
    affiliation: "A Space",
    photo: "/picsai/Roza.jpg",
    scholar: "",
  },
] as const;
const SPEAKERS24 = [
  {
    initials: "YA",
    name: "Yasin Abbasi Yadkori",
    title: "Research Scientist",
    affiliation: "Deep Mind",
    photo: "/team_photo/Yasin.png?v=2",
    scholar: "https://scholar.google.com/citations?user=-D0EgMIAAAAJ",
  },
  {
    initials: "GN",
    name: "Gergely Neu",
    title: "Associate Professor",
    affiliation: "Universitat Pompeu Fabra",
    photo: "/picsai/Gergely.jpg",
    scholar: "https://scholar.google.com/citations?user=uz27G84AAAAJ",
  },
  {
    initials: "IK",
    name: "Ilja Kuzborskij",
    title: "Research Scientist",
    affiliation: "Google DeepMind",
    photo: "/picsai/Ilja.jpg",
    scholar: "https://scholar.google.com/citations?user=4Io_CtIAAAAJ",
  },
  {
    initials: "FA",
    name: "Francesco Arzani",
    title: "Research Scientist",
    affiliation: "INRIA Paris",
    photo: "/picsai/Francesco.png",
    scholar: "https://scholar.google.com/citations?user=xRDb0O8AAAAJ",
  },
  {
    initials: "AM",
    name: "Antoine Moulin",
    title: "PhD Researcher",
    affiliation: "Universitat Pompeu Fabra",
    photo: "/picsai/Antoine.jpg",
    scholar: "https://scholar.google.com/citations?user=W6d2vtMAAAAJ",
  },
  {
    initials: "RG",
    name: "Roza Gazarian",
    title: "Artist",
    affiliation: "Artist",
    photo: "/picsai/Roza.jpg",
    scholar: "",
  },
  {
    initials: "IM",
    name: "Inga Marchuk",
    title: "Artist",
    affiliation: "Artist",
    photo: "/picsai/Inga.jpg",
    scholar: "",
  },
  {
    initials: "AA",
    name: "Anna Aristova",
    title: "Artist",
    affiliation: "Royal Colleg of Art",
    photo: "/team_photo/Anna.png?v=2",
    scholar: "",
  },
] as const;


const SCHEDULE_2024 = [
  { day: "Monday, September 23", events: [
    { time: "10:00", title: "Opening Remark", speaker: "" },
    { time: "10:00 – 13:30", title: "Introduction to Quantum Computing pt. 1", speaker: "Francesco Arzani" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Introduction to Quantum Computing pt. 2", speaker: "Francesco Arzani" },
    { time: "17:30 – 18:30", title: "Art therapy", speaker: "Anna Aristova" },
  ]},
  { day: "Tuesday, September 24", events: [
    { time: "10:00 – 13:30", title: "Introduction to PAC-Bayesian generalization", speaker: "Ilja Kuzborskij" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Online-to-PAC conversions", speaker: "Gergely Neu" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Roza Gazarian" },
  ]},
  { day: "Wednesday, September 25", events: [
    { time: "10:00 – 11:30", title: "Online learning", speaker: "Antoine Moulin" },
    { time: "11:30 – 13:30", title: "Open problems in Quantum Tomography", speaker: "Francesco Arzani" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Visit to the ancient Greek temples of Paestum", speaker: "" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Inga Marchuk" },
  ]},
  { day: "Thursday, September 26", events: [
    { time: "10:00 – 13:30", title: "Optimal transport distances for stochastic processes", speaker: "Gergely Neu" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Bandits and reinforcement learning", speaker: "Yasin Abbasi Yadkori" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Anna Aristova" },
  ]},
  { day: "Friday, September 27", events: [
    { time: "10:00 – 13:30", title: "Open problems session", speaker: "" },
    { time: "13:30", title: "Closing remarks", speaker: "" },
  ]},
];
const SCHEDULE_2025 = [
  { day: "Monday, September 22", events: [
    { time: "10:00", title: "Opening Remark", speaker: "" },
    { time: "10:00 – 13:30", title: "Introduction to quantum information pt. 1", speaker: "Francesco Arzani" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Introduction to quantum information pt. 2", speaker: "Francesco Arzani" },
    { time: "17:30 – 18:30", title: "Art therapy", speaker: "Anna Aristova" },
  ]},
  { day: "Tuesday, September 23", events: [
    { time: "10:00 – 13:30", title: "Generalization beyond uniform convergence", speaker: "Ilja Kuzborskij" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Heavy tails and generalization", speaker: "Umut Simsekli" },
    { time: "17:30 – 18:30", title: "Drawing session", speaker: "Roza Gazarian" },
  ]},
  { day: "Wednesday, September 24", events: [
    { time: "10:00 – 13:30", title: "Online learning", speaker: "Wojciech Kotłowski" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Visit to Alanya Castle", speaker: "" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Roza Gazarian" },
  ]},
  { day: "Thursday, September 25", events: [
    { time: "10:00 – 13:30", title: "Online-to-PAC conversions", speaker: "Gergely Neu" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Bandits and reinforcement learning", speaker: "Yasin Abbasi Yadkori" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Anna Aristova" },
  ]},
  { day: "Friday, September 26", events: [
    { time: "10:00 – 13:30", title: "Open problems session", speaker: "" },
    { time: "13:30", title: "Closing remarks", speaker: "" },
  ]},
];
const SCHEDULE_2026 = [
  { day: "Monday, September 21", events: [
    { time: "10:00", title: "Opening Remark", speaker: "" },
    { time: "10:00 – 13:30", title: "Learning theory for language models pt. 1", speaker: "Ilja Kuzborskij" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Learning theory for language models pt. 2", speaker: "Ilja Kuzborskij" },
    { time: "17:30 – 18:30", title: "Art therapy", speaker: "Anna Aristova" },
  ]},
  { day: "Tuesday, September 22", events: [
    { time: "10:00 – 13:30", title: "Bandits and Bayesian optimization", speaker: "Sattar Vakili" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Online learning and regret", speaker: "Nishant Mehta" },
    { time: "17:30 – 18:30", title: "Studio session", speaker: "Hani Kim" },
  ]},
  { day: "Wednesday, September 23", events: [
    { time: "10:00 – 11:30", title: "Perspective studies", speaker: "Oleg Moshkovich" },
    { time: "11:30 – 13:30", title: "Open problems in learning theory", speaker: "Yasin Abbasi Yadkori" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Visit to Alanya Castle", speaker: "" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Hani Kim" },
  ]},
  { day: "Thursday, September 24", events: [
    { time: "10:00 – 13:30", title: "Optimal transport distances for stochastic processes", speaker: "Gergely Neu" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Stability and generalization bounds", speaker: "Ilja Kuzborskij" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Anna Aristova" },
  ]},
  { day: "Friday, September 25", events: [
    { time: "10:00 – 13:30", title: "Working session", speaker: "" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Studio critique", speaker: "Anna Aristova" },
  ]},
  { day: "Monday, September 28", events: [
    { time: "10:00 – 13:30", title: "Reinforcement learning", speaker: "Yasin Abbasi Yadkori" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Kernel methods and bandits", speaker: "Sattar Vakili" },
    { time: "17:30 – 18:30", title: "Studio session", speaker: "Hani Kim" },
  ]},
  { day: "Tuesday, September 29", events: [
    { time: "10:00 – 13:30", title: "Statistical learning theory", speaker: "Nishant Mehta" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Online-to-PAC conversions", speaker: "Gergely Neu" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Anna Aristova" },
  ]},
  { day: "Wednesday, September 30", events: [
    { time: "10:00 – 13:30", title: "Perspective studies, continued", speaker: "Oleg Moshkovich" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Visit to the Alanya shipyard", speaker: "" },
    { time: "17:30 – 18:30", title: "Watercolour studies", speaker: "Hani Kim" },
  ]},
  { day: "Thursday, October 1", events: [
    { time: "10:00 – 13:30", title: "Open problems session", speaker: "" },
    { time: "13:30 – 15:00", title: "Lunch break", speaker: "" },
    { time: "15:00 – 17:30", title: "Open problems, continued", speaker: "" },
  ]},
  { day: "Friday, October 2", events: [
    { time: "10:00 – 13:30", title: "Open problems session", speaker: "" },
    { time: "13:30", title: "Closing remarks", speaker: "" },
  ]},
];

const MOMENTS = {
  2026: { dir: "picsai26", count: 11 },
  2025: { dir: "picsai25", count: 8 },
  2024: { dir: "picsai27", count: 6 },
} as const;

type MomentYear = keyof typeof MOMENTS;

function shiftMoment(
  current: { year: MomentYear; index: number } | null,
  delta: number
) {
  if (!current) return current;
  const { count } = MOMENTS[current.year];
  const index = ((current.index - 1 + delta) % count + count) % count + 1;
  return { year: current.year, index };
}

export default function PicsaiPage() {
  const pageScrollRef = useRef<HTMLDivElement>(null);
  const [scheduleYear, setScheduleYear] = useState<number | null>(null);
  const [modalPhoto, setModalPhoto] = useState<{ year: MomentYear; index: number } | null>(null);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  useEffect(() => {
    if (!modalPhoto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalPhoto(null);
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        setModalPhoto((current) => shiftMoment(current, e.key === "ArrowRight" ? 1 : -1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalPhoto]);

  return (
    <div
      ref={pageScrollRef}
      className="h-dvh overflow-y-auto overflow-x-hidden overscroll-none bg-[#E9E8DE]"
    >
      <div className="flex flex-col md:min-h-dvh">
        <SiteNavbar />

        <section className="flex flex-col gap-16 px-4 pb-16 pt-12 sm:px-6 md:flex-1 md:gap-0 md:px-8 md:pb-14 md:pt-4 lg:px-8">
          <div className="mt-5 md:mt-0 md:flex md:flex-1 md:items-center">
            <div className="mx-auto w-full max-w-7xl md:-translate-y-10">
              <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-20 lg:gap-28">
                <div>
                  <h1 className="font-test-american-grotesk text-[1.85rem] font-bold leading-[1.42] tracking-tight text-black font-sans sm:text-4xl md:text-5xl md:leading-[1.2] lg:text-[3.25rem]">
                    Probability, Information, Combinatorics and AI Symposium
                  </h1>
                  <div className="mt-6 flex w-full flex-nowrap items-center gap-1 sm:gap-5">
                    {[

                      { src: "/picsaiLogo/inria.png", alt: "INRIA" },
                      { src: "/picsaiLogo/rca.png", alt: "Royal College of Art" },
                      { src: "/picsaiLogo/deep mind.png", alt: "Google DeepMind" },
                      { src: "/picsaiLogo/upf.png", alt: "Universitat Pompeu Fabra" },
                    ].map((logo) => (
                      <Image
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        width={300}
                        height={70}
                        className="h-6 w-auto max-w-[calc((100%-1rem)/5)] object-contain sm:h-8.5 sm:max-w-none"
                        unoptimized
                      />
                    ))}
                  </div>
                </div>
                <div className="md:max-w-lg md:pt-2">
                  <p className="font-serif text-base leading-relaxed text-black/80">
                    A gathering for researchers and practitioners exploring the interplay between the foundational fields of machine intelligence, through invited talks by leading experts.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-black/20 pt-4">
                    <div>
                      <p className="text-[10px] font-sans uppercase tracking-wide text-black/50">
                        Edition
                      </p>
                      <p className="mt-1 font-sans text-xs  text-black sm:text-base">
                        Third
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-sans uppercase tracking-wide text-black/50">
                        Dates
                      </p>
                      <p className="mt-1 font-sans text-xs leading-snug text-black sm:text-base">
                        25.09 to 2.10

                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-sans uppercase tracking-wide text-black/50">
                        Location
                      </p>
                      <p className="mt-1 font-sans text-xs text-black sm:text-base">
                        Alanya, Turkey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              <div className="space-y-4">
                <p
                  className="border-l-4 pl-4 font-serif text-base font-bold leading-snug text-black"
                  style={{ borderColor: "#F05025" }}
                >
                  Four foundational fields
                </p>
                <p className="font-serif text-base leading-relaxed text-black/80">
                  Probability, information theory, combinatorics and artificial intelligence. PICSAI is a focused exploration of how they inform one another.
                </p>

              </div>
              <div className="space-y-4">
                <p
                  className="border-l-4 pl-4 font-serif text-base font-bold leading-snug text-black"
                  style={{ borderColor: "#F05025" }}
                >
                  AI Track: theory and practice.
                </p>
                <p className="font-serif text-base leading-relaxed text-black/80">
                  Theoretical foundations and real-world applications of artificial intelligence, with an emphasis on learning theory, quantum algorithms and language models.
                </p>
              </div>
              <div className="space-y-4">
                <p
                  className="border-l-4 pl-4 font-serif text-base font-bold leading-snug text-black"
                  style={{ borderColor: "#F05025" }}
                >
                  Arts Track: AI and artistic expression.
                </p>
                <p className="font-serif text-base leading-relaxed text-black/80">
                  The intersection of AI and the arts: how the latest developments in machine learning are reshaping artistic expression.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>


      <section
        id="edition-2026"
        className="flex min-h-dvh w-full scroll-mt-0 flex-col bg-[#E9E8DE] px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-10 font-test-american-grotesk text-[1.85rem] font-bold leading-[1.42] tracking-tight text-black font-sans sm:text-4xl md:mb-14 md:text-5xl md:leading-[1.2] lg:text-[3.25rem]">
            Third Edition |  10.2026
          </h2>


          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              <div className="space-y-4 w-full md:col-span-3 md:w-[70%]">
                <p
                  className="border-l-4 pl-4 font-serif text-base font-bold leading-snug text-black"
                  style={{ borderColor: "#F05025" }}
                >
                  2 Weeks in Alanya, Turkey
                </p>
                <p className="font-serif text-base leading-relaxed text-black/80">
                  Two weeks in Alanya on learning theory and language models, with talks from DeepMind, University College London, Universitat Pompeu Fabra and the University of Victoria, and studio work with artists from the Royal College of Art.
                </p>

              </div>
            </div>
            <p className="mb-14 text-[10px] font-sans uppercase tracking-wide text-black/50 md:mb-10 mt-10">
            Invited participants 2026
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-16">
            {SPEAKERS26.map((speaker) => (
              <div key={speaker.name} className="flex flex-col items-center text-center">
                {speaker.scholar ? (
                  <a
                    href={speaker.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mb-4 block h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28"
                    style={{ backgroundColor: "#C4B9A8" }}
                  >
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="112px"
                      unoptimized
                      className="object-cover object-[center_28%]"
                    />
                  </a>
                ) : (
                  <div
                    className="relative mb-4 h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28"
                    style={{ backgroundColor: "#C4B9A8" }}
                  >
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="112px"
                      unoptimized
                      className="object-cover object-[center_28%]"
                    />
                  </div>
                )}
                {speaker.scholar ? (
                  <a
                    href={speaker.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-bold text-black hover:underline"
                  >
                    {speaker.name}
                  </a>
                ) : (
                  <p className="font-sans text-sm font-bold text-black">{speaker.name}</p>
                )}
                <p className="mt-0.5 font-sans text-xs text-black/50">{speaker.title}</p>
                <p className="mt-0.5 font-serif text-sm italic text-black/60">
                  {speaker.affiliation}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto w-full max-w-7xl mt-8 border-t border-black/10 pt-4">
            <button
              onClick={() => setScheduleYear((v) => (v === 2026 ? null : 2026))}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-test-american-grotesk text-lg font-bold tracking-tight text-black font-sans sm:text-xl underline">
                Schedule | 2026
              </span>
              <span className={`text-xl text-black/50 transition-transform duration-300 ${scheduleYear === 2026 ? "rotate-180" : ""}`}>
                ↓
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: scheduleYear === 2026 ? "9999px" : "0px" }}
            >
              <div className="pt-8 pb-4">
                {SCHEDULE_2026.map((dayBlock) => (
                  <div key={dayBlock.day} className="mb-8">
                    <p className="mb-3 text-[10px] font-sans uppercase tracking-wide text-black/50">
                      {dayBlock.day}
                    </p>
                    <div className="border-t border-black/10">
                      {dayBlock.events.map((event, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[140px_1fr] gap-4 border-b border-black/10 py-3 md:grid-cols-[180px_1fr_200px]"
                        >
                          <p className="font-sans text-xs text-black/50 pt-0.5">{event.time}</p>
                          <p className="font-serif text-sm text-black">{event.title}</p>
                          {event.speaker && (
                            <p className="hidden font-serif text-sm italic text-black/60 md:block md:text-right">
                              {event.speaker}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery — PICSAI 2026 */}
          <div className="mt-16">
            <p className="mb-4 text-[10px] font-sans uppercase tracking-wide text-black/50">
              Moments | 2026
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {Array.from({ length: MOMENTS[2026].count }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className="relative h-64 w-96 flex-none overflow-hidden cursor-zoom-in"
                  onClick={() => setModalPhoto({ year: 2026, index: n })}
                >
                  <Image
                    src={`/picsai26/${n}.jpeg`}
                    alt={`PICSAI 2026 — photo ${n}`}
                    fill
                    sizes="384px"
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="edition-2025"
        className="flex min-h-dvh w-full scroll-mt-0 flex-col bg-[#E9E8DE] px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-10 font-test-american-grotesk text-[1.85rem] font-bold leading-[1.42] tracking-tight text-black font-sans sm:text-4xl md:mb-14 md:text-5xl md:leading-[1.2] lg:text-[3.25rem]">
          Second Edition |  09.2025
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              <div className="space-y-4 w-full md:col-span-3 md:w-[70%]">
                <p
                  className="border-l-4 pl-4 font-serif text-base font-bold leading-snug text-black"
                  style={{ borderColor: "#F05025" }}
                >
                  1 Week in Alanya, Turkey
                </p>
                <p className="font-serif text-base leading-relaxed text-black/80">
                  A week in Alanya on generalization and quantum information, with talks from Inria, DeepMind and Universitat Pompeu Fabra, and drawing sessions with invited artists.
                </p>

              </div>
          </div>
          <p className="mb-14 text-[10px] font-sans uppercase tracking-wide text-black/50 md:mb-16 mt-10">
            Invited participants 2026
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-16">
            {SPEAKERS25.map((speaker) => (
              <div key={speaker.name} className="flex flex-col items-center text-center">
                {speaker.scholar ? (
                  <a
                    href={speaker.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mb-4 block h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28"
                    style={{ backgroundColor: "#C4B9A8" }}
                  >
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="112px"
                      unoptimized
                      className="object-cover object-[center_28%]"
                    />
                  </a>
                ) : (
                  <div
                    className="relative mb-4 h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28"
                    style={{ backgroundColor: "#C4B9A8" }}
                  >
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="112px"
                      unoptimized
                      className="object-cover object-[center_28%]"
                    />
                  </div>
                )}
                {speaker.scholar ? (
                  <a
                    href={speaker.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-bold text-black hover:underline"
                  >
                    {speaker.name}
                  </a>
                ) : (
                  <p className="font-sans text-sm font-bold text-black">{speaker.name}</p>
                )}
                <p className="mt-0.5 font-sans text-xs text-black/50">{speaker.title}</p>
                <p className="mt-0.5 font-serif text-sm italic text-black/60">
                  {speaker.affiliation}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto w-full max-w-7xl mt-8 border-t border-black/10 pt-4">
            <button
              onClick={() => setScheduleYear((v) => (v === 2025 ? null : 2025))}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-test-american-grotesk text-lg font-bold tracking-tight text-black font-sans sm:text-xl underline">
                Schedule | 2025
              </span>
              <span className={`text-xl text-black/50 transition-transform duration-300 ${scheduleYear === 2025 ? "rotate-180" : ""}`}>
                ↓
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: scheduleYear === 2025 ? "9999px" : "0px" }}
            >
              <div className="pt-8 pb-4">
                {SCHEDULE_2025.map((dayBlock) => (
                  <div key={dayBlock.day} className="mb-8">
                    <p className="mb-3 text-[10px] font-sans uppercase tracking-wide text-black/50">
                      {dayBlock.day}
                    </p>
                    <div className="border-t border-black/10">
                      {dayBlock.events.map((event, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[140px_1fr] gap-4 border-b border-black/10 py-3 md:grid-cols-[180px_1fr_200px]"
                        >
                          <p className="font-sans text-xs text-black/50 pt-0.5">{event.time}</p>
                          <p className="font-serif text-sm text-black">{event.title}</p>
                          {event.speaker && (
                            <p className="hidden font-serif text-sm italic text-black/60 md:block md:text-right">
                              {event.speaker}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery — PICSAI 2025 */}
          <div className="mt-16">
            <p className="mb-4 text-[10px] font-sans uppercase tracking-wide text-black/50">
              Moments | 2025
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {Array.from({ length: MOMENTS[2025].count }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className="relative h-64 w-96 flex-none overflow-hidden cursor-zoom-in"
                  onClick={() => setModalPhoto({ year: 2025, index: n })}
                >
                  <Image
                    src={`/picsai25/${n}.jpeg`}
                    alt={`PICSAI 2025 — photo ${n}`}
                    fill
                    sizes="384px"
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="edition-2024"
        className="flex min-h-dvh w-full scroll-mt-0 flex-col bg-[#E9E8DE] px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-10 font-test-american-grotesk text-[1.85rem] font-bold leading-[1.42] tracking-tight text-black font-sans sm:text-4xl md:mb-14 md:text-5xl md:leading-[1.2] lg:text-[3.25rem]">
          First Edition |  10.2024
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              <div className="space-y-4 w-full md:col-span-3 md:w-[70%]">
                <p
                  className="border-l-4 pl-4 font-serif text-base font-bold leading-snug text-black"
                  style={{ borderColor: "#F05025" }}
                >
                   1 Week in Pastrum, Italy
                </p>
                <p className="font-serif text-base leading-relaxed text-black/80">
                  A week in Paestum on quantum computing, PAC-Bayesian generalization and optimal transport, with art therapy, watercolour studies and a visit to the Greek temples.
                </p>

              </div>
          </div>
          <p className="mb-14 text-[10px] font-sans uppercase tracking-wide text-black/50 md:mb-16 mt-10">
            Invited participants 2024
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-16">
            {SPEAKERS24.map((speaker) => (
              <div key={speaker.name} className="flex flex-col items-center text-center">
                {speaker.scholar ? (
                  <a
                    href={speaker.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mb-4 block h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28"
                    style={{ backgroundColor: "#C4B9A8" }}
                  >
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="112px"
                      unoptimized
                      className="object-cover object-[center_28%]"
                    />
                  </a>
                ) : (
                  <div
                    className="relative mb-4 h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28"
                    style={{ backgroundColor: "#C4B9A8" }}
                  >
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="112px"
                      unoptimized
                      className="object-cover object-[center_28%]"
                    />
                  </div>
                )}
                {speaker.scholar ? (
                  <a
                    href={speaker.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-bold text-black hover:underline"
                  >
                    {speaker.name}
                  </a>
                ) : (
                  <p className="font-sans text-sm font-bold text-black">{speaker.name}</p>
                )}
                <p className="mt-0.5 font-sans text-xs text-black/50">{speaker.title}</p>
                <p className="mt-0.5 font-serif text-sm italic text-black/60">
                  {speaker.affiliation}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-7xl mt-8 border-t border-black/10 pt-4">
            <button
              onClick={() => setScheduleYear((v) => (v === 2024 ? null : 2024))}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-test-american-grotesk text-lg font-bold tracking-tight text-black font-sans sm:text-xl underline">
                Schedule | 2024
              </span>
              <span className={`text-xl text-black/50 transition-transform duration-300 ${scheduleYear === 2024 ? "rotate-180" : ""}`}>
                ↓
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: scheduleYear === 2024 ? "9999px" : "0px" }}
            >
              <div className="pt-8 pb-4">
                {SCHEDULE_2024.map((dayBlock) => (
                  <div key={dayBlock.day} className="mb-8">
                    <p className="mb-3 text-[10px] font-sans uppercase tracking-wide text-black/50">
                      {dayBlock.day}
                    </p>
                    <div className="border-t border-black/10">
                      {dayBlock.events.map((event, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[140px_1fr] gap-4 border-b border-black/10 py-3 md:grid-cols-[180px_1fr_200px]"
                        >
                          <p className="font-sans text-xs text-black/50 pt-0.5">{event.time}</p>
                          <p className="font-serif text-sm text-black">{event.title}</p>
                          {event.speaker && (
                            <p className="hidden font-serif text-sm italic text-black/60 md:block md:text-right">
                              {event.speaker}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery — PICSAI 2024 */}
          <div className="mt-16">
            <p className="mb-4 text-[10px] font-sans uppercase tracking-wide text-black/50">
              Moments | 2024
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {Array.from({ length: MOMENTS[2024].count }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className="relative h-64 w-96 flex-none overflow-hidden cursor-zoom-in"
                  onClick={() => setModalPhoto({ year: 2024, index: n })}
                >
                  <Image
                    src={`/picsai27/${n}.jpeg`}
                    alt={`PICSAI 2024 — photo ${n}`}
                    fill
                    sizes="384px"
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>



      <SiteFooter />

      {/* Lightbox modal */}
      {modalPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setModalPhoto(null)}
        >
          <button
            className="absolute right-5 top-5 text-white/70 hover:text-white text-3xl leading-none"
            onClick={() => setModalPhoto(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-3 py-2 text-4xl leading-none text-white/80 hover:text-white"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              setModalPhoto((current) => shiftMoment(current, -1));
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-3 py-2 text-4xl leading-none text-white/80 hover:text-white"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              setModalPhoto((current) => shiftMoment(current, 1));
            }}
          >
            ›
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/${MOMENTS[modalPhoto.year].dir}/${modalPhoto.index}.jpeg`}
              alt={`PICSAI ${modalPhoto.year} — photo ${modalPhoto.index}`}
              width={1600}
              height={1200}
              unoptimized
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
