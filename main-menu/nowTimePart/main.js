let loadingVideo = document.querySelector(".loadingVid");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let secund = document.querySelector(".secund");
let FullScreenbtn = document.querySelector(".FullScreenbtn");
let soatE = document.querySelector(".soat");
const networks = document.querySelector(".networks");
const myLogo = document.querySelector(".my-logo");
let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
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
  networks.style.opacity = "1";
  FullScreenbtn.style.opacity = "1";
  soatE.style.opacity = "1";
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
}
