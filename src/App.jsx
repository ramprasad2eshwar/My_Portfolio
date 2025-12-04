import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="logo">K. RAMPRASAD</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Java Developer & Full Stack Enthusiast</h1>
          <div className="subtitle">Building Efficient & Scalable Systems</div>
          <p style={{ marginBottom: '2rem', color: '#cbd5e1', fontSize: '1.1rem' }}>
            Enthusiastic Java Developer skilled in Core Java, JDBC, Servlets, JSP, and MySQL.
            Experienced in building full-functional desktop and web applications.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn">View Projects</a>
            <a href="https://github.com/ramprasad2eshwar" target="_blank" rel="noreferrer" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>GitHub</a>
          </div>
        </div>
        <div className="hero-visual">
          <pre style={{ textAlign: 'left', fontSize: '0.9rem' }}>
            {`public class Developer {
  String name = "Ramprasad";
  String[] skills = {
    "Java", "JDBC", 
    "React", "MySQL"
  };

  void code() {
    System.out.println(
      "Building Solutions..."
    );
  }
}`}
          </pre>
        </div>
      </section>

      <section className="services" id="skills">
        <div className="card">
          <h3>Java Backend</h3>
          <p>Strong foundation in Core Java, JDBC, Servlets, JSP, and OOPS principles for robust application development.</p>
        </div>
        <div className="card">
          <h3>Web Development</h3>
          <p>Experience with React.js, Node.js, and HTML/CSS for building modern, interactive web interfaces.</p>
        </div>
        <div className="card">
          <h3>Database & Tools</h3>
          <p>Proficient in MySQL and MongoDB for data management, along with Swing for desktop GUI applications.</p>
        </div>
      </section>

      <section className="projects-section" id="projects" style={{ padding: '5rem 5%' }}>
        <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          <div className="card" style={{ borderTopColor: 'var(--accent)' }}>
            <h3>GravitoRide</h3>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>Vehicle Rental System</p>
            <p>Full-stack web app using React.js, Node.js, MongoDB, and Google Maps API with JWT authentication.</p>
            <div style={{ marginTop: '1rem' }}>
              <a href="https://github.com/ramprasad2eshwar/GravitoRide" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 'bold', textDecoration: 'none' }}>View Code &rarr;</a>
            </div>
          </div>

          <div className="card" style={{ borderTopColor: 'var(--accent)' }}>
            <h3>Bank Management System</h3>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>Desktop Application</p>
            <p>Java desktop application using Swing, JDBC, and MySQL. Handles account management and transactions.</p>
            <div style={{ marginTop: '1rem' }}>
              <a href="https://github.com/ramprasad2eshwar/Bank-Management-System" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 'bold', textDecoration: 'none' }}>View Code &rarr;</a>
            </div>
          </div>

          <div className="card" style={{ borderTopColor: 'var(--accent)' }}>
            <h3>Student Management System</h3>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>CRUD Application</p>
            <p>Desktop application for managing student records with full CRUD operations using Java and MySQL.</p>
            <div style={{ marginTop: '1rem' }}>
              <a href="https://github.com/ramprasad2eshwar/Student_Management_System" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 'bold', textDecoration: 'none' }}>View Code &rarr;</a>
            </div>
          </div>

        </div>
      </section>

      <section className="tech-stack">
        <h2>Technical Skills</h2>
        <div className="tech-grid">
          <div className="tech-item">Java</div>
          <div className="tech-item">JDBC</div>
          <div className="tech-item">MySQL</div>
          <div className="tech-item">Servlets/JSP</div>
          <div className="tech-item">React.js</div>
          <div className="tech-item">Node.js</div>
          <div className="tech-item">Swing</div>
          <div className="tech-item">MongoDB</div>
        </div>
      </section>

      <footer id="contact" style={{ background: 'var(--primary)', color: 'white', padding: '4rem 5%', textAlign: 'center' }}>
        <h2>Get In Touch</h2>
        <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>Looking for a Java Developer role? Let's connect!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="mailto:ramprasad2eshwar@gmail.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📧</span> Email Me
          </a>
          <a href="tel:9100529013" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📱</span> 9100529013
          </a>
          <a href="https://linkedin.com/in/kodipyaka-ramprasad" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>💼</span> LinkedIn
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
