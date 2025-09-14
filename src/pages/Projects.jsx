import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      className="page projects"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c')",
      }}
    >
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>My Projects</h2>
        <div className="card">
          <h3>Donation Management Web App</h3>
          <p>
            Built using Django, SQLite3, HTML, CSS, and JavaScript. Collects
            excess food and items, manages donations, and distributes them.
          </p>
        </div>
        <div className="card">
          <h3>ERP Internship Project</h3>
          <p>
            Worked on student login and data upload modules using C# and MySQL
            during internship at Thrishik ERP Services.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
