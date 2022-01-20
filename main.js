const inputField = document.getElementsByTagName("input")[0];
const fieldValue = document.querySelector(".field__value");
const noFieldError = document.querySelector(".no__field");
const noValidEmail = document.querySelector(".no__valid__email");

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

inputField.addEventListener("keyup", (e) => {
  const fieldValue = e.target.value;
  // console.log("fieldValue", fieldValue); DEBUGING
  // console.log("noFieldError", noFieldError);
  if (fieldValue === "") {
    // inputField.classList.toggle(emailError)

    e.target.style.border = "1px solid red";
    noFieldError.style.display = "block";
  } else {
    e.target.style.border = "1px solid lightblue";
    noFieldError.style.display = "none";
  }
});

fieldValue.addEventListener("keyup", (e) => {
  if (!e.target.value.match(emailRegExp) && e.target.value != "") {
    e.target.style.border = "1px solid red";
    noValidEmail.style.display = "block";
  } else {
    e.target.style.border = "1px solid red";
    noValidEmail.style.display = "none";

    setTimeout(function () {
      e.target.style.border = "1px solid grey";
      noValidEmail.style.display = "none";
      noFieldError.style.display = "none";
    }, 1000);
  }
});
