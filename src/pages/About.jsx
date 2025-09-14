import { motion } from "framer-motion";

function About() {
  return (
    <section
      className="page about"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526378722391-8bcd4633c7bb')",
      }}
    >
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          A passionate BCA graduate with strong interest in cloud computing,
          cybersecurity, and software development. Eager to apply my technical
          skills and hands-on project experience in a dynamic environment.
        </p>

        <h3>Education</h3>
        <ul>
          <li>BCA – Koshys Institute of Management Studies (CGPA: 9.3)</li>
          <li>XII – IDEAL Matriculation Higher Secondary School (84.5%)</li>
        </ul>

        <h3>Skills</h3>
        <p>
          C#, Java, PHP, Python, HTML, CSS, JavaScript, MySQL, SQLite3, .NET,
          Django (Basic), Git & GitHub
        </p>

        <h3>Languages</h3>
        <p>English, Tamil, Malayalam</p>
      </motion.div>
    </section>
  );
}

export default About;
