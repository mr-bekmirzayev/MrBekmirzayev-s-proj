let textEmail = document.querySelector(".textEmail");
let textName = document.querySelector(".textName");
let textLastName = document.querySelector(".textLastName");
let sideInf = document.querySelector(".inf")

let SideProfile = document.querySelector(".SideProfile");
let SideSettings = document.querySelector(".SideSettings");
let SideNowTime = document.querySelector(".SideNowTime");

window.addEventListener('scroll'){
    console.log('surdingiz a?')
}
SideNowTime.addEventListener('click', function() {
    window.location.href = "/main-menu/nowTimePart/index.html";
})
const ismi = localStorage.getItem('userName') || 'mehmon'
const familiyasi = localStorage.getItem('userLastName') ||  'mehmon'
const emaili = localStorage.getItem('userEmail')
sideInf.innerHTML += `
<h2>${ismi}</h2>
`
console.log(ismi)