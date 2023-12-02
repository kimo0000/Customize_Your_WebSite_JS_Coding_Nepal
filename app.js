const header = document.querySelector("header");
const paint = document.querySelector(".paint");
const colors = document.querySelectorAll(".colors span");
const mode = document.querySelector(".icon");
const contentSpan = document.querySelector(".content span");
const btn = document.querySelector(".btn");

if (localStorage.getItem("color")) {
  header.style.backgroundColor = localStorage.getItem("color");
  contentSpan.style.color = localStorage.getItem("color");
  btn.style.backgroundColor = localStorage.getItem("color");

  colors.forEach((color) => {
    if (color.dataset.color === localStorage.getItem("color")) {
      color.classList.add("active");
    }
  });
}

paint.addEventListener("click", () => header.classList.toggle("open"));

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    color.classList.add("active");

    header.style.backgroundColor = e.currentTarget.dataset.color;
    contentSpan.style.color = e.currentTarget.dataset.color;
    btn.style.backgroundColor = e.currentTarget.dataset.color;

    localStorage.setItem("color", e.currentTarget.dataset.color);
  });
});

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.body.style.color = "#fff";
    header.style.backgroundColor = "#222";
    header.classList.remove("open");
    paint.style.display = "none";
    mode.className = "fa-solid fa-sun icon";
    contentSpan.style.color = "#fff";
    btn.style.backgroundColor = "#444";
  } else {
    document.body.style.color = "#000";
    header.style.backgroundColor = "blueviolet";
    paint.style.display = "block";
    mode.className = "fa-solid fa-moon icon";
    contentSpan.style.color = "blueviolet";
    btn.style.backgroundColor = "blueviolet";
  }
});
