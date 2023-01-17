// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector("header")
    const fixNav = header.offsetTop
    if (window.pageYOffset > fixNav) {
        header.classList.add("navbar-fixed")
        headerAbout.classList.remove("lg:mr-16")
        headerAbout.classList.remove("lg:ml-5")
        backToTop.classList.remove("hidden")
        backToTop.classList.add("flex")
        if(logo.contains(cloud)){
            logo.classList.add("cloud")
            logo.classList.remove("moon")
            logo.removeChild(cloud)
            backToTop.replaceChild(cloudShortcut, moonShortcut)
            
        } else if(logo.contains(moon)){
            logo.classList.add("moon")
            logo.classList.remove("cloud")
            logo.removeChild(moon)
            backToTop.replaceChild(moonShortcut, cloudShortcut)
        }
    } else {
        header.classList.remove("navbar-fixed")
        headerAbout.classList.add("lg:mr-16")
        headerAbout.classList.add("lg:ml-5")
        backToTop.classList.remove("flex")
        backToTop.classList.add("hidden")
        if(logo.classList.contains("cloud")){
            logo.insertBefore(cloud, awann)
        } else if(logo.classList.contains("moon")){
            logo.insertBefore(moon, awann)
        }
        
    }
}


//  Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active")
    navMenu.classList.toggle("hidden")
})


// Klik di-luar Hamburger
window.addEventListener("click", function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active")
        navMenu.classList.add("hidden")
    }
})


// Awan dan Cuaca
window.addEventListener("click", function(h){
    if(h.target == cloud){
        logo.replaceChild(moon, cloud)
        html.classList.add("dark")
        localStorage.theme = "dark"
    } else if(h.target == moon) {
        logo.replaceChild(cloud, moon)
        html.classList.remove("dark")
        localStorage.theme = "light"
    }
})

const logo = document.getElementById("logo")
const cloud = document.getElementById("cloud")
const awann = document.getElementById("awann")
const headerAbout = document.getElementById("header-about")


// Gambar Bulan
const moon = document.createElement("img")
moon.setAttribute("src", "dist/img/header/bulan.png")
moon.setAttribute("class", "w-1/6 cursor-pointer animate-pulse mr-3")
moon.setAttribute("alt", "bulan")


// Kembali ke Atas
const backToTop = document.getElementById("backToTop")
const cloudShortcut = document.getElementById("cloud-shortcut")
const moonShortcut = document.createElement("img")
moonShortcut.setAttribute("src", "dist/img/header/bulan.png")
moonShortcut.setAttribute("class", "h-4/6")


// Dark Mode
const html = document.querySelector("html")

// Toggle cuaca sesuai local storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    logo.replaceChild(moon, cloud)
  } 


// Tanggal dan Waktu
function showTime() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
  
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  
    let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  
    document.getElementById("time").innerHTML = currentTimeString;
    setTimeout(showTime, 1000);
  }
  
  showTime();
  
  