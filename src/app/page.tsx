import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand & Web Designer in Whitby, Durham Region, Ontario",
  description: "Anneliese Designs is a creative branding and web design studio in Whitby, Ontario, serving Durham Region businesses with brand identity, graphic design, web design, and strategic writing.",
  alternates: { canonical: "https://anneliesedesigns.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Anneliese Designs",
  description: "Creative branding and web design studio in Whitby, Ontario serving Durham Region businesses.",
  url: "https://anneliesedesigns.com",
  email: "contact@anneliesedesigns.com",
  founder: "Vanessa Witkowski",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Corridale Ave.",
    addressLocality: "Whitby",
    addressRegion: "ON",
    postalCode: "L1M 2E8",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Whitby" },
    { "@type": "AdministrativeArea", name: "Durham Region" },
    { "@type": "Province", name: "Ontario" },
  ],
  serviceType: [
    "Brand Identity",
    "Graphic Design",
    "Web Design",
    "Strategic Writing",
    "Content Strategy",
    "Information Architecture",
    "Social Media Design",
  ],
  sameAs: [
    "https://www.linkedin.com/in/anneliesedesigns/",
    "https://www.facebook.com/AnnelieseDesign",
    "https://www.instagram.com/anneliesedesigns/",
    "https://ca.pinterest.com/anneliesedesign/",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="w-full pt-10 pb-6 flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="Anneliese Designs Logo"
          width={90}
          height={90}
        />
        <p className="mt-3 tracking-[0.38em] uppercase" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "23px", color: "#000" }}>
          Anneliese Designs
        </p>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 text-center">

        {/* Hero */}
        <section className="py-12">
          <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-cambo)", fontWeight: 700, color: "#444" }}>
            Welcome to Anneliese Designs,<br />
            Where creativity is fun, full of heart, and always a little inspiring.<br />
            Where your visions are brought to life with warmth, color, and purpose!
          </p>
        </section>

        {/* Who am I */}
        <IllustrationDivider src="/images/icon-1.png" alt="Colorful creative city illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-cambo)", color: "#1a1a1a" }}>
            Who am I?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            Well, I&rsquo;m Vanessa, the owner of Anneliese Designs &ndash; your creative go-to
            with decades of experience under my belt. I&rsquo;m here to infuse projects
            with the wisdom of time and the spirit of innovation.
          </p>
        </section>

        {/* Philosophy */}
        <IllustrationDivider src="/images/icon-2.png" alt="Meditating figure illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-cambo)", color: "#1a1a1a" }}>
            My philosophy
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            is as simple as a smile:<br />
            Be Kind, Be Grateful,<br />
            Love What You Do,<br />
            and Be True.
          </p>
        </section>

        {/* Nature */}
        <IllustrationDivider src="/images/icon-3.png" alt="Nature and rainbow illustration" />
        <section className="py-10">
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            I&rsquo;ve got a soft spot<br />
            for nature, wellness,<br />
            and keeping things as pure<br />
            as the fresh morning dew.
          </p>
        </section>

        {/* Skills */}
        <IllustrationDivider src="/images/pencil.png" alt="Colorful lightbulb illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-cambo)", color: "#1a1a1a" }}>
            My skills?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            They&rsquo;re as diverse as a rainbow: think Brand Identity, Strategic Writing,
            Brand and Content Strategy, Information Architecture, Graphic Design, AI Visibility, Web
            Design, and a whole bunch of other creative goodies, from ads to social media posts.
          </p>
        </section>

        {/* Exciting part */}
        <IllustrationDivider src="/images/banner.png" alt="Colorful creative city illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-cambo)", color: "#1a1a1a" }}>
            Here&rsquo;s the exciting part:
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            I work one-on-one with successful businesses and organizations who know
            their vision but need a skilled, flexible creative partner to bring it to life.
            Whether it&rsquo;s a specific design project, a branding refresh, or something that&rsquo;s
            tricky to handle in-house, I step in to deliver thoughtful, high-quality creative
            work &mdash; without the overhead of a large agency. My goal is to make your life
            easier, your projects smoother, and your brand excel, all while keeping our
            collaboration effortless and enjoyable.
          </p>
        </section>

        {/* As my client */}
        <IllustrationDivider src="/images/icon-5.png" alt="Joyful figure with color splash illustration" />
        <section className="py-10">
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            <strong>As my client,</strong>&nbsp;you&rsquo;ll get more than just tasks completed &mdash; you&rsquo;ll experience a
            seamless, creative partnership where clarity, strategy, and artistry come together.
          </p>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "#444" }}>
            I&rsquo;m here to save you time, make your ideas shine, elevate your brand, and bring
            your vision into vivid, memorable reality.
          </p>
        </section>

        {/* Closing logo */}
        <div className="flex flex-col items-center py-12 gap-3">
          <Image src="/images/logo.png" alt="Anneliese Designs" width={100} height={100} />
          <p className="tracking-[0.38em] uppercase" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: "23px", color: "#000" }}>
            Anneliese Designs
          </p>
          <p className="mt-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", color: "#888" }}>
            Creating the world you dream!
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6" style={{ backgroundColor: "#1a1a1a", color: "#ccc", fontFamily: "var(--font-lato)", fontWeight: 500 }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">

          {/* CTA */}
          <div className="text-center py-6">
            <p className="text-sm mb-4" style={{ color: "#ccc" }}>Ready to bring your vision to life?</p>
            <a
              href="mailto:contact@anneliesedesigns.com"
              className="inline-block px-8 py-3 tracking-wide uppercase"
              style={{ backgroundColor: "#666", color: "#fff", fontFamily: "var(--font-cambo)", fontWeight: 700, fontSize: "16px", borderRadius: "8px" }}
            >
              Let&rsquo;s Work Together
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-10 text-sm text-left">
            <div>
              <p className="uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-lato)", fontSize: "14px", fontWeight: 700, color: "#fff" }}>Address</p>
              <p>23 Corridale Ave.</p>
              <p>Whitby, ON, L1M 2E8</p>
              <p>Canada</p>
            </div>
            <div>
              <p className="uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-lato)", fontSize: "14px", fontWeight: 700, color: "#fff" }}>Availability</p>
              <p>Currently accepting clients.</p>
            </div>
            <div>
              <p className="uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-lato)", fontSize: "14px", fontWeight: 700, color: "#fff" }}>Contact</p>
              <p>
                <a href="mailto:contact@anneliesedesigns.com" className="hover:underline" style={{ color: "#ccc" }}>
                  contact@anneliesedesigns.com
                </a>
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-3 flex-wrap">
            <SocialIcon href="https://www.linkedin.com/in/anneliesedesigns/" label="LinkedIn" bg="#0077b5" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>} />
          </div>

          <div className="flex justify-center gap-6 text-xs">
            <Link href="/privacy" style={{ color: "#888" }} className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" style={{ color: "#888" }} className="hover:underline">Terms of Service</Link>
          </div>

          <p className="text-xs" style={{ color: "#666" }}>
            &copy; 2025 ANNELIESE DESIGNS, ALL RIGHTS RESERVED.
          </p>

        </div>
      </footer>
    </div>
  );
}

function IllustrationDivider({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center my-1">
      <Image
        src={src}
        alt={alt}
        width={325}
        height={325}
        className="object-contain"
      />
    </div>
  );
}

function SocialIcon({ href, label, bg, icon }: { href: string; label: string; bg: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      {icon}
    </a>
  );
}
