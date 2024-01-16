
/** Capturing all the element by qurySelector */
let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let showPassword = document.querySelector(".btn");

/** Capturing element class err-message by using querySelectorAll */
let errorMessages = document.querySelectorAll(".error-message");
let emptyfieldMessage = document.querySelectorAll(".empty-field");

/** Declaring variable for switch logic */
let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let field;
let fnFlag, lnFlag, eFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let element of emptyfieldMessage){
  element.classList.add("d-none")
}

for(let errorMessage of errorMessages){
  errorMessage.classList.add("d-none")
}

/** Applying event on formData  */
formData.addEventListener("keyup", (e) => {
  e.preventDefault();
  field = e.target.dataset.key;
  switch(field){
    case "firstName":
      firstName = e.target.value;
      fnTarget = e.target;
      break;
    case "lastName":
      lastName = e.target.value;
      lnTarget = e.target;
      break;
    case "email":
      email = e.target.value;
      emailTarget = e.target;
      break;
    case "password":
      password = e.target.value;
      pwdTarget = e.target;
      break;
    default:
      firstName = lastName = email = password = "";
      break;
  }
})

/** Submit button logic */
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(firstName, lastName, email, password);
  // For first name
  if(firstName){
    emptyfieldMessage[0].classList.add("d-none")
    if(!nameRegex.test(firstName)){
      fnTarget.classList.add("error");
      errorMessages[0].classList.remove("d-none");
      fnFlag = false;
    }else{
      fnTarget.classList.remove("error");
      errorMessages[0].classList.add("d-none")
      fnFlag = true;
    }
  }else{
    emptyfieldMessage[0].classList.remove("d-none")
  }
  // For Second or last name
  if(lastName){
    emptyfieldMessage[1].classList.add("d-none")
    if(!nameRegex.test(lastName)){
      lnTarget.classList.add("error");
      errorMessages[1].classList.remove("d-none");
      lnFlag = false;
    }else{
      lnTarget.classList.remove("error");
      errorMessages[1].classList.add("d-none");
      lnFlag = true;
    }
  }else{
    emptyfieldMessage[1].classList.remove("d-none")
  }
  // For email field
  if(email){
    emptyfieldMessage[2].classList.add("d-none")
    if(!emailRegex.test(email)){
      emailTarget.classList.add("error");
      errorMessages[2].classList.remove("d-none");
      eFlag = false;
    }else{
      emailTarget.classList.remove("error");
      errorMessages[2].classList.add("d-none");
      eFlag = true;
    }
  }else{
    emptyfieldMessage[2].classList.remove("d-none")
  }
  // For password field
  if(password){
    emptyfieldMessage[3].classList.add("d-none");
    if(!passwordRegex.test(password)){
      pwdTarget.classList.add("error");
      errorMessages[3].classList.remove("d-none");
      pwdFlag = false;
    }else{
      pwdTarget.classList.remove("error");
      errorMessages[3].classList.add("d-none");
      pwdFlag = true;
    }
  }else{
    emptyfieldMessage[3].classList.remove("d-none");
  }

  if(fnFlag && lnFlag && eFlag && pwdFlag){
    fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
    window.location.href = "/success.html";
  }
})

// show Password
showPassword.addEventListener("click", (e) => {
  e.preventDefault();
  if(pwdTarget.getAttribute("type") === "text"){
    pwdTarget.setAttribute("type", "password")
  }else{
    pwdTarget.setAttribute("type", "text")
  }
})
