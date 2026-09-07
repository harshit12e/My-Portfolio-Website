import React from "react";
import harshitPhoto from "../assets/harshit.png";

export default function Hero({ data }) {
  const { name, title, summary, contact } = data;

  return (
    <section id="about" className="hero-section" style={{
      minHeight: "100vh",
      padding: "0 6vw",
      gap: "4rem",
      position: "relative",
      overflow: "hidden",
      background: `
        radial-gradient(ellipse 60% 60% at 80% 50%, rgba(27,58,92,0.6) 0%, transparent 70%),
        radial-gradient(ellipse 40% 50% at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 60%),
        var(--shade-1)
      `,
    }}>
      {/* Decorative grid lines */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        pointerEvents: "none",
      }} />

      {/* Left — Text */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="fade-up" style={{
          animationDelay: "0.1s",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.78rem",
          color: "var(--accent)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "1.2rem",
        }}>Full-Stack Developer</p>

        <h1 className="fade-up" style={{
          animationDelay: "0.2s",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          marginBottom: "1.5rem",
          color: "var(--text-primary)",
        }}>
          {name.split(" ")[0]}<br />
          <span style={{ color: "var(--accent)" }}>{name.split(" ")[1]}</span>
        </h1>

        <p className="fade-up" style={{
          animationDelay: "0.35s",
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "var(--text-muted)",
          maxWidth: "48ch",
          marginBottom: "2.5rem",
        }}>{summary}</p>

        {/* Contact badges */}
        <div className="fade-up" style={{
          animationDelay: "0.5s",
          display: "flex", flexWrap: "wrap", gap: "0.75rem",
        }}>
          {[
            { icon: "✉", label: contact.email, href: `mailto:${contact.email}` },
            { icon: "⌂", label: contact.location },
            { icon: "in", label: "LinkedIn", href: `https://${contact.linkedin}` },
            { icon: "⌥", label: "GitHub",   href: `https://${contact.github}` },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href || "#"}
              target={c.href ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.45rem 1rem",
                borderRadius: "50px",
                background: "rgba(27,58,92,0.6)",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                transition: "all 0.25s",
                cursor: c.href ? "pointer" : "default",
              }}
              onMouseEnter={e => {
                if (c.href) { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}>{c.icon}</span>
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right — Photo */}
      <div className="fade-up hero-photo" style={{
        animationDelay: "0.4s",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        overflow: "hidden",
      }}>
        {/* Decorative ring */}
        <div style={{
          position: "absolute",
          width: "420px", height: "420px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.2)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }} />
        <div style={{
          position: "absolute",
          width: "360px", height: "360px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.1)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }} />

        {/* Photo container */}
        <div className="hero-photo-frame" style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          height: "88vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}>
          <img
            src={harshitPhoto}
            alt="Harshit Kumar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center bottom",
              display: "block",
            }}
          />
          {/* Fade overlay at bottom */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "220px",
            background: `linear-gradient(to top, var(--shade-1) 0%, rgba(13,27,42,0.7) 40%, transparent 100%)`,
            pointerEvents: "none",
          }} />
          {/* Fade on sides for blending */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(to right, var(--shade-1) 0%, transparent 15%, transparent 85%, var(--shade-1) 100%)
            `,
            pointerEvents: "none",
          }} />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.15em",
        textTransform: "uppercase", opacity: 0.6,
      }}>
        <span>Scroll</span>
        <div style={{ width: 1, height: 40, background: "var(--accent)", opacity: 0.4 }} />
      </div>
    </section>
  );
}
