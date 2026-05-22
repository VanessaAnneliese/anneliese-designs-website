import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Anneliese Designs",
  description: "Privacy Policy for Anneliese Designs, Whitby, Ontario, Canada.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full pt-8 pb-4 flex flex-col items-center border-b border-gray-100">
        <Link href="/" className="flex flex-col items-center hover:opacity-70" style={{ textDecoration: "none" }}>
          <Image src="/images/logo.png" alt="Anneliese Designs Logo" width={70} height={70} />
          <p className="mt-2 tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "23px", color: "#000" }}>
            Anneliese Designs
          </p>
        </Link>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-cambo)" }}>Privacy Policy</h1>

        <p className="text-sm mb-8" style={{ color: "#888" }}>Effective date: January 1, 2025</p>

        <Section title="1. Who We Are">
          <p>Anneliese Designs is a creative design and branding studio operated by Vanessa Witkowski, located in Whitby, Ontario, Canada. We are subject to Canada&rsquo;s federal <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and applicable Ontario privacy legislation.</p>
          <p className="mt-3">Contact: <a href="mailto:contact@anneliesedesigns.com">contact@anneliesedesigns.com</a></p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following personal information when you contact us or engage our services:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Name and contact details (email, phone, address)</li>
            <li>Business name and project information</li>
            <li>Communications you send us</li>
            <li>Basic website usage data (via analytics tools)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use your information to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Respond to inquiries and provide our services</li>
            <li>Send project updates and invoices</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
        </Section>

        <Section title="4. Consent">
          <p>By contacting us or engaging our services, you consent to the collection and use of your information as described in this policy. You may withdraw consent at any time by contacting us, subject to legal or contractual obligations.</p>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by law.</p>
        </Section>

        <Section title="6. Your Rights">
          <p>Under PIPEDA, you have the right to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Access the personal information we hold about you</li>
            <li>Request corrections to inaccurate information</li>
            <li>Withdraw consent for certain uses</li>
            <li>File a complaint with the <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">Office of the Privacy Commissioner of Canada</a></li>
          </ul>
        </Section>

        <Section title="7. Security">
          <p>We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
        </Section>

        <Section title="8. Cookies">
          <p>This website may use basic cookies to ensure it functions correctly. We do not currently use advertising or tracking cookies. If this changes, this policy will be updated accordingly.</p>
        </Section>

        <Section title="9. Third-Party Links">
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.</p>
        </Section>

        <Section title="11. Contact Us">
          <p>For any privacy-related questions or requests, please contact:</p>
          <address className="mt-3 not-italic" style={{ color: "#555" }}>
            Anneliese Designs<br />
            23 Corridale Ave., Whitby, ON, L1M 2E8, Canada<br />
            <a href="mailto:contact@anneliesedesigns.com">contact@anneliesedesigns.com</a>
          </address>
        </Section>
      </main>

      <footer className="w-full py-6 text-center text-sm border-t border-gray-100" style={{ color: "#888" }}>
        <Link href="/" style={{ color: "#888" }}>← Back to Anneliese Designs</Link>
        <p className="mt-2">&copy; 2025 Anneliese Designs. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-cambo)" }}>{title}</h2>
      <div style={{ color: "#444", lineHeight: "1.8" }}>{children}</div>
    </section>
  );
}
