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

const quantityInputs = document.querySelectorAll('input[type="number"]');
const removeButtons = document.querySelectorAll(".icon-remove");
const subtotalCell = document.querySelector(".subtotal-cell");
const taxCell = document.querySelector(".tax-cell");
const totalCell = document.querySelector(".total-cell");
const priceCells = document.querySelectorAll("td[data-price]");

function updatePrices() {
  let subtotal = 0;
  let tax = 0;
  let total = 0;

  for (let i = 0; i < quantityInputs.length; i++) {
    const quantity = parseInt(quantityInputs[i].value);
    const price = parseInt(priceCells[i].dataset.price);
    const itemTotal = quantity * price;
    subtotal += itemTotal;
    priceCells[i].textContent = "$" + itemTotal;
  }

  tax = subtotal * 0.08;
  total = subtotal + tax;

  subtotalCell.textContent = "$" + subtotal.toFixed(2);
  taxCell.textContent = "$" + tax.toFixed(2);
  totalCell.textContent = "$" + total.toFixed(2);
}

for (let i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener("input", updatePrices);
  removeButtons[i].addEventListener("click", updatePrices);
}

updatePrices();
