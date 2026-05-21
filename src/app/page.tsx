import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Header */}
      <header className="w-full pt-10 pb-6 flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="Anneliese Designs Logo"
          width={90}
          height={90}
        />
        <p className="mt-3 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-arvo)", color: "#a61c1c" }}>
          Anneliese Designs
        </p>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 text-center">

        {/* Hero */}
        <section className="py-12">
          <h1 className="text-2xl leading-relaxed font-normal" style={{ fontFamily: "var(--font-arvo)", color: "#1a1a1a" }}>
            Welcome to Anneliese Designs,
          </h1>
          <p className="mt-3 text-lg leading-relaxed" style={{ color: "#444" }}>
            Where creativity is fun, full of heart, and always a little inspiring.
          </p>
          <p className="mt-2 text-lg leading-relaxed" style={{ color: "#444" }}>
            Where your visions are brought to life with warmth, color, and purpose!
          </p>
        </section>

        {/* Who am I */}
        <IllustrationDivider src="/images/icon-1.png" alt="Colorful creative city illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-arvo)", color: "#1a1a1a" }}>
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
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-arvo)", color: "#1a1a1a" }}>
            My philosophy
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            is as simple as a smile:
          </p>
          <p className="mt-4 text-base leading-loose" style={{ color: "#444" }}>
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
        <IllustrationDivider src="/images/icon-4.png" alt="Colorful creative profile illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-arvo)", color: "#1a1a1a" }}>
            My skills?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#444" }}>
            They&rsquo;re as diverse as a rainbow &mdash; think Brand Identity, Strategic Writing,
            Brand and Content Strategy, Information Architecture, Graphic Design, Web
            Design, and a whole bunch of other creative goodies, from ads to social media posts.
          </p>
        </section>

        {/* Exciting part */}
        <IllustrationDivider src="/images/banner.png" alt="Colorful creative city illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-arvo)", color: "#1a1a1a" }}>
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
            <strong>As my client,</strong> you&rsquo;ll get more than just tasks completed &mdash; you&rsquo;ll experience a
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
          <p className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-arvo)", color: "#a61c1c" }}>
            Anneliese Designs
          </p>
          <p className="text-sm mt-1" style={{ color: "#888", fontStyle: "italic" }}>
            Creating the world you dream!
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6" style={{ backgroundColor: "#1a1a1a", color: "#ccc" }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">

          <div>
            <p className="text-base tracking-[0.25em] uppercase font-bold" style={{ fontFamily: "var(--font-arvo)", color: "#fff" }}>
              Anneliese Designs
            </p>
            <p className="text-sm mt-1" style={{ color: "#aaa", fontStyle: "italic" }}>
              Creating the world you dream!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-10 text-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#fff" }}>Address</p>
              <p>23 Corridale Ave.</p>
              <p>Whitby, ON, L1M 2E8</p>
              <p>Canada</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#fff" }}>Availability</p>
              <p>Currently accepting clients.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#fff" }}>Contact</p>
              <p>
                <a href="mailto:contact@anneliesedesigns.com" className="hover:underline" style={{ color: "#ccc" }}>
                  contact@anneliesedesigns.com
                </a>
              </p>
              <p className="mt-1">
                <a href="tel:9054091770" className="hover:underline" style={{ color: "#ccc" }}>
                  (905) 409-1770
                </a>
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-2 flex-wrap">
            <SocialPill href="https://www.linkedin.com/in/vanessawitkowski/" label="in" bg="#0077b5" />
            <SocialPill href="https://www.facebook.com/anneliesedesigns" label="f" bg="#1877f2" />
            <SocialPill href="https://www.instagram.com/anneliesedesigns/" label="Ig" bg="#e1306c" />
            <SocialPill href="https://x.com/anneliesedesign" label="X" bg="#000" />
            <SocialPill href="https://www.pinterest.ca/anneliesedesigns/" label="P" bg="#e60023" />
            <SocialPill href="https://anneliesedesigns.tumblr.com/" label="t" bg="#35465c" />
            <SocialPill href="https://www.flickr.com/photos/anneliesedesigns/" label="fl" bg="#ff0084" />
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
    <div className="flex justify-center my-4">
      <Image
        src={src}
        alt={alt}
        width={260}
        height={260}
        className="object-contain"
      />
    </div>
  );
}

function SocialPill({ href, label, bg }: { href: string; label: string; bg: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
      style={{ backgroundColor: bg }}
    >
      {label}
    </a>
  );
}
