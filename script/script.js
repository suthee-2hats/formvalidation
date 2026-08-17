console.log("js is working !!!");

const userName = document.querySelector('#username');

const email = document.querySelector("#email");

const age = document.querySelector("#age");

const password = document.querySelector("#password");

const conformPassword = document.querySelector("#confirm-password");


//adding event listeners ...
email.addEventListener("blur", () => {
   emailValidation(email);
})

userName.addEventListener("blur", () => {
    usernameValidation(userName);
 })

 age.addEventListener("blur", () => {
   
    ageValidation(age);
 })

 password.addEventListener("blur", () => {
   
    passwordValidation(password);
 })

 conformPassword.addEventListener("blur", () => {
    console.log("password validation");
    conformPasswordValidation(conformPassword,password);
 })

 

 







//functions of form validations 
function usernameValidation(userName){
    const value = userName;
    const errorDisplay = document.querySelector("#username-error");

    const pattern = /^[A-Za-z]+$/;
    value.pattern = pattern;
   if(value.validity.valueMissing){
        console.log("name cant be blank !!");
        showErrorInInput(errorDisplay,"name can't be blank !!");
        return;

    }
    if(value.validity.patternMissmatch)
    {
        console.log("enter a valid username ");
        showErrorInInput(errorDisplay,"enter a valid username !!");
        return;
    }
    showErrorInInput(errorDisplay,"");
    console.log("working ...");


    
}

function emailValidation(email){
    
    const value = email;
    const errorDisplay = document.querySelector("#email-error");
    if(value.validity.valueMissing){
        showErrorInInput(errorDisplay,"enter value for email");
        return;
    }
    if(value.validity.typeMismatch)
    {
        showErrorInInput(errorDisplay,"write a valid email");
        return;

    }
    showErrorInInput(errorDisplay,"");

}

function ageValidation(age){
    const value = age;
    const errorDisplay = document.querySelector("#age-error");
    if(value.value === ""){
        console.log("age is empty");
        showErrorInInput(errorDisplay,"enter age");
        return;
    }
    showErrorInInput(errorDisplay,"");

}

//function for passwords 

function passwordValidation(password){
    const value = password.value;
    const  errorDisplay = document.querySelector("#password-error");


    if(value.length < 8){
        console.log("it is less than 8 charecter");
        showErrorInInput(errorDisplay,"password should contain atleast 8 charecter !!");
        return;
    }
    if(!/[A-Z]/.test(value)){
        showErrorInInput(errorDisplay,"password should contain atleast one  upper class letter !!");
        return;
    }
    if(!/[a-z]/.test(value)){
        showErrorInInput(errorDisplay,"password should contain atleast one  lower class letter!!");
        return;
    }
    if(!/[0-9]/.test(value)){
        showErrorInInput(errorDisplay,"password should contain atleast one  numerical value !!");
        return;
    }
    showErrorInInput(errorDisplay,"");

}

function conformPasswordValidation(conformPassword,password){
    const original = password;
    const test = conformPassword;
    const  errorDisplay = document.querySelector("#confirm-password-error");

    if(original.value != test.value){
        showErrorInInput(errorDisplay,"should be same as before !!");
        return;
    }
    showErrorInInput(errorDisplay,"");

}


//common error display 
function showErrorInInput(displayError,msg){

    displayError.innerHTML = msg;
  

} 