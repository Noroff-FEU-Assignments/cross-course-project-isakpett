const form = document.getElementById("signup-form");
const message = document.getElementById("signup-message");
const loader = document.getElementById("loader");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    message.innerHTML = `<p>Thank you for signing up! A discount code has been sent to ${email}.</p>`;
  }, 2000);

  document.getElementById("email").value = "";
});
