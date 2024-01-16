import ContactForm from "../ContactForm/ContactForm";
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
        <div className="tech-stack">
          <p className="tech-stack__desc">Built with:</p>
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li className="project-list__item">
            <a href="">
              <h3 className="project-list__title">Test</h3>
              <p className="project-list__desc">
                This is a description for the project
              </p>
            </a>
          </li>
          <li className="project-list__item">
            <a href="">
              <h3 className="project-list__title">Test</h3>
              <p className="project-list__desc">
                This is a description for the project
              </p>
            </a>
          </li>
          <li className="project-list__item">
            <a href="">
              <h3 className="project-list__title">Test</h3>
              <p className="project-list__desc">
                This is a description for the project
              </p>
            </a>
          </li>
          <li className="project-list__item">
            <a href="">
              <h3 className="project-list__title">Test</h3>
              <p className="project-list__desc">
                This is a description for the project
              </p>
            </a>
          </li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2 className="contact__title title--sub">Contact</h2>
        <p className="contact__desc">
          Want to work together? <span>Or just say hi?</span> Then pop me a
          message!
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
