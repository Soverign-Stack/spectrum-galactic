import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Plan",
  description: "Spectrum Galactic network plan - the planned constellation, ground stations and links. Nothing here is in operation yet.",
};

export default function Network() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full text-[var(--gold)] text-sm mb-8">
            Early-stage plan
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cyan">Network Plan</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            There are no Spectrum satellites in orbit and no live network. This page
            describes what we plan to build.
          </p>
        </div>
      </section>

      {/* Status */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["Constellation", "Planned"],
              ["Ground Stations", "Planned"],
              ["Inter-Satellite Links", "Design stage"],
              ["User Services", "Not available"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6 text-center">
                <div className="text-sm text-[var(--text-muted)] mb-1">{label}</div>
                <div className="text-lg font-semibold text-[var(--gold)]">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Plan to Build</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The design targets for the first phase are listed on the Technology page.
              They are goals, not measurements.
            </p>
          </div>
          <div className="space-y-6">
            {[
              ["Satellites", "A small low Earth orbit constellation providing backhaul for Alpha Protocol and Omega nodes."],
              ["Ground stations", "Gateway stations connecting the constellation to terrestrial networks. Locations are not chosen."],
              ["Omega integration", "Omega devices would connect to the constellation as one of several links. This is not built."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[var(--space-black)] border border-[var(--space-border)] rounded-xl p-6">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in the <span className="text-gradient-cyan">Plan</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Get in touch if you want to follow progress or discuss working together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.okbventures.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us
            </a>
            <a href="/technology" className="btn-secondary">
              View Technology
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
