import ContactForm from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";
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

        <div className="hero__text-card">
          <h2 className="hero__title title--sub">About me</h2>
          <p className="hero__desc">
            I'm Arne, a Frontend Web Developer based near Dortmund, Germany. My
            passion lies in creating easy-to-use, appealing and accessible
            websites that leave a lasting impression. Let's build something
            extraordinary together!
          </p>
        </div>

        <a className="btn btn--contact" href="#contact">
          Contact me
        </a>
      </section>

      <Projects />

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
