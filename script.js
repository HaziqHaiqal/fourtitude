// @ts-nocheck
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("user-form");
  if (!form) {
    return;
  }

  const connectButton = form.querySelector(".submit-button");
  const resetButton = form.querySelector("button[type='reset']");
  const inputs = form.querySelectorAll("#name, #email, #contact, #message");

  function checkFormValidity() {
    const isFormValid = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    connectButton.disabled = !isFormValid;
  }

  inputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = "Form Submitted";
    const message =
      "Thank you! We will get in touch with you as soon as possible.";
    alert(`${title}\n\n${message}`);
    form.reset();
    connectButton.disabled = true;
  });

  resetButton.addEventListener("click", function () {
    connectButton.disabled = true;
  });
});
