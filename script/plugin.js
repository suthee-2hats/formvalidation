export class formvalidation {

    constructor(container,rules = {}) {
        this.container = document.querySelector(container);

        console.log("Selected element:", this.container);
    }

    init() {

        if (!this.container) {
            console.log("Form was NOT found");
            return;
        }

        console.log("Form was found:", this.container);

        this.container.addEventListener("blur", (event) => {

            console.log("Blurred element:", event.target);
        
            console.log("Input type:", event.target.type);

            if(event.target.type === "text"){
                this.textValidation(event.target);
            }
            if(event.target.type === "email"){
                this.emailValidation(event.target);
            }
            if(event.target.type === "password"){
                this.passwordValidation(event.target);

            }
            if(event.target.type === "date"){
                this.dobValidation(event.target);
            }
            if(event.target.type === "number"){
                this.ageValidation(event.target);
            }

        
        }, true);
    }

    //text vaidation completed !!
    textValidation(input_field){
        const value = input_field;
        const errorDisplay = input_field.nextElementSibling;
    
        const pattern = /^[A-Za-z]+$/;
        value.pattern = pattern;
       if(value.validity.valueMissing){
          
            this.showErrorInInput(errorDisplay,"name can't be blank !!");
            return false;
    
        }
        if(value.validity.patternMissmatch)
        {
           
            this.showErrorInInput(errorDisplay,"enter a valid username !!");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        
    
       return true;

       
    }
    emailValidation(email){
    
        const value = email;
        const errorDisplay = email.nextElementSibling;
        if(value.validity.valueMissing){
            this.showErrorInInput(errorDisplay,"enter value for email");
            return false;
        }
        if(value.validity.typeMismatch)
        {
            this.showErrorInInput(errorDisplay,"write a valid email");
            return false;
    
        }
        this.showErrorInInput(errorDisplay,"");
        
        return true;
    
    }
    passwordValidation(password){
        const value = password.value;
        const  errorDisplay = password.nextElementSibling;
    
    
        if(value.length < 8){
           
            this.showErrorInInput(errorDisplay,"password should contain atleast 8 charecter !!");
            return false;
        }
        if(!/[A-Z]/.test(value)){
            this.showErrorInInput(errorDisplay,"password should contain atleast one  upper class letter !!");
            return false;
        }
        if(!/[a-z]/.test(value)){
            this.showErrorInInput(errorDisplay,"password should contain atleast one  lower class letter!!");
            return false;
        }
        if(!/[0-9]/.test(value)){
            this.showErrorInInput(errorDisplay,"password should contain atleast one  numerical value !!");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    }


    dobValidation(dob){
        const value = dob.value;
        const  errorDisplay = dob.nextElementSibling;
     
    
        if(value === ""){
           
            this.showErrorInInput(errorDisplay,"enter dob");
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
            
            this.showErrorInInput(errorDisplay,"enter a valid dob");
            return false;
        }
        if(selectDate < maxLimit){
          
            this.showErrorInInput(errorDisplay,"age must be less than 150 years");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    
    }
    ageValidation(age){
        const value = age;
        const errorDisplay = age.nextElementSibling;
        if(value.value === ""){
         
            this.showErrorInInput(errorDisplay,"enter age");
            return false;
        }
        this.showErrorInInput(errorDisplay,"");
        return true;
    
    }



    showErrorInInput(displayError,msg){

        displayError.innerHTML = msg;
      
    
    } 
}