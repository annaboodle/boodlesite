import React from "react";

import { colors } from "../../styles/shared";

import Hero from "../../components/Hero";
import SectionHeader from "../../components/SectionHeader";
import Projects from "../../components/Projects";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero></Hero>

      <SectionHeader
        headline="Projects"
        subhead="Let's hop to it"
        color={colors.startColor}
        anchor="projects"
      ></SectionHeader>
      <Projects></Projects>

      <SectionHeader
        headline="About me"
        subhead="Nice to meet you"
        color={colors.midColor}
        anchor="about"
      ></SectionHeader>
      <AboutMe></AboutMe>

      <SectionHeader
        headline="Contact"
        subhead="Ask about my favorite holiday"
        color={colors.midColor2}
        anchor="contact"
      ></SectionHeader>
      <Contact></Contact>
    </div>
  );
}
