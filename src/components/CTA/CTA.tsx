import "./CTA.scss";

export default function CTA() {
  return (
    <main className="cta">
      <section id="about" className="hero">
        <h1 className="hero__title title--main">
          Crafting Tomorrow's Web:
          <span>Learn.</span>
          <span>Apply.</span>
          <span>Improve.</span>
          <span>Repeat.</span>
        </h1>

        <h2 className="hero__title title--sub">About me</h2>
        <p className="hero__desc">
          I'm Arne, a Frontend Web Developer based near Dortmund, Germany. My
          passion lies in creating easy-to-use, appealing and accessible
          websites that leave a lasting impression. Let's build something
          extraordinary together!
        </p>

        <a className="btn" href="#contact">
          Contact me
        </a>
      </section>

      <section id="projects" className="projects">
        <h2 className="projects__title title--sub">Projects</h2>
        <p className="projects__desc">Have a look at my projects</p>
      </section>
    </main>
  );
}
