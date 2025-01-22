document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll(".input-box");
  inputs.forEach((input) => {
    const errorIcon = input.nextElementSibling;
    const errorMessage = errorIcon.nextElementSibling;
    if (!input.value.trim()) {
      errorIcon.style.display = "inline";
      errorMessage.style.display = "block";
      input.classList.add("input-error");
    } else if (input.type === "email" && !isValidEmail(input.value)) {
      errorIcon.style.display = "inline";
      errorMessage.textContent = "Looks like this is not an email";
      errorMessage.style.display = "block";
      input.classList.add("input-error");
    } else {
      errorIcon.style.display = "none";
      errorMessage.style.display = "none";
      input.classList.remove("input-error");
    }
  });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
