<template>
  <!-- Menu -->
  <MenuVue :links="links">soustab 👋 </MenuVue>
  <HeroSection id="hero" pic="header.jpg">
    <template v-slot:welcome>Hello!</template>
    My name is <b>Soustab Haldar</b> and I'm a
    <hi-word>full-stack developer</hi-word>
    and <hi-word>UI-UX Developer</hi-word> My passion is building
    <hi-word>web applications</hi-word> and
    <hi-word>designing websites</hi-word> using modern frameworks. I am also an
    <hi-word> UI-UX Developer</hi-word> designing beautiful user experiences
    across platforms.
    <template v-slot:buttons>
      <simple-button
        class="btn-primary"
        url="mailto:soustabhaldar10@gmail.com"
        icon="fa-regular fa-file-lines"
        >Contact me</simple-button
      >
      <simple-button
        class="btn-primary text-white"
        url="https://github.com/soustab10"
        icon="fab github"
        >View all Projects!</simple-button
      >
      <simple-button
        class="btn-primary text-white"
        url="https://www.linkedin.com/in/soustab-haldar/"
        icon="fab linkedin-in"
        >Hire me!</simple-button
      >
    </template>
  </HeroSection>
  <SkillsGrid id="skills" :skills="skills" />
  <ExperienceTable id="edu-exp" :experience="experience" />
  <AwardsGrid id="awards" :awards="awards" />
  <ProjectsGrid id="projects" :projects="projects" />
  <FooterVue :links="socials" />
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

// data to fill components
import skills from "@/data/skills";
import experience from "@/data/experience";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "home",
          url: "#hero",
        },
        {
          name: "skills",
          url: "#skills",
        },
        {
          name: "experience",
          url: "#edu-exp",
        },
        {
          name: "projects",
          url: "#projects",
        },
      ],
      skills,
      experience,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab linkedin-in",
          url: "https://www.linkedin.com/in/soustab-haldar/",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/soustab10",
        },
        {
          id: 3,
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/sousphotos_/",
        },
      ],
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    ProjectsGrid,
    SimpleButton,
    HiWord,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>
