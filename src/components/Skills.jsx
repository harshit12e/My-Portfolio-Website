import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const categoryColors = {
  Backend:  { bg: "rgba(27,58,92,0.9)",  border: "rgba(100,160,220,0.4)", dot: "#64a0dc" },
  Frontend: { bg: "rgba(40,30,60,0.9)",  border: "rgba(160,100,220,0.4)", dot: "#a064dc" },
  DevOps:   { bg: "rgba(20,50,35,0.9)",  border: "rgba(80,200,120,0.4)",  dot: "#50c878" },
  Database: { bg: "rgba(60,30,20,0.9)",  border: "rgba(220,130,60,0.4)",  dot: "#dc823c" },
  Emerging: { bg: "rgba(60,50,10,0.9)",  border: "rgba(201,168,76,0.5)",  dot: "#c9a84c" },
};

const categoryIcons = {
  Backend:  "⚙️",
  Frontend: "🎨",
  DevOps:   "🚀",
  Database: "🗄️",
  Emerging: "✨",
};

export default function Skills({ skills }) {
  const [hovered, setHovered] = useState(null);
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" style={{
      padding: "8rem 6vw",
      background: `
        radial-gradient(ellipse 50% 40% at 0% 50%, rgba(27,58,92,0.3) 0%, transparent 60%),
        var(--shade-1)
      `,
    }}>
      <SectionHeader icon="💡" title="Technical Skills" subtitle="Technologies I work with daily" />

      {/* Category legend */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
        {categories.map(cat => (
          <span key={cat} style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            fontSize: "0.75rem", color: "var(--text-muted)",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: categoryColors[cat]?.dot || "#aaa",
              display: "inline-block",
            }}/>
            {cat}
          </span>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "1rem",
      }}>
        {skills.map((skill, i) => {
          const c = categoryColors[skill.category] || categoryColors.Backend;
          const isHov = hovered === i;
          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: isHov ? c.bg : "rgba(27,58,92,0.35)",
                border: `1px solid ${isHov ? c.border : "rgba(201,168,76,0.1)"}`,
                borderRadius: "var(--radius)",
                padding: "1.25rem 1.2rem",
                display: "flex", flexDirection: "column", gap: "0.6rem",
                cursor: "default",
                transition: "all 0.3s ease",
                transform: isHov ? "translateY(-4px)" : "none",
                boxShadow: isHov ? `0 12px 32px rgba(0,0,0,0.35)` : "none",
                animation: `fadeUp 0.5s ease forwards`,
                animationDelay: `${i * 0.05}s`,
                opacity: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "1.3rem" }}>{categoryIcons[skill.category]}</span>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: c.dot, flexShrink: 0,
                }}/>
              </div>
              <div>
                <p style={{
                  fontWeight: 600, fontSize: "0.95rem",
                  color: isHov ? "var(--text-primary)" : "var(--text-muted)",
                  transition: "color 0.3s",
                }}>{skill.name}</p>
                <p style={{
                  fontSize: "0.7rem",
                  color: isHov ? c.dot : "rgba(154,179,201,0.5)",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s",
                  marginTop: "0.2rem",
                }}>{skill.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
