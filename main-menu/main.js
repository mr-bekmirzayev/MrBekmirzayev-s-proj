/** @type {HTMLElement}*/
let textEmail = document.querySelector(".textEmail");
let textName = document.querySelector(".textName");
let textLastName = document.querySelector(".textLastName");
let sideInf = document.querySelector(".inf");
let hiPart = document.querySelector('.hiPart')
const sideBar = document.querySelector(".sideBar");
const SideAction = document.querySelectorAll(".SideAction");
let headerList = document.querySelector('.headerList')
const header = document.querySelector('header')
let SideProfile = document.querySelector(".SideProfile");
let orabTuruvchi = document.querySelector(".orabTuruvchi");
let sideIcons = document.querySelector(".sideIcon");
let sideActionsTxt = document.querySelectorAll(".sideActionsTxt");
const closeSideBar = document.querySelector(".closeSideBar");
const Profrasm =
  localStorage.getItem("profRasmi") ||
  "https://img.freepik.com/premium-vector/vector-man-glitch-style-profile-icon_549897-2126.jpg";
const tarHol = localStorage.getItem("tarholi") || "tarjimaiy hol mavjud emas!";

let SideSettings = document.querySelector(".SideSettings");
let SideNowTime = document.querySelector(".SideNowTime");
SideNowTime.addEventListener("click", function () {
  window.location.href = "nowTimePart/index.html";
});
const ismi = localStorage.getItem("userName") || "mehmon";
const familiyasi = localStorage.getItem("userLastName") || "mehmon";
const emaili = localStorage.getItem("userEmail");
sideInf.innerHTML += `
    <div><img class="profImg" style="border-radius: 12px;" width="80px" src="${Profrasm}" alt="profRasm" /></div>
    <div class="profTitle">
    <p class="profinf">${ismi}</p>
    <h2 class="profinf">${familiyasi}</h2>
    <p class="profinf" style="font-size: 15px;">${tarHol}</p>
    </div>
    
    `;
    window.addEventListener('scroll', function() {
      if(this.window.scrollY > 12){
        header.classList.add('stickyHe')
      }else {
        header.classList.remove('stickyHe')
      }
    })
let profImg = document.querySelector(".profImg");
let profinf = document.querySelectorAll(".profinf");
closeSideBar.addEventListener("click", function () {
  if (closeSideBar.innerHTML === `<i class="fa-solid fa-angle-left"></i>`) {
    closeSideBar.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
    closeSideBar.style.left = "100px";
    sideBar.style.width = "100px";
    sideBar.style.padding = "0";

    SideProfile.style.setProperty("display", "flex", "important");
    SideAction.forEach((item) => {
      item.style.setProperty("border", "none");
      item.style.setProperty("font-size", "25px", "important");
      item.style.setProperty("margin-left", "5px", "important");
      item.style.setProperty("background-color", "black", "important");
      item.style.setProperty("border-radius", "7px", "important");
      item.style.setProperty("color", "white", "important");
      item.style.setProperty("padding", "10px 25px", "important");
      item.style.setProperty("width", "fit-content", "important");
      item.style.setProperty("position", "relative", "important");
      item.style.setProperty("left", "0", "important");
    });
    profImg.classList.add("bosilgandagiImg");

    profinf.forEach((item) => (item.style.display = "none"));
    sideActionsTxt.forEach((item) => {
      item.style.display = "none";
    });
    profImg.style.width = "60px";

    sideInf.style.background = "none";
  } else {
    SideAction.forEach((item) => {
      item.style.background = "none";
      item.style.setProperty("padding", "0");
      item.style.setProperty("font-size", "19px", "important");
      item.style.setProperty("border-radius", "7px", "important");
      item.style.setProperty("position", "relative", "important");
      item.style.setProperty("left", "0", "important");
    });
    sideBar.style.width = "auto";
    sideBar.style.padding = "15px 15px 0px 15px";
    profImg.classList.toggle("bosilgandagiImg");
    closeSideBar.innerHTML = `<i class="fa-solid fa-angle-left"></i>`;
    sideInf.style.background = "white";
    closeSideBar.style.left = "310px";

    profinf.forEach((item) => (item.style.display = "block"));
    sideActionsTxt.forEach((item) => {
      item.style.display = "block";
    });
    orabTuruvchi.style.opacity = "1";
  }
});
hiPart.innerHTML += `
<h2 style="color: grey;"><i class="fa-solid fa-thumbtack"></i> Xush Kelibsiz <span style="color:white; text-shadow: 0px 0px 10px white;">${ismi}</span></h2>
`
console.log(ismi);