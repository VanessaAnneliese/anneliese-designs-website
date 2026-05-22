import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | Anneliese Designs",
  description: "Terms of Service for Anneliese Designs, Whitby, Ontario, Canada.",
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-cambo)" }}>Terms of Service</h1>

        <p className="text-sm mb-8" style={{ color: "#888" }}>Effective date: January 1, 2025</p>

        <Section title="1. Overview">
          <p>These Terms of Service govern your use of the Anneliese Designs website and the creative services provided by Vanessa Witkowski, operating as Anneliese Designs, located in Whitby, Ontario, Canada. By accessing this website or engaging our services, you agree to these terms.</p>
        </Section>

        <Section title="2. Services">
          <p>Anneliese Designs offers creative services including brand identity, graphic design, web design, strategic writing, content strategy, and related services. The specific scope, deliverables, timeline, and fees for each project are agreed upon in writing prior to commencement.</p>
        </Section>

        <Section title="3. Project Agreements">
          <p>All projects require a written agreement or proposal accepted by the client before work begins. This agreement will outline:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Scope of work and deliverables</li>
            <li>Project timeline and milestones</li>
            <li>Fees and payment schedule</li>
            <li>Revision rounds included</li>
            <li>Ownership and intellectual property terms</li>
          </ul>
        </Section>

        <Section title="4. Payment">
          <p>Payment terms are outlined in each project agreement. Anneliese Designs typically requires a deposit before work begins, with remaining amounts due upon project milestones or completion. Late payments may result in a pause in services.</p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>Upon receipt of full payment, the client receives ownership of the final agreed-upon deliverables. Anneliese Designs retains the right to display completed work in its portfolio unless otherwise agreed in writing. Preliminary concepts, unused designs, and source files remain the property of Anneliese Designs unless specifically included in the project agreement.</p>
        </Section>

        <Section title="6. Client Responsibilities">
          <p>The client agrees to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Provide accurate content, materials, and timely feedback</li>
            <li>Ensure they have the right to use any materials supplied to Anneliese Designs</li>
            <li>Review and approve deliverables within agreed timelines</li>
          </ul>
        </Section>

        <Section title="7. Revisions and Changes">
          <p>Revisions within the agreed scope are included as specified in the project agreement. Requests beyond the agreed scope will be quoted separately and require written approval before proceeding.</p>
        </Section>

        <Section title="8. Cancellation">
          <p>Either party may terminate a project with written notice. The client is responsible for payment for all work completed up to the cancellation date. Deposits are non-refundable unless otherwise specified in the project agreement.</p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>Anneliese Designs&rsquo; liability is limited to the fees paid for the specific project. We are not liable for indirect, incidental, or consequential damages arising from the use of deliverables or services.</p>
        </Section>

        <Section title="10. Governing Law">
          <p>These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Ontario.</p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>Anneliese Designs may update these Terms of Service at any time. The current version will always be available on this page.</p>
        </Section>

        <Section title="12. Contact">
          <address className="not-italic" style={{ color: "#555" }}>
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
