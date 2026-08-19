import {userName,usernameValidation} from "./script.js";
import {email,emailValidation} from "./script.js";
import {age,ageValidation} from "./script.js";
import {password,passwordValidation}  from "./script.js";
import {conformPassword,conformPasswordValidation}  from "./script.js";
import {dob,dobValidation}  from "./script.js";
import {region,regionValidation}  from "./script.js";
import { checkbox,checkboxValidation } from "./script.js";

const submit = document.querySelector(".submit-button");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    ultimateValidation();
})

function ultimateValidation(){
    const testname =  usernameValidation(userName);
    const testemail =   emailValidation(email);
    const testage = ageValidation(age);
    const testpassword =  passwordValidation(password);
    const testconformPassword = conformPasswordValidation(conformPassword,password);
    const testdob = dobValidation(dob);
    const testregion = regionValidation(region);
    const testcheckbox = checkboxValidation(checkbox);

    if(!testname){
        return;
    }
    if(!testemail){
        return;
    }
    if(!testage){
        return;
    }
    if(!testpassword){
        return;
    }
    if(!testconformPassword){
        return;
    }
    if(!testdob){
        return;
    }
    if(!testregion){
        return;
    }
    if(!testcheckbox){
        return;
    }

    console.log("checking vercel");

    alert(
        `Registration successful!

Name: ${testname.value}
Email: ${testemail.value}
Date of Birth: ${testdob.value}
Region: ${testregion.value}`
    );
    


}