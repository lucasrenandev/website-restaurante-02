const header = document.getElementById("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("open")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", function() {
    navBar.classList.remove("open")
    menuIcon.classList.remove("bx-x")
})