document.addEventListener("DOMContentLoaded", () => {
  let inputs = document.querySelectorAll("[inputFeild]");
  let container = document.querySelector(".form");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      console.log("Focused on an input field");
      container.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      setTimeout(() => {
        let isAnyInputFocused = Array.from(inputs).some((input) => {
          return input === document.activeElement;
        });

        if (!isAnyInputFocused) {
          container.classList.remove("focused");
        }
      }, 0);
    });
  });
});
