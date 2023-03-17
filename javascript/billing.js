document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".checkout-form form");
  const viewOrderButton = document.querySelector(".cta");

  function validateForm() {
    return form.checkValidity();
  }

  function handleViewOrderClick(event) {
    event.preventDefault();

    if (validateForm()) {
      window.location.href = "order.html";
    } else {
      alert("Please fill in all required fields.");
    }
  }

  viewOrderButton.addEventListener("click", handleViewOrderClick);
});
