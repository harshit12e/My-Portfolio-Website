import React from "react";
import { resumeData } from "./data/resume";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const { skills, experience, education, certifications, interests, contact } = resumeData;

  return (
    <>
      <Navbar />
      <main>
        <Hero data={resumeData} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Education education={education} certifications={certifications} />
        <Contact contact={contact} interests={interests} />
      </main>
    </>
  );
}
