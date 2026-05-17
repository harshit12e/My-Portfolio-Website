import React from "react";

export default function SectionHeader({ icon, title, subtitle }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem",
      }}>
        <span style={{
          width: "42px", height: "42px",
          borderRadius: "10px",
          background: "var(--accent-soft)",
          border: "1px solid rgba(201,168,76,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.2rem",
          flexShrink: 0,
        }}>{icon}</span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.01em",
        }}>{title}</h2>
      </div>
      {subtitle && (
        <p style={{
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          paddingLeft: "3.5rem",
        }}>{subtitle}</p>
      )}
      {/* Decorative line */}
      <div style={{
        marginTop: "1.2rem",
        height: "1px",
        background: "linear-gradient(to right, var(--accent), rgba(201,168,76,0.1), transparent)",
      }} />
    </div>
  );
}
