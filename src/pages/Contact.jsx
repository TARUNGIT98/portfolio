import "../styles/contact.css";

const EMAIL = "tarunsirapurapu@gmail.com";
const SUBJECT = "Hello Tarun";

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <h2 className="contact-heading">Let's build something</h2>
      <p className="contact-text">
        Got an idea, an opportunity, or just want to talk? My inbox is open.
      </p>

      <a
        className="contact-button"
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
        data-goatcounter-click="contact-email"
      >
        Connect with me
        <span className="arrow">→</span>
      </a>
    </section>
  );
}

export default Contact;
