console.log("js is working !!!");

const userName = document.querySelector('#username');

export {userName};

const email = document.querySelector("#email");

export {email};

const age = document.querySelector("#age");

export {age};

const password = document.querySelector("#password");

export {password};

const conformPassword = document.querySelector("#confirm-password");

export {conformPassword};

const dob = document.querySelector("#dob");

export {dob};

const region = document.querySelector("#region");

export {region};

const checkbox = document.querySelector("#terms");

export {checkbox};


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
   
    conformPasswordValidation(conformPassword,password);
 })

 dob.addEventListener("blur", () => {
   
    dobValidation(dob);
 })

 region.addEventListener("blur", () => {
   
    regionValidation(region);
 })

 







//functions of form validations 
export function usernameValidation(userName){
    const value = userName;
    const errorDisplay = document.querySelector("#username-error");

    const pattern = /^[A-Za-z]+$/;
    value.pattern = pattern;
   if(value.validity.valueMissing){
      
        showErrorInInput(errorDisplay,"name can't be blank !!");
        return false;

    }
    if(value.validity.patternMissmatch)
    {
       
        showErrorInInput(errorDisplay,"enter a valid username !!");
        return false;
    }
    showErrorInInput(errorDisplay,"");
    

   return true;
    
}

export function emailValidation(email){
    
    const value = email;
    const errorDisplay = document.querySelector("#email-error");
    if(value.validity.valueMissing){
        showErrorInInput(errorDisplay,"enter value for email");
        return false;
    }
    if(value.validity.typeMismatch)
    {
        showErrorInInput(errorDisplay,"write a valid email");
        return false;

    }
    showErrorInInput(errorDisplay,"");
    
    return true;

}

export function ageValidation(age){
    const value = age;
    const errorDisplay = document.querySelector("#age-error");
    if(value.value === ""){
     
        showErrorInInput(errorDisplay,"enter age");
        return false;
    }
    showErrorInInput(errorDisplay,"");
    return true;

}

//function for passwords 

export function passwordValidation(password){
    const value = password.value;
    const  errorDisplay = document.querySelector("#password-error");


    if(value.length < 8){
       
        showErrorInInput(errorDisplay,"password should contain atleast 8 charecter !!");
        return false;
    }
    if(!/[A-Z]/.test(value)){
        showErrorInInput(errorDisplay,"password should contain atleast one  upper class letter !!");
        return false;
    }
    if(!/[a-z]/.test(value)){
        showErrorInInput(errorDisplay,"password should contain atleast one  lower class letter!!");
        return false;
    }
    if(!/[0-9]/.test(value)){
        showErrorInInput(errorDisplay,"password should contain atleast one  numerical value !!");
        return false;
    }
    showErrorInInput(errorDisplay,"");
    return true;
}

export function conformPasswordValidation(conformPassword,password){
    const original = password;
    const test = conformPassword;
    const  errorDisplay = document.querySelector("#confirm-password-error");

    if(original.value != test.value){
        showErrorInInput(errorDisplay,"should be same as before !!");
        return false;
    }
    showErrorInInput(errorDisplay,"");
    return true;

}

export function dobValidation(dob){
    const value = dob.value;
    const  errorDisplay = document.querySelector("#dob-error");
 

    if(value === ""){
       
        showErrorInInput(errorDisplay,"enter dob");
        return false;
    }

    const selectDate =new  Date(value);
    const today = new Date();
    const maxLimit = new Date(
                              today.getFullYear() - 150,
                              today.getMonth(),
                              today.getDay()
                            );

    if(selectDate >= today){
        
        showErrorInInput(errorDisplay,"enter a valid dob");
        return false;
    }
    if(selectDate < maxLimit){
      
        showErrorInInput(errorDisplay,"age must be less than 150 years");
        return false;
    }
    showErrorInInput(errorDisplay,"");
    return true;

}

export function regionValidation(region){
    const value = region;
    const errorDisplay = document.querySelector("#region-error");
    if(value.value === ""){
        
        showErrorInInput(errorDisplay,"select the region");
        return false;
    }
    showErrorInInput(errorDisplay,"");
    return true;

}



export function checkboxValidation(checkbox){
    const errorDisplay = document.querySelector("#terms-error");
    if(!checkbox.checked){
        console.log("not checked ");
        showErrorInInput(errorDisplay,"checkbox is unchecked");
        return false;

    }
    showErrorInInput(errorDisplay,"");
    return true;

}

//common error display 
function showErrorInInput(displayError,msg){

    displayError.innerHTML = msg;
  

} 