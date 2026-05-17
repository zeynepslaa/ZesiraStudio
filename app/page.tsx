"use client";

import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Crown,
  Download,
  Gem,
  Heart,
  Layers3,
  Map,
  Music2,
  Sparkles,
  Star,
  UsersRound
} from "lucide-react";
import { CustomCursor } from "@/components/cursor";
import { EditorialVisual } from "@/components/editorial-visual";
import { motion, useScroll, useTransform } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import { characters, diaryPosts, districts, downloads, timeline } from "@/data/studio";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const patreonTiers = [
  {
    tier: "Atelier",
    detail: "early screenshots, CC notes, monthly diary",
    Icon: Gem
  },
  {
    tier: "Household",
    detail: "save beta, exclusive Sims, relationship graph",
    Icon: Star
  },
  {
    tier: "Archive",
    detail: "member-only worlds, roadmap previews, full collections",
    Icon: Layers3
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.25]);

  return (
    <main className="relative overflow-hidden">
      <CustomCursor />
      <Navbar />

      <section className="relative min-h-[100svh] overflow-hidden px-4 pb-12 pt-28 md:pt-36">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute left-[6%] top-24 h-72 w-72 rounded-full bg-champagne/10 blur-3xl" />
          <div className="absolute right-[10%] top-16 h-96 w-96 rounded-full bg-sage/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-charcoal to-transparent" />
        </motion.div>

        <div className="section-shell grid min-h-[calc(100svh-9rem)] items-center gap-10 lg:-mt-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne/25 bg-porcelain/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-champagne/85 backdrop-blur">
              <Sparkles size={14} />
              Not just CC. A living universe.
            </div>
            <h1 className="text-balance font-display text-6xl font-semibold leading-[0.85] text-porcelain sm:text-7xl md:text-8xl xl:text-[8.5rem]">
              Zesira Studio
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-fog md:text-xl">
              A cinematic Sims creator studio where households, builds, scandals, interiors,
              timelines, and downloadable stories move like one polished world.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#world"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-porcelain px-6 py-4 text-sm font-semibold text-espresso transition hover:bg-champagne"
              >
                Enter The World
                <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
              </a>
              <a
                href="#downloads"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-porcelain/14 bg-porcelain/6 px-6 py-4 text-sm font-semibold text-porcelain backdrop-blur transition hover:border-champagne/45 hover:bg-porcelain/10"
              >
                Download Collection
                <Download size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[560px] lg:min-h-[680px]"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 w-[70%]"
            >
              <EditorialVisual
                label="Magnolia Quarter"
                tone="save file chapter"
                variant="portrait"
                className="rounded-[2.25rem]"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute bottom-14 left-0 w-[54%]"
            >
              <EditorialVisual label="Mira Vale" tone="character arc" />
            </motion.div>
            <div className="glass-line absolute bottom-0 right-6 w-[62%] rounded-[1.75rem] p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-champagne/75">
                    Currently
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none text-porcelain">
                    12 households active
                  </p>
                </div>
                <UsersRound className="text-champagne" />
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-porcelain/8">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.4, delay: 0.5 }}
                  className="h-full rounded-full bg-champagne"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="world" className="py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Featured Universe"
            title="A save file with memory, mood, and consequences."
            body="Each district has playable households, social pressure, businesses, future updates, and relationship changes that can be followed like a prestige series."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {districts.map((district, index) => (
              <motion.article
                key={district.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="group glass-line rounded-[1.75rem] p-5 transition duration-500 hover:-translate-y-1 hover:border-champagne/30 hover:bg-porcelain/8"
              >
                <EditorialVisual
                  label={district.name}
                  tone={district.mood}
                  variant="wide"
                  className="rounded-[1.25rem]"
                />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl font-semibold text-porcelain">
                      {district.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-fog">{district.lore}</p>
                  </div>
                  <Map className="mt-1 shrink-0 text-champagne" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {district.businesses.map((business) => (
                    <span
                      key={business}
                      className="rounded-full border border-porcelain/10 px-3 py-1.5 text-xs text-fog"
                    >
                      {business}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-champagne/70">
                  {district.activeHouseholds} active households
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="characters" className="py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Character Spotlights"
            title="Sims introduced like people you already almost know."
            body="Cards are built for portraits, traits, favorites, relationships, status updates, and hover lore so every Sim can become part of a larger emotional system."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {characters.map((character, index) => (
              <motion.article
                key={character.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-porcelain/10 bg-porcelain/[0.045] p-4 shadow-editorial"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${character.palette} opacity-50`} />
                <div className="relative">
                  <EditorialVisual
                    label={character.name}
                    tone={character.imageTone}
                    className="rounded-[1.25rem]"
                  />
                  <div className="pt-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-champagne/75">
                      {character.household}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-porcelain">
                      {character.role}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-fog">{character.lore}</p>
                    <p className="mt-4 rounded-2xl border border-champagne/18 bg-charcoal/25 p-3 text-sm italic leading-6 text-cream">
                      Currently {character.status}.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span
                          key={trait}
                          className="rounded-full bg-porcelain/10 px-3 py-1 text-xs text-porcelain"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 translate-y-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs uppercase tracking-[0.22em] text-champagne/75">
                        Hidden Details
                      </p>
                      <p className="mt-2 text-xs leading-6 text-fog">
                        {character.favorites.join(" / ")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="builds" className="py-24 md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Build Showcase"
              title="Lots that carry story, not just furniture."
              body="Each build module supports lot info, galleries, before/after moments, downloadable packages, and the narrative reason the space matters."
            />
            <div className="mt-8 grid gap-3">
              {["Luna Supper Club", "Vale Atelier", "Sable Pier Rental"].map((build) => (
                <div
                  key={build}
                  className="flex items-center justify-between rounded-2xl border border-porcelain/10 bg-porcelain/[0.045] p-4"
                >
                  <span className="font-display text-2xl text-porcelain">{build}</span>
                  <ArrowUpRight size={18} className="text-champagne" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid gap-5 sm:grid-cols-2">
            <EditorialVisual
              label="Before"
              tone="abandoned cinema shell"
              variant="wide"
              className="min-h-72"
            />
            <EditorialVisual
              label="After"
              tone="private dining balcony"
              variant="wide"
              className="min-h-72 sm:mt-16"
            />
            <div className="glass-line rounded-[1.75rem] p-6 sm:col-span-2">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-champagne/75">
                    Featured Drop
                  </p>
                  <h3 className="mt-2 font-display text-4xl text-porcelain">
                    Luna Supper Club
                  </h3>
                </div>
                <div className="flex gap-3 text-sm text-fog">
                  <span className="rounded-full border border-porcelain/10 px-4 py-2">
                    30x20
                  </span>
                  <span className="rounded-full border border-porcelain/10 px-4 py-2">
                    Restaurant
                  </span>
                  <span className="rounded-full border border-porcelain/10 px-4 py-2">
                    Early Access
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="timeline" className="py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Living World System"
            title="A timeline that makes the save feel alive between uploads."
            body="Relationship shifts, lot openings, seasonal eras, vacations, businesses, and household changes can all be published as immersive world events."
            align="center"
          />

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-champagne via-porcelain/15 to-transparent md:left-1/2" />
            {timeline.map((event, index) => (
              <motion.article
                key={event.title}
                {...fadeUp}
                className={`relative mb-8 grid gap-5 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                }`}
              >
                <div className="ml-10 rounded-[1.5rem] border border-porcelain/10 bg-porcelain/[0.045] p-5 shadow-glow backdrop-blur md:ml-0">
                  <div className="flex items-center gap-3 text-champagne">
                    <CalendarDays size={17} />
                    <span className="text-xs uppercase tracking-[0.26em]">{event.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-porcelain">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-fog">{event.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-porcelain/8 px-3 py-1 text-xs text-fog">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute left-2.5 top-6 h-3.5 w-3.5 rounded-full border border-champagne bg-charcoal md:left-[calc(50%-7px)]" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="downloads" className="py-24 md:py-32">
        <div className="section-shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Download Center"
              title="Organized drops with premium release energy."
              body="Sims, builds, CC collections, save files, tray files, and future mods can live inside one clean expandable system."
            />
            <div className="flex rounded-full border border-porcelain/10 bg-porcelain/5 p-1 text-sm text-fog">
              {["All", "Sims", "Builds", "Save"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className="rounded-full px-4 py-2 transition first:bg-porcelain first:text-espresso hover:text-porcelain"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {downloads.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-porcelain/10 bg-porcelain/[0.045] p-5 transition hover:-translate-y-1 hover:border-champagne/30 hover:bg-porcelain/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-champagne/15 px-3 py-1 text-xs font-semibold text-champagne">
                    {item.type}
                  </span>
                  <Download size={18} className="text-fog" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-porcelain">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-fog">{item.detail}</p>
                <div className="mt-6 flex items-center justify-between border-t border-porcelain/10 pt-4 text-xs uppercase tracking-[0.18em] text-fog/80">
                  <span>{item.tier}</span>
                  <span>{item.stats}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="patreon" className="py-24 md:py-32">
        <div className="section-shell overflow-hidden rounded-[2rem] border border-champagne/20 bg-porcelain/[0.06] p-6 shadow-editorial md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-champagne/15 px-4 py-2 text-xs uppercase tracking-[0.26em] text-champagne">
                <Crown size={15} />
                Creator Support
              </div>
              <h2 className="font-display text-5xl font-semibold leading-[0.95] text-porcelain md:text-7xl">
                Support the world before it becomes public.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-fog">
                Patreon becomes the intimate studio room: early save chapters, private previews,
                creator diary notes, locked builds, roadmap polls, and member-only lore.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-champagne px-6 py-4 text-sm font-semibold text-espresso transition hover:bg-porcelain"
              >
                Join Patreon
                <Heart size={16} />
              </a>
            </div>
            <div className="grid gap-4">
              {patreonTiers.map(({ tier, detail, Icon }) => (
                <div
                  key={tier}
                  className="rounded-[1.25rem] border border-porcelain/10 bg-charcoal/35 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-3xl text-porcelain">{tier}</h3>
                    <Icon size={18} className="text-champagne" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-fog">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="diary" className="py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Creator Diary"
            title="A journal that turns development into part of the story."
            body="Behind-the-scenes posts, gameplay chapters, CC finds, moodboards, and planning notes create a reason to return even between download releases."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {diaryPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-[1.5rem] border border-porcelain/10 bg-porcelain/[0.045] p-6 transition hover:border-champagne/30 hover:bg-porcelain/8"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-champagne/75">
                  {post.category}
                </p>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-none text-porcelain">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-fog">{post.excerpt}</p>
                <div className="mt-7 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-fog/75">
                  <span>{post.readTime}</span>
                  <ArrowUpRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-porcelain/10 py-10">
        <div className="section-shell flex flex-col gap-4 text-sm text-fog/75 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl text-porcelain">Zesira Studio</p>
          <div className="flex flex-wrap gap-4">
            <span>Soft luxury Sims storytelling</span>
            <span>Modular creator platform</span>
            <span>2026</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-full border border-porcelain/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-fog transition hover:text-porcelain md:self-auto"
          >
            <Music2 size={14} />
            Sound Off
          </button>
        </div>
      </footer>
    </main>
  );
}
