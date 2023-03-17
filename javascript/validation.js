function validateForm() {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");

  if (!name.value.trim()) {
    alert("Please enter your full name");
    name.focus();
    return false;
  }
  if (!email.value.trim()) {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }
  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }
  if (!subject.value.trim()) {
    alert("Please enter a subject");
    subject.focus();
    return false;
  }
  if (!message.value.trim()) {
    alert("Please enter a message");
    message.focus();
    return false;
  }

  // Show the success message
  const successMessage = document.querySelector("#success-message");
  successMessage.style.display = "flex";

  return true;
}

function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }
}

// Attach the handleSubmit function to the form's submit event
const form = document.querySelector("#contact-form");
form.addEventListener("submit", handleSubmit);
