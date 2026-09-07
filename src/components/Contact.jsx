import React from "react";
import SectionHeader from "./SectionHeader";

export default function Contact({ contact, interests }) {
  const contactItems = [
    { icon: "✉️", label: "Email",    value: contact.email,    href: `mailto:${contact.email}` },
    { icon: "📞", label: "Phone",    value: contact.phone,    href: `tel:${contact.phone}` },
    { icon: "💼", label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}` },
    { icon: "⌨️", label: "GitHub",   value: contact.github,   href: `https://${contact.github}` },
    { icon: "📍", label: "Location", value: contact.location },
  ];

  return (
    <section id="contact" className="section-pad" style={{
      padding: "8rem 6vw 6rem",
      background: `
        radial-gradient(ellipse 70% 60% at 50% 100%, rgba(27,58,92,0.4) 0%, transparent 70%),
        var(--shade-1)
      `,
    }}>
      <SectionHeader icon="📬" title="Get In Touch" subtitle="Let's build something great together" />

      <div className="contact-grid" style={{
        alignItems: "start",
      }}>
        {/* Contact links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {contactItems.map((c, i) => (
            <a
              key={c.label}
              href={c.href || "#"}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "1rem",
                padding: "1.1rem 1.5rem",
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius)",
                textDecoration: "none",
                transition: "all 0.3s",
                animation: "fadeUp 0.5s ease forwards",
                animationDelay: `${i * 0.1}s`,
                opacity: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                e.currentTarget.style.transform = "translateX(6px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.background = "var(--card-bg)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{c.icon}</span>
              <div>
                <p style={{ fontSize: "0.7rem", color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.label}</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Interests */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}>Interests &amp; Hobbies</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {interests.map((interest, i) => (
              <div key={i} style={{
                padding: "1rem 1.5rem",
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius)",
                display: "flex", alignItems: "center", gap: "0.75rem",
                animation: "fadeUp 0.5s ease forwards",
                animationDelay: `${i * 0.15}s`,
                opacity: 0,
              }}>
                <span style={{ fontSize: "1.5rem" }}>
                  {interest === "Photography" ? "📷" : "✈️"}
                </span>
                <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 500 }}>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "6rem",
        paddingTop: "2rem",
        borderTop: "1px solid rgba(201,168,76,0.1)",
        textAlign: "center",
        color: "var(--text-muted)",
        fontSize: "0.8rem",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.05em",
        opacity: 0.6,
      }}>
        © {new Date().getFullYear()} Harshit Kumar — Designed &amp; Built with React + Vite
      </div>
    </section>
  );
}
