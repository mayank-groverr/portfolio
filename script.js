function sendmail() {
  // Basic validation
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!fname || !lname || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const params = {
    fname: fname,
    lname: lname,
    email: email,
    timestamp: new Date().toLocaleString(),
    message: message,
  };

  emailjs
    .send("service_o9rcidl", "template_yer931x", params)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    });
}