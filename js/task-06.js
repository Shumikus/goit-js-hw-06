const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (e) => {
  inputEl.classList.add("invalid");
  e.currentTarget.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.replace("invalid", "valid")
    : inputEl.classList.replace("valid", "invalid");
});
