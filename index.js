const heading = document.querySelector(".heading");
const header = heading.closest("header");
header.style.border = "solid lightgrey 5px";

const info = document.querySelector(".info");
const infoPackages = document.querySelector(".info-package");
const packageTitles = document.querySelectorAll(".package-title");

if (info.contains(infoPackages)) {
  packageTitles.forEach((title) => {
    title.previousElementSibling.style.border = "solid black 3px";
  });
}

const labels = document.querySelectorAll(".info label");
labels.forEach((label) => {
  if (label.matches(".mild")) {
    label.style.borderBottom = "solid yellow 2px";
  } else if (label.matches(".intense")) {
    label.style.borderBottom = "solid orange 2px";
  } else {
    label.style.borderBottom = "solid red 2px";
  }
});

const navList = document.querySelector(".nav-list");
const footer = document.querySelector(".footer");
const siteMap = document.querySelector(".site-map");
const listItems = navList.children;

for (let i = 0; i < listItems.length; i++) {
  const item = document.createElement("li");
  item.innerText = listItems[i].innerText;
  siteMap.appendChild(item);
}
