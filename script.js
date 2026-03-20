'use strict';

const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".btn-submit");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const emailAddress = document.querySelector("#email-address").value;
    const querySelected = document.querySelector("input[name='query-type']:checked")
    const message = document.querySelector("#message").value;
    const checkbox = document.querySelector("#checkbox");
    
    if(firstName.trim() === "") {
        alert("First name is required");
        return false;
    }

    if(/[^a-zA-Z0-9]+$/.test(firstName)) {
        alert("Symbols are not allowed in the first name!")
        return false;
    }

    if(lastName.trim() === "") {
        alert("Last name is required");
        return false;
    }

    if(/[^a-zA-Z0-9-_]/.test(lastName)) {
        alert("Symbols are not allowed in the last name!");
        return false;
    }

    if(!firstName.trim() === "" || lastName.trim() === "") {
        alert("Name is required");
        return false;
    }

    if(emailAddress === "") {
        alert("Email address is required");
        return false;
    } 
    
    if(!emailAddress.includes("@")) {
        alert("Email does not include '@' keyword");
        return false;
    }

    if(!emailAddress.includes(".com")) {
        alert("Email must include keyword after '@' e.g. '.com'");
        return false;
    }

    if(emailAddress.length < 11) {
        alert("This is not a valid email addresss");
        return false;
    }
    
    if(!querySelected) {
        alert("A query type must be selected");
        return false;
    }
    
    if(message.trim() === "") {
        alert("Message is required");
        return false;
    }
    
    if(!checkbox.checked) {
        alert("You must agree to terms before you can submit");
        return false;
    }
    
    alert(`You have successfully submitted ${lastName} ${firstName}`)
    form.reset();
})