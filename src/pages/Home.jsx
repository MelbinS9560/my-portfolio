import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="page home"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hello, I’m <span className="highlight">Melbin S</span></h2>
        <p>BCA Graduate | Aspiring Cloud & Cybersecurity Enthusiast</p>
        <div className="buttons">
          <Link to="/about" className="btn">About Me</Link>
          <Link to="/projects" className="btn">My Work</Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
