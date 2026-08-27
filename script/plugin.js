export class formvalidation {

    constructor(container) {
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
        
        }, true);
    }
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
    showErrorInInput(displayError,msg){

        displayError.innerHTML = msg;
      
    
    } 
}