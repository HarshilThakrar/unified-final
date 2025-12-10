import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhoWeAre from './components/WhoWeAre'
import Metrics from './components/Metrics'
import ProjectsSection from './components/ProjectsSection'
import './App.css'

// Pages
const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <WhoWeAre />
    <Metrics />
    <ProjectsSection />
  </>
)

const AboutUs = () => (
  <div className="page-container">
    <h1>About Us</h1>
    <p>Coming Soon...</p>
  </div>
)

const Technology = () => (
  <div className="page-container">
    <h1>Technology</h1>
    <p>Coming Soon...</p>
  </div>
)

const Resources = () => (
  <div className="page-container">
    <h1>Resources</h1>
    <p>Coming Soon...</p>
  </div>
)

const ExecutionProcess = () => (
  <div className="page-container">
    <h1>Execution Process</h1>
    <p>Coming Soon...</p>
  </div>
)

const OurProjects = () => (
  <div className="page-container">
    <h1>Our Projects</h1>
    <p>Coming Soon...</p>
  </div>
)

const Career = () => (
  <div className="page-container">
    <h1>Career</h1>
    <p>Coming Soon...</p>
  </div>
)

const ContactUs = () => (
  <div className="page-container">
    <h1>Contact Us</h1>
    <p>Coming Soon...</p>
  </div>
)

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/execution-process" element={<ExecutionProcess />} />
        <Route path="/our-projects" element={<OurProjects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
