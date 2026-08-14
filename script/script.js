console.log("js is working !!!");

const userName = document.querySelector('#username');

const email = document.querySelector("#email");

const age = document.querySelector("#age");


//adding event listeners ...
email.addEventListener("blur", () => {
   emailValidation(email);
})

userName.addEventListener("blur", () => {
    usernameValidation(userName);
 })

 age.addEventListener("blur", () => {
    console.log("age emailValidation");
    ageValidation(age);
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




//common error display 
function showErrorInInput(displayError,msg){

    displayError.innerHTML = msg;
  

} 