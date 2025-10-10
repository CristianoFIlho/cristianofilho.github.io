import Hero from '@/components/Hero'
import Achievements from '@/components/Achievements'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import GitHubProjects from '@/components/GitHubProjects'
import Education from '@/components/Education'
import Languages from '@/components/Languages'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <Hero />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="github-projects">
        <GitHubProjects />
      </section>
      <section id="languages">
        <Languages />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}