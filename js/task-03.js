const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallery = document.querySelector(".gallery");
const itemImages = [];

for (const iterator of images) {
  const li = `<li><img src="${iterator.url}" alt="${iterator.alt}"width = 400 height = 230></li>`;
  itemImages.push(li);
}
listGallery.insertAdjacentHTML("afterbegin", itemImages);
listGallery.style.display = "flex";
listGallery.style.listStyle = "none";
listGallery.style.gap = "20px";
