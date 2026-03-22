'use strict';

const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".btn-submit");
const inputs = document.querySelectorAll("input");
const inlineErrors = document.querySelectorAll(".inline-error");
const message = document.querySelector("textarea");

inputs.forEach((input) => {
    input.addEventListener("click", function() {
        inlineErrors.forEach((inlineError) => {
            inlineError.textContent = "";
        })
    })
})

message.addEventListener("click", function() {
    inlineErrors.forEach((inlineError) => {
        inlineError.textContent = ""
    })
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const emailAddress = document.querySelector("#email-address").value;
    const querySelected = document.querySelector("input[name='query-type']:checked")
    const message = document.querySelector("#message").value;
    const checkbox = document.querySelector("#checkbox");
    const firstNameError = document.querySelector("#first-name-error")
    const lastNameError = document.querySelector("#last-name-error");
    const emailError = document.querySelector('#email-error');
    const queryError = document.querySelector("#query-error");
    const messageError = document.querySelector("#message-error");
    const checkBoxError = document.querySelector("#checkbox-error");
    
    if(firstName.trim() === "") {
        firstNameError.textContent = "First name is required";
        return false;
    }

    if(/[^a-zA-Z0-9]+$/.test(firstName)) {
        firstNameError.textContent = "Symbols are not allowed in the first name!";
        return false;
    }

    if(lastName.trim() === "") {
        lastNameError.textContent = "Last name is required";
        return false;
    }

    if(/[^a-zA-Z0-9-_]/.test(lastName)) {
        lastNameError.textContent = "Symbols are not allowed in the last name!";
        return false;
    }
    
    /// Replacement for above

    // if(firstName.trim() === "" || lastName.trim() === "") {
    //     alert("Name is required");
    //     return false;
    // }

    if(emailAddress === "") {
        emailError.textContent = "Email address is required";
        return false;
    } 
    
    if(!emailAddress.includes("@")) {
        emailError.textContent = "Email does not include '@' keyword";
        return false;
    }

    if(!emailAddress.includes(".com")) {
        emailError.textContent = "Email must include keyword after '@' e.g. '.com'";
        return false;
    }

    if(emailAddress.length < 11) {
        emailError.textContent = "This is not a valid email address";
        return false;
    }
    
    if(!querySelected) {
        queryError.textContent = "A query type must be selected";
        return false;
    }
    
    if(message.trim() === "") {
        messageError.textContent = "Message is required";
        return false;
    }
    
    if(!checkbox.checked) {
        checkBoxError.textContent = "You must agree to terms before you can submit";
        return false;
    }
    
    alert(`You have response has been successfully submitted ${lastName} ${firstName}`)
    form.reset();
})