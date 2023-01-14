// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector("header")
    const fixNav = header.offsetTop

    if(window.pageYOffset > fixNav){
        header.classList.add("navbar-fixed")
        backToTop.classList.remove("hidden")
        backToTop.classList.add("flex")
        logo.removeChild(cloud)
        headerAbout.classList.remove("lg:mr-16")
        headerAbout.classList.remove("lg:ml-5")
    } else {
        header.classList.remove("navbar-fixed")
        backToTop.classList.remove("flex")
        backToTop.classList.add("hidden")
        logo.insertBefore(cloud, awann)
        headerAbout.classList.add("lg:mr-16")
        headerAbout.classList.add("lg:ml-5")
    }
}

//  Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("hamburger-active")
    navMenu.classList.toggle("hidden")
})

const backToTop = document.getElementById("backToTop")


const logo = document.getElementById("logo")
const cloud = document.getElementById("cloud")
const awann = document.getElementById("awann")
const headerAbout = document.getElementById("header-about")