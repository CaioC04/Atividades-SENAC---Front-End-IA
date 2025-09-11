
const btn = document.querySelector(".dropbtn");
const menu = document.querySelector(".dropdown-content");

btn.addEventListener("click", () => {
menu.classList.toggle("show");
});


window.addEventListener("click", (e) => {
    if (!e.target.matches(".dropbtn")) {
      menu.classList.remove("show");
}
});