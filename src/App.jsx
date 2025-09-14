import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Navbar />

      <Section id="home" bg="https://images.unsplash.com/photo-1519389950473-47ba0277781c">
        <h2>Hello, I’m <span className="highlight">Melbin S</span></h2>
        <p>BCA Graduate | Aspiring Cloud & Cybersecurity Enthusiast</p>
        <div className="buttons">
          <a href="#about" className="btn">About Me</a>
          <a href="#projects" className="btn">My Work</a>
        </div>
      </Section>

      <Section id="about" bg="https://images.unsplash.com/photo-1526378722391-8bcd4633c7bb">
        <h2>About Me</h2>
        <p>
          A passionate BCA graduate with strong interest in cloud computing,
          cybersecurity, and software development. Eager to apply my skills
          and grow in IT.
        </p>
        <h3>Education</h3>
        <div className="cards">
          <div className="card">🎓 BCA – Koshys Institute (CGPA 9.3)</div>
          <div className="card">📘 XII – IDEAL HSS (84.5%)</div>
        </div>
        <h3>Skills</h3>
        <div className="cards">
          <div className="card">💻 C#, Java, PHP, Python</div>
          <div className="card">🌐 HTML, CSS, JS, Django</div>
          <div className="card">🗄️ MySQL, SQLite3</div>
          <div className="card">🔒 Cybersecurity Basics</div>
        </div>
      </Section>

      <Section id="projects" bg="https://images.unsplash.com/photo-1555949963-aa79dcee981c">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">🍴 Donation Management Web App (Django, SQLite3)</div>
          <div className="card">🛠️ ERP Internship Project (C#, MySQL)</div>
        </div>
      </Section>

      <Section id="certificates" bg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f">
        <h2>Certificates</h2>
        <div className="cards">
          <div className="card">Microsoft Certified: Azure AI Fundamentals</div>
          <div className="card">Introduction to Python</div>
          <div className="card">Cybersecurity Fundamentals (ISC2, IBM SkillsBuild)</div>
          <div className="card">Python for Beginners (Code Red, Ed-Council)</div>
          <div className="card">Workshop on Cybersecurity (Lyfaux Techn Pvt Ltd)</div>
        </div>
      </Section>

      <Section id="contact" bg="https://images.unsplash.com/photo-1485217988980-11786ced9454">
        <h2>Contact Me</h2>
        <p>📞 <a href="tel:8098926412">8098926412</a></p>
        <p>📧 <a href="mailto:melbingudalur123@gmail.com">melbingudalur123@gmail.com</a></p>
        <p>💼 <a href="https://www.linkedin.com/in/melbin-s-developer25" target="_blank">LinkedIn</a></p>
        <p>👨‍💻 <a href="https://github.com/MelbinS9560" target="_blank">GitHub</a></p>
      </Section>
    </>
  );
}

export default App;
