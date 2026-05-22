import Image from "next/image";
import Link from "next/link";

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
        <p className="mt-3 tracking-[0.29em] uppercase" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "23px", color: "#000" }}>
          Anneliese Designs
        </p>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 text-center">

        {/* Hero */}
        <section className="py-12">
          <h1 className="text-2xl leading-relaxed" style={{ fontFamily: "var(--font-cambo)", fontWeight: 700, color: "#1a1a1a" }}>
            Welcome to Anneliese Designs,
          </h1>
          <p className="mt-3 text-lg leading-relaxed" style={{ fontFamily: "var(--font-cambo)", fontWeight: 700, color: "#444" }}>
            Where creativity is fun, full of heart, and always a little inspiring.
          </p>
          <p className="mt-2 text-lg leading-relaxed" style={{ fontFamily: "var(--font-cambo)", fontWeight: 700, color: "#444" }}>
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
        <IllustrationDivider src="/images/pencil.png" alt="Colorful lightbulb illustration" />
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-cambo)", color: "#1a1a1a" }}>
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
          <p className="tracking-[0.29em] uppercase" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: "23px", color: "#000" }}>
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
              className="inline-block px-6 py-2 text-sm font-semibold tracking-wide uppercase"
              style={{ backgroundColor: "#a61c1c", color: "#fff", fontFamily: "var(--font-lato)", borderRadius: "8px" }}
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
              <p className="mt-1">
                <a href="tel:9054091770" className="hover:underline" style={{ color: "#ccc" }}>
                  (905) 409-1770
                </a>
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-3 flex-wrap">
            <SocialIcon href="https://www.linkedin.com/in/vanessawitkowski/" label="LinkedIn" bg="#0077b5" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>} />
            <SocialIcon href="https://www.facebook.com/anneliesedesigns" label="Facebook" bg="#1877f2" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>} />
            <SocialIcon href="https://www.instagram.com/anneliesedesigns/" label="Instagram" bg="#e1306c" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>} />
            <SocialIcon href="https://x.com/anneliesedesign" label="X" bg="#000" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>} />
            <SocialIcon href="https://ca.pinterest.com/anneliesedesign/" label="Pinterest" bg="#e60023" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>} />
            <SocialIcon href="https://anneliesedesigns.tumblr.com/" label="Tumblr" bg="#35465c" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.228 2.371h.07c.663-.004 1.473-.3 1.8-.583l1.186 3.325c-.697.443-2.056 1.07-4.218 1.07z"/></svg>} />
            <SocialIcon href="https://www.flickr.com/photos/anneliesedesigns/" label="Flickr" bg="#ff0084" icon={<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M5.334 6.666a5.333 5.333 0 1 0 0 10.666 5.333 5.333 0 0 0 0-10.666zm13.332 0a5.333 5.333 0 1 0 0 10.666 5.333 5.333 0 0 0 0-10.666z"/></svg>} />
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
