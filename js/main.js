let navBar = document.getElementById("header__nav_burger")
let navList = document.getElementById("header__nav_list")
let backtop = document.getElementById("backtop")
let navshrink = document.getElementById("navshrink")

window.addEventListener("scroll", function () {
    showBacktop();
    showNavShrink()
})
navBar.addEventListener("click", function () {
    navList.classList.toggle("show_header__nav_list")
})

function showBacktop() {
    if (scrollY > 10) {
        backtop.classList.add("show_backtop")
    }
    else {
        backtop.classList.remove("show_backtop")
    }
}

function showNavShrink() {
    if (scrollY > 100) {
        navshrink.classList.add("show_navshrink")
    }
    else {
        navshrink.classList.remove("show_navshrink")
    }
}