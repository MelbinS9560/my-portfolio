function Section({ id, bg, children }) {
    return (
      <section
        id={id}
        className="section"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="overlay">
          {children}
        </div>
      </section>
    );
  }
  
  export default Section;
  