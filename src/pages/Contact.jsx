import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Got any interesting projects .?! Let's collaborate and make it happen!</p>
      <form>
        <div className="input-row">
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Email / Phone *" required />
        </div>
        <textarea placeholder="Message *" required />
        <button type="submit">SEND ➤</button>
      </form>
    </div>
  );
}

export default Contact;
