import { useState } from "react";
import "../styles/contact.css";

function Contact() {

  const [formData, setFormData] = useState({ 
  // use state  em chestudhi ante adhi oka object ni return chesthundhi and aa object lo unde properties ni 
  // update cheyali ante setFormData use chestham and form data anedhi object ikkada
    name : "",
    email : "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value});
  };
  //When the user types in an input field, handleChange updates the formData state.
// e.target.name refers to the name attribute of the input (name, contact, message).
// e.target.value grabs the value the user is typing.
// setFormData updates the state without overwriting other values.

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevents the default form submission behavior.

    console.log("Form Data Submitted:" , formData); // Logs the form data to the console.

    await fetch("https://formspree.io/f/xrberblb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // The fetch() function sends a POST request to the JSONPlaceholder API with the form data.
    // The method property specifies the HTTP method to use (POST).
    // The body property sends the form data as a JSON string.
    // The headers property sets the Content-Type to application/json.

    alert("Message Sent Successfully!"); // Shows an alert message when the form is submitted.
    setFormData({ name: "", email: "", message: "" }); // Resets the form data 
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Got any interesting projects?! Let's collaborate and make it happen!</p>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Email / Phone *"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message *"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">SEND ➤</button>
      </form>
    </div>
  );
}

export default Contact;
