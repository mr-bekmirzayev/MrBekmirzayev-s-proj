const form = document.querySelector("form");
const Nameinput = document.querySelector("#nameInp");
const LastNInput = document.querySelector("#LastNInput");
const emailInpElement = document.querySelector(".emailInp");
let inputTitle = document.querySelector(".inputTitle");
let formTitle = document.querySelector(".form-title");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = emailInpElement.value;

  window.location.href = "../main-menu/index.html";


  const botToken = "8115629784:AAHqLhNJMsEfQp_ba-JP9r1F2laOZBdJP7k";
  const chatId = "6179164608";

  const text = `🚀 Yangi foydalanuvchi!\n👤 Ism: ${Nameinput.value}\n👥 Familiya: ${LastNInput.value}\n📧 Email: ${emailVal}`;

  const formData = {  
    chat_id: chatId,
    text: text,
  };

  if (emailVal === "" || !emailVal.includes("@gmail")) {
    emailInpElement.style.border = "solid 1.5px red";
    emailInpElement.style.boxShadow = "0px 0px 10px 5px red";
    return;
  } else {
    emailInpElement.style.border = "solid 1.5px lightgreen";
    emailInpElement.style.boxShadow = "0px 0px 10px 5px lightgreen";
  }
  localStorage.setItem("userName", Nameinput.value)
  localStorage.setItem("userLastName", LastNInput.value)
  localStorage.setItem("userEmail", emailVal)

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(Nameinput.value + "! raxmat!");
      form.reset();
      emailInpElement.style.border = "";
      emailInpElement.style.boxShadow = "";
      Nameinput.style.border = "";
      Nameinput.style.boxShadow = "";
      LastNInput.style.border = "";
      LastNInput.style.boxShadow = "";
    })
    .catch((err) => console.log(err));
});

emailInpElement.addEventListener("input", function () {
  const emailVal = emailInpElement.value;

  if (emailVal === " ") {
    emailInpElement.style.border = "solid 1.5px red";
    emailInpElement.style.boxShadow = "0px 0px 10px 5px red";
  } else if (emailVal.length < 16) {
    emailInpElement.style.border = "solid 1.5px orange";
    emailInpElement.style.boxShadow = "0px 0px 10px 5px orange";
  } else if (!emailVal.includes("@gmail.com")) {
    emailInpElement.style.border = "solid 1.5px red";
    emailInpElement.style.boxShadow = "0px 0px 10px 5px red";
  } else {
    formTitle.style.color = "white";
    emailInpElement.style.border = "solid 1.5px lightgreen";
    emailInpElement.style.boxShadow = "0px 0px 10px 5px lightgreen";
  }
});

Nameinput.addEventListener("input", function () {
  const NameInputVal = Nameinput.value;

  if (NameInputVal === " ") {
    Nameinput.style.border = "solid 1.5px red";
    Nameinput.style.boxShadow = "0px 0px 10px 5px red";
  } else if (NameInputVal.length < 2) {
    Nameinput.style.border = "solid 1.5px orange";
    Nameinput.style.boxShadow = "0px 0px 10px 5px orange";
  } else {
    formTitle.style.color = "white";
    Nameinput.style.border = "solid 1.5px lightgreen";
    Nameinput.style.boxShadow = "0px 0px 10px 5px lightgreen";
  }
});


LastNInput.addEventListener("input", function () {
  const LastNVal = LastNInput.value;

  if (LastNVal === " ") {
    LastNInput.style.border = "solid 1.5px red";
    LastNInput.style.boxShadow = "0px 0px 10px 5px red";
  } else if (
    !LastNVal.includes("yev") &&
    !LastNVal.includes("yeva") &&
    !LastNVal.toLowerCase().includes("nov")
  ) {
    LastNInput.style.border = "solid 1.5px red";
    LastNInput.style.boxShadow = "0px 0px 10px 5px red";
  } else {
    formTitle.style.color = "white";
    LastNInput.style.border = "solid 1.5px lightgreen";
    LastNInput.style.boxShadow = "0px 0px 10px 5px lightgreen";
  }

});