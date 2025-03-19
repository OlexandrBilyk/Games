const circle = document.querySelector(".switcher__circle");
circle.addEventListener("click", () => {
  circle.classList.toggle("switcher__circle--light");
  document.body.classList.toggle("dark");
});
