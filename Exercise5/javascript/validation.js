// HTML elements
const form = document.getElementById('form');
// Personal Information
const firstName = document.getElementById('firstName');
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const bDay = document.getElementById("bDay");
// Address
const region = document.getElementById("region");
const county = document.getElementById("county");
const postalCode = document.getElementById("postalCode");
const address = document.getElementById("address");
// Payment
const ccNumber = document.getElementById("ccNumber");
const ccExpDate = document.getElementById("ccExpDate");
const ccCode = document.getElementById("ccCode");
const ccName = document.getElementById("ccName");
// Account
const username = document.getElementById("username");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");
// Approves
const approveTerms = document.getElementById("approveTerms");

// Javascript reGexes for validation
const regName = /\d+$/g;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
// const regEmail = "[^@\s]+@[^@\s]+\.[^@\s]+"
const regPhone = /^\d{10}$/;
//const regPostal 
//!regName.test(firstName)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate()
});

function validate() {
    // Remove unnecessary whitespaces
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const regionValue = region.value.trim();
    const countyValue = county.value.trim();
    const postalCodeValue = postalCode.value.trim();

    // Personal Information
    if (firstNameValue === '') {
        setError(firstName, "Εισαγάγετε όνομα.");
    } else {
        setSuccess(firstName);
    }

    // lastName

    // email

    // phone

    // bDay

    // // Address
    // region

    // county 

    // postalCode 

    // address 

    // // Payment
    // ccNumber 

    // ccExpDate

    // ccCode

    // ccName 

    // // Account
    // username 

    // password.length 

    // password != password1

    // // Approves
    // approveTerms
}

function setError(input, message) {
    // Get small
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Add error message inside small
    small.innerText = message;

    // Add error class
    formControl.className = 'formControl error';

}

function setSuccess(input) {
    // Get small
    const formControl = input.parentElement;

    // Add success class
    formControl.className = 'formControl success';
}