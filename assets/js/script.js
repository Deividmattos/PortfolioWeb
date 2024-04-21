const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelector("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offset - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
