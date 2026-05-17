import React from "react";
import SectionHeader from "./SectionHeader";

export default function Education({ education, certifications }) {
  return (
    <section id="education" style={{
      padding: "8rem 6vw",
      background: `
        radial-gradient(ellipse 50% 40% at 30% 80%, rgba(201,168,76,0.05) 0%, transparent 60%),
        var(--shade-1)
      `,
    }}>
      <SectionHeader icon="🎓" title="Education" subtitle="Academic foundations" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1.5rem",
        marginBottom: "4rem",
      }}>
        {education.map((edu, i) => (
          <div key={i} style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "var(--radius)",
            padding: "1.75rem",
            animation: "fadeUp 0.5s ease forwards",
            animationDelay: `${i * 0.1}s`,
            opacity: 0,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              width: "80px", height: "80px",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.06)",
            }}/>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}>{edu.degree}</div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.3rem",
            }}>{edu.institution}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              📍 {edu.location}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <SectionHeader icon="🏆" title="Certifications" />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {certifications.map((cert, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "1rem",
            padding: "1rem 1.5rem",
            background: "rgba(27,58,92,0.4)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "10px",
            animation: "fadeUp 0.5s ease forwards",
            animationDelay: `${i * 0.1}s`,
            opacity: 0,
          }}>
            <span style={{ fontSize: "1.2rem" }}>🎖️</span>
            <span style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{cert}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
