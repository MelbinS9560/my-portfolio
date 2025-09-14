import './app.css';
import { motion } from "framer-motion";

function Certificates() {
  return (
    <section
      className="page certificates"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      }}
    >
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Certificates</h2>
<ul>
  <li className="certificate-name">Microsoft Certified: Azure AI Fundamentals</li>
  <li className="certificate-name">Introduction to Python</li>
  <li className="certificate-name">Cybersecurity Fundamentals (ISC2, IBM SkillsBuild)</li>
  <li className="certificate-name">Python for Beginners (Code Red, Ed-Council)</li>
  <li className="certificate-name">Workshop on Cybersecurity (Lyfaux Techn Pvt Ltd)</li>
</ul>


<h2>Contact Me</h2>
<div className="contact-links">
  📞 <a href="tel:8098926412">8098926412</a><br />
  📧 <a href="mailto:melbingudalur123@gmail.com">melbingudalur123@gmail.com</a><br />
  💼 <a href="https://www.linkedin.com/in/melbin-s-developer25" target="_blank" rel="noreferrer">LinkedIn</a><br />
  👨‍💻 <a href="https://github.com/MelbinS9560" target="_blank" rel="noreferrer">GitHub</a>
</div>

      </motion.div>
    </section>
  );
}

export default Certificates;
