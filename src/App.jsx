import Navbar from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
