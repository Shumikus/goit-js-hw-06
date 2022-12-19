const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const item = [];

for (const iterator of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = iterator;
  item.push(listItem);
}

list.append(...item);
