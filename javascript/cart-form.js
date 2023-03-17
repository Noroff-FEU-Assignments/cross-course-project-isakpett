const form = document.querySelector(".checkout-form form");
const billingButton = document.querySelector(".cta");

function validateForm() {
  return form.checkValidity();
}

function handleBillingClick(event) {
  event.preventDefault();

  if (validateForm()) {
    window.location.href = "billing.html";
  } else {
    alert("Please fill in all required fields.");
  }
}

billingButton.addEventListener("click", handleBillingClick);
