const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onNewInput);

const defaultOutput = output.textContent;

function onNewInput(event) {
  output.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
}
