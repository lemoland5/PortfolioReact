import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
