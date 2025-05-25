
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("button");
const errorIcon = document.querySelectorAll(".error-icon");
const errorMsg = document.querySelectorAll(".error-msg");
const signupForm = document.querySelector("#Signup-form");
const tryForFreeParagraph = document.querySelector(".try");
const successPage = document.querySelector(".success-page");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let hasError = false;

  if (firstName.value === "") {
    errorIcon[0].classList.remove("hidden");
    errorMsg[0].classList.remove("hidden");
    firstName.style.outline = "1px solid red";
    hasError = true;
    
  }

    if (lastName.value === "") {
        errorIcon[1].classList.remove("hidden");
        errorMsg[1].classList.remove("hidden");
        lastName.style.outline = "1px solid red";
        hasError = true;
    }

    if (email.value === "") {
        errorIcon[2].classList.remove("hidden");
        errorMsg[2].classList.remove("hidden");
        email.classList.add("red-placeholder");
        email.style.outline = "1px solid red";
        hasError = true;
        
    } else if (!Regex.test(email.value)) {
        errorIcon[2].classList.add("hidden");
        errorMsg[2].classList.remove("hidden");
        email.classList.add("red-placeholder");
        email.style.outline = "1px solid red";
        errorMsg[2].innerHTML = "Looks like this is not an email";
        hasError = true;
    }

    if (password.value === "") {
        errorIcon[3].classList.remove("hidden");
        errorMsg[3].classList.remove("hidden");
        password.style.outline = "1px solid red"
        hasError = true;
    }

      if (!hasError) {
    signupForm.classList.add("hidden"); 
    tryForFreeParagraph.classList.add("hidden"); 
    successPage.classList.remove("hidden"); 
  }
})


const inputs = [firstName, lastName, email, password];

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      errorIcon[index].classList.add("hidden");
      errorMsg[index].classList.add("hidden");
      input.style.outline = "none"; 
    }
  });
})
