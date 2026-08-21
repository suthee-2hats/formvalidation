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
        
        }, true);
    }
}