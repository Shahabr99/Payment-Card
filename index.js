const cardNumber = document.querySelector("#card");
const visualNumber = document.querySelector(".card-number");
const cardName = document.querySelector("#name");
const user = document.querySelector(".user");
const expMonth = document.querySelector("#expmonth");
const expYear = document.querySelector("#expyear");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cvc = document.querySelector("#cvc");
const cvcCode = document.querySelector(".code");
const numberError1 = document.querySelector(".error1");
const numberError2 = document.querySelector(".error2");
const numberError3 = document.querySelector(".error3");
const btn = document.querySelector(".submit-btn");
const cardForm = document.querySelector(".card-form");
const confirmation = document.querySelector(".confirmed-card");

//Change Name
cardName.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    user.textContent = "Jane Appleseed";
  } else {
    user.textContent = e.target.value.trim();
    console.log(user);
  }
});

//Card Number
cardNumber.addEventListener("keyup", function (e) {
  const digits = e.target.value;
  if (isFinite(digits)) {
    visualNumber.textContent = digits.replace(/\d{4}(?=.)/g, "$& ");
    numberError1.classList.remove("error");
    cardNumber.style.border = "1px solid rgba(128, 128, 128, 0.325)";
  } else {
    numberError1.classList.add("error");
    cardNumber.style.border = "1px solid red";
  }
});

//Expiration Date
expMonth.addEventListener("keyup", (e) => {
  const numMonth = e.target.value;
  if (numMonth === "") {
    numberError2.classList.add("error");
    expMonth.style.border = "1px solid red";
  } else {
    month.textContent = numMonth;
    expMonth.style.border = "1px solid rgba(128, 128, 128, 0.325)";
    numberError2.classList.remove("error");
  }
});

expYear.addEventListener("keyup", (e) => {
  const numYear = e.target.value;
  if (numYear === "") {
    numberError2.classList.add("error");
    expYear.style.border = "1px solid red";
  } else if (numYear >= 22) {
    year.textContent = numYear;
    numberError2.classList.remove("error");
    expYear.style.border = "1px solid rgba(128, 128, 128, 0.325)";
  } else if (numYear.length === 2 && numYear < 22) {
    expYear.style.border = "1px solid red";
    alert("please enter between 22-30");
  }
});

//CVC
cvc.addEventListener("keyup", (e) => {
  const cvcDigits = e.target.value;
  if (cvcDigits === "") {
    numberError3.classList.add("error");
    cvc.style.border = "1px solid red";
  } else {
    cvcCode.textContent = cvcDigits;
    numberError3.classList.remove("error");
    cvc.style.border = "1px solid rgba(128, 128, 128, 0.325)";
  }
});

//Submit & Confirmation
btn.addEventListener("submit", function () {
  cardForm.style.display = "none";
  confirmation.style.display = "block";
});
