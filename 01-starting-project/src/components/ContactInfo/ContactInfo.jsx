import React from "react";
import { EXAMPLES } from "/Users/romanmnacek/Documents/Web Development Projects/UDEMY React/01-starting-project/src/data.js";

const ContactInfo = () => {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Email: {EXAMPLES.contact.email}</p>
      <p>Phone: {EXAMPLES.contact.phone}</p>
      <p>LinkedIn: {EXAMPLES.contact.linkedin}</p>
      <p>GitHub: {EXAMPLES.contact.github}</p>
    </div>
  );
};

export default ContactInfo;