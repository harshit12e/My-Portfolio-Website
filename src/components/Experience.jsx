import React from "react";
import SectionHeader from "./SectionHeader";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-pad" style={{
      padding: "8rem 6vw",
      background: `
        radial-gradient(ellipse 60% 50% at 100% 50%, rgba(27,58,92,0.25) 0%, transparent 65%),
        var(--shade-1)
      `,
    }}>
      <SectionHeader icon="💼" title="Work Experience" subtitle="Where I've built things that matter" />

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {experience.map((job, i) => (
          <div key={i} className="exp-item" style={{
            animation: "fadeUp 0.6s ease forwards",
            animationDelay: `${i * 0.15}s`,
            opacity: 0,
          }}>
            {/* Left metadata */}
            <div style={{ paddingTop: "0.2rem" }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
              }}>{job.period}</p>
              <p style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                lineHeight: 1.5,
              }}>{job.location}</p>
            </div>

            {/* Right card */}
            <div style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius)",
              padding: "2rem",
              position: "relative",
              backdropFilter: "blur(10px)",
            }}>
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: "2rem", right: "2rem",
                height: "2px",
                background: "linear-gradient(to right, var(--accent), transparent)",
                borderRadius: "1px",
              }}/>

              <div style={{ marginBottom: "1.25rem" }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}>{job.role}</h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}>{job.company}</p>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {job.points.map((pt, j) => (
                  <li key={j} style={{
                    display: "flex", gap: "0.75rem", alignItems: "flex-start",
                    fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65,
                  }}>
                    <span style={{
                      color: "var(--accent)",
                      marginTop: "0.4rem",
                      flexShrink: 0,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                    }}>▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
