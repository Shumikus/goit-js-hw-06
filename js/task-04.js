const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

increment.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
