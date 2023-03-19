const form = document.getElementById("signup-form");
const message = document.getElementById("signup-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;

  setTimeout(() => {
    message.textContent = `Thank you for signing up! A discount code has been sent to ${email}.`;
  }, 2000);

  document.getElementById("email").value = "";
});
