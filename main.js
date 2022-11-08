const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
    menu_box.classList.toggle("active");
    menu.classList.toggle("active");
    sidebar.classList.toggle("active");
});