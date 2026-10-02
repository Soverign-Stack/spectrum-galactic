import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planned Coverage",
  description: "Spectrum Galactic planned coverage - an early-stage plan for satellite backhaul. No satellites are in orbit yet.",
};

export default function Coverage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full text-[var(--gold)] text-sm mb-8">
            Early-stage plan
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cyan">Planned Coverage</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Spectrum Galactic is a plan for satellite backhaul. There are no satellites
            in orbit and no coverage today.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Planned Phases</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The sequence we intend to follow. No dates are committed and none of it
              has started.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[var(--spectrum-cyan)]">Phase 1 - Design</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--gold)]/20 text-[var(--gold)]">
                  CURRENT
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Define the architecture and design targets for a small constellation focused on populated regions.
              </p>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[var(--spectrum-purple)]">Phase 2 - Build</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--space-border)] text-[var(--text-muted)]">
                  PLANNED
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Build and launch satellites and ground stations. This depends on funding and partners that are not yet in place.
              </p>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[var(--gold)]">Phase 3 - Expansion</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--space-border)] text-[var(--text-muted)]">
                  FUTURE
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Grow the constellation for more capacity and wider coverage, if earlier phases succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Follow the <span className="text-gradient-cyan">Plan</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Contact us to follow progress or discuss working together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us
            </a>
            <Link href="/partners" className="btn-secondary">
              Partners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
