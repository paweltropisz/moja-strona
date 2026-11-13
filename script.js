const przycisk = document.getElementById("przyciskMenu");
const menu = document.getElementById("menu");

przycisk.addEventListener("click", () => {
  const otwarte = menu.classList.toggle("otwarte");
  przycisk.setAttribute("aria-expanded", otwarte ? "true" : "false");
});

menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("otwarte");
    przycisk.setAttribute("aria-expanded", "false");
  })
);
