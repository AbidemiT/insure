let burger = document.querySelector(".burger");
let cancel = document.querySelector(".cancel");
let sm = document.querySelector(".sm-menu");
let body = document.querySelector("body");
let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => { 
    item.addEventListener('click', activeItem);
})


burger.addEventListener("click", toggleMenu);
cancel.addEventListener("click", toggleMenu);

function toggleMenu() {
    cancel.classList.toggle("nodisplay");
    burger.classList.toggle("nodisplay");
    sm.classList.toggle("nodisplay");
    body.style.overflow = "hidden";
}

function activeItem(e) {
    menuItems.forEach(item => { 
        item.lastChild.classList.remove('active');
    })
    let link = e.target;
    link.classList.add("active");
}
