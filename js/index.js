const navbar = document.getElementById("header");
const gototop = document.getElementById("goto-top");
gototop.addEventListener("click", () => {
  window.location.href = "#";
});
if (window.scrollY > 300) {
  navbar.style.display = "none";
  gototop.style.display = "none";
} else {
  navbar.style.display = "flex";
  gototop.style.display = "none";
}
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll > 300) {
    navbar.style.display = "none";
    gototop.style.display = "block";
  } else {
    navbar.style.display = "flex";
    gototop.style.display = "none";
  }
});
