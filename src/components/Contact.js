// filepath: /c:/Users/mng48/source/repos/projects/websites/eia-club/src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      alert(`Contact information submitted!\nName: ${name}\nEmail: ${email}`);
      setName('');
      setEmail('');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <section className="contact">
      <h2 style={{color:'black'}}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;