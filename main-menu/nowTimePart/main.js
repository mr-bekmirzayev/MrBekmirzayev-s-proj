let loadingVideo = document.querySelector(".loadingVid");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let secund = document.querySelector(".secund");
let monthText = document.querySelector(".monthText");
let FullScreenbtn = document.querySelector(".FullScreenbtn");
let soatE = document.querySelector(".soat");
let qaeXab = document.querySelector('.qaeXab')
const networks = document.querySelector(".networks");
let qaeXabW = document.querySelector('.qaeXabW')
const myLogo = document.querySelector(".my-logo");
let year = document.querySelector(".year");
let notifP = document.querySelector(".notifacetion")
let month = document.querySelector(".month");
const animationDum1 = document.querySelector(".animationDum1")
let animationDum = document.querySelector(".animationDum");
let day = document.querySelector(".day");
let xabarMatni = document.querySelector('.xabarMatni')
let milliSecond = document.querySelector(".milSec");
window.onload = async function () {
  let textl = document.createElement("h3");
  document.body.appendChild(textl);
  textl.textContent = "kuting aniq vaqt yuklanmoqda...";
  textl.style.position = "absolute";

  textl.className = "xabarMatni";

  setInterval(() => {
    textl.textContent = "tayyor !";
  }, 3500);
  await new Promise((r) => setTimeout(r, 5000));

  textl.style.display = "none";
  loadingVideo.style.opacity = "0";
  textl.style.transition = "2s";
  FullScreenbtn.style.opacity = "1";
  FullScreenbtn.style.pointerEvents = "All";
  soatE.style.opacity = "1";
  animationDum.style.opacity = "1";
  animationDum1.style.opacity = "1"
  setInterval(soatY, 20);
  soatY();
};

FullScreenbtn.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen()
      .catch((err) => console.log(err));
  } else {
    document.exitFullscreen();
  }
});
setTimeout(() => {
  notifP.style.opacity = "1"
}, 7000);
function soatY() {
  let data = new Date();

  let h = data.getHours();
  let m = data.getMinutes();
  let s = data.getSeconds();
  let mil = data.getMilliseconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  mil = String(mil).padStart(3, "0");
  hour.innerHTML = h + ": ";
  minute.innerHTML = m + ":";
  secund.innerHTML = s + ":";
  milliSecond.innerHTML = mil;

  let yr = data.getFullYear();
  let mth = data.getMonth() + 1;
  let dy = data.getDate();

  mth = mth < 10 ? "0" + mth : mth;
  dy = dy < 10 ? "0" + dy : dy;

  year.textContent = yr;
  month.textContent = mth + ".";
  day.textContent = dy + ".";
  let joriyOyIndex = data.getMonth();   
}

FullScreenbtn.addEventListener('mouseenter', function(){
  notifP.classList.add('notifacetionhoverB')
  qaeXab.textContent = 'Xa, xuddi shu yer. bosing!'
  qaeXab.style.display = 'block'
  qaeXab.style.color = 'black'
  qaeXab.style.textContent = 'center'
  qaeXab.style.opacity = '1'
})
FullScreenbtn.addEventListener('mouseleave', function(){
  notifP.style.background = "white"
  qaeXab.style.display = 'none'
  qaeXab.style.opacity = '0'
  notifP.classList.toggle('notifacetionhoverB')
})
FullScreenbtn.addEventListener('click', function(){
  notifP.style.opacity = "0"
  qaeXabW.textContent = "ee gap yo'q!"
  qaeXabW.style.opacity = '1'
  qaeXab.style.display = 'block'
})
if(document.fullscreenElement){
  notifP.style.opacity = '0'
  notifP.style.display = 'none'
}else {
  notifP.style.display = "block"
  notifP.style.opacity = "1"
}
window.addEventListener('online', function() {
  console.log('internetga ulaning iltimos')
})