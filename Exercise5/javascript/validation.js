document.addEventListener('invalid', (function () {
    return function (e) {
        //prevent the browser from showing default error bubble / hint
        e.preventDefault();
        // optionally fire off some custom validation handler
        // myValidation();
    };
})(), true);

function validate() {
    // Approves
    ckeckTerms()

    // Account
    validatePassword1();
    validatePassword();
    validateUsername();

    // Address
    validateAddress();
    validatePostalCode();
    validateCounty();
    validateRegion();

    // Payment
    // validateCcCode();
    // validateCcExpDate(); 
    // validateCcNumber();

    // Personal Information   
    validateBDay();
    validateTel();
    validateEmail();
    validateLastName();
    validateFirstName();
}

function validateFirstName() {
    // Get HTML element
    const firstName = document.getElementById("firstName");

    // Validate it
    if (firstName.validity.valueMissing) {
        document.getElementById("firstNameError").innerHTML = "Εισάγετε το όνομα σας.";
        firstName.focus();
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }
}

function validateLastName() {
    // Get HTML element
    const lastName = document.getElementById("lastName");

    // validate it 
    if (lastName.validity.valueMissing) {
        document.getElementById("lastNameError").innerHTML = "Εισάγετε το επίθετο σας.";
        lastName.focus();
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }
}

function validateEmail() {
    // Get HTML element
    const email = document.getElementById("email");

    // validate it 
    if (email.validity.valueMissing) {
        document.getElementById("emailError").innerHTML = "Εισάγετε το email σας.";
        email.focus();
    } else if (email.validity.typeMismatch) {
        document.getElementById("emailError").innerHTML = "Ελέγξτε το email σας.";
        email.focus();
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
}

function validateTel() {
    // Get HTML element
    const tel = document.getElementById("tel");

    // validate it 
    if (tel.validity.valueMissing) {
        document.getElementById("telError").innerHTML = "Εισάγετε το τηλέφωνο σας.";
        tel.focus();
    } else if (tel.validity.typeMismatch) {
        document.getElementById("telError").innerHTML = "Ελέγξτε το τηλέφωνο σας.";
        tel.focus();
    } else {
        document.getElementById("telError").innerHTML = "";
    }
}

function validateBDay() {
    // Get HTML element
    const bDay = document.getElementById("bDay");
    const bDate = new Date(bDay.value);
    const toDate = new Date();

    // validate it 
    if (bDay.validity.valueMissing) {
        document.getElementById("bDayError").innerHTML = "Εισάγετε την ημερομηνία γεννήσεως σας.";
        bDay.focus();
    } else if (((bDate.getFullYear + 18) < toDate.getFullYear) || ((bDate.getFullYear + 18) == toDate.getFullYear) && (bDate.getMonth < toDate.getMonth)) {
        document.getElementById("bDayError").innerHTML = "Εισάγετε την ημερομηνία γεννήσεως σας.";
        bDay.focus();
    } else {
        window.alert("Απαγορεύτεται η εγγραφή ανήλικου χρήστη!");
        window.location.assign("/Exercise5/index.html");
    }
}

function validateRegion() {
    // Get HTML element
    const region = document.getElementById("region");

    // validate it 
    if (region.validity.valueMissing) {
        document.getElementById("regionError").innerHTML = "Εισάγετε την περιφέρειά σας.";
        region.focus();
    } else {
        document.getElementById("regionError").innerHTML = "";
    }
}

function validateCounty() {
    // Get HTML element
    const county = document.getElementById("county");

    // validate it 
    if (county.validity.valueMissing) {
        document.getElementById("countyError").innerHTML = "Εισάγετε τον νομό σας.";
        county.focus();
    } else {
        document.getElementById("countyError").innerHTML = "";
    }
}

function validatePostalCode() {
    // Get HTML element
    const postalCode = document.getElementById("postalCode");

    // validate it 
    if (postalCode.validity.valueMissing) {
        document.getElementById("postalCodeError").innerHTML = "Εισάγετε τον ταχυδρομικό σας κώδικα.";
        postalCode.focus();
    } else if (postalCode.validity.typeMismatch) {
        document.getElementById("postalCodeError").innerHTML = "Ελέγξτε τον ταχυδρομικό σας κώδικα.";
        postalCode.focus();
    } else {
        document.getElementById("postalCodeError").innerHTML = "";
    }
}

function validateAddress() {
    // Get HTML element
    const address = document.getElementById("address");

    // validate it 
    if (address.validity.valueMissing) {
        document.getElementById("addressError").innerHTML = "Εισάγετε την διεύθυνση σας.";
        address.focus();
    } else {
        document.getElementById("addressError").innerHTML = "";
    }
}

function setPayMethod() {
    // Get HTML element
    const payMethod = document.getElementById("payMethod");

    if (payMethod.value == "creditCard") {
        // Show credit card fieldset
        document.getElementById("ccInfos").style.display = "block";

        // Validate credit card 

    } else {
        // Hide credit card fieldset
        document.getElementById("ccInfos").style.display = "none";

        // Dont validate credit card 
    }
}

function validateCcNumber() {
    // Get HTML element
    const ccNumber = document.getElementById("ccNumber");

    // validate it 
    if (ccNumber.validity.valueMissing) {
        document.getElementById("ccNumberError").innerHTML = "error";
        ccNumber.focus();
    } else {
        document.getElementById("ccNumberError").innerHTML = "";
    }
}

function validateCcExpDate() {
    // Get HTML element
    const ccExpMonth = document.getElementById("ccExpMonth");
    const ccExpYear = document.getElementById("ccExpYear");

    // validate it 
    const d = new Date();
    if ((ccExpYear.value == d.getFullYear()) && (ccExpMonth.value < d.getMonth())) {
        document.getElementById("ccExpError").innerHTML = "Η τραπεζική σας κάρτα έχει λήξει.";
        ccExpDate.focus();
    } else {
        document.getElementById("ccExpError").innerHTML = "";
    }
}

function validateCcCode() {
    // Get HTML element
    const ccCode = document.getElementById("ccCode");

    // validate it 
    if (ccCode.validity.valueMissing) {
        document.getElementById("ccCodeError").innerHTML = "error";
        ccCode.focus();
    } else {
        document.getElementById("ccCodeError").innerHTML = "";
    }
}

function validateUsername() {
    // Get HTML element
    const username = document.getElementById("username");

    // validate it 
    if (username.validity.valueMissing) {
        document.getElementById("usernameError").innerHTML = "Εισάγετε το όνομα χρήστη σας.";
        username.focus();
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }
}

function validatePassword() {
    // Get HTML element
    const password = document.getElementById("password");

    // validate it 
    if (password.validity.valueMissing) {
        document.getElementById("passwordError").innerHTML = "Εισάγετε τον κωδικό σας.";
        password.focus();
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }
}

function validatePassword1() {
    // Get HTML element
    const password1 = document.getElementById("password1");

    // validate it 
    if (password1.validity.valueMissing) {
        document.getElementById("passwordsError").innerHTML = "Επαναλάβετε τον κωδικό σας.";
        password1.focus();
    } else {
        checkPasswords();
    }
}

function checkPasswords() {
    if ((password == password1)) {
        document.getElementById("passwordsError").innerHTML = "Ελέγξτε τον κωδικό σας";
        password.focus();
    } else {
        document.getElementById("passwordsError").innerHTML = "";
    }
}

function ckeckTerms() {
    // Get HTML element
    const approveTerms = document.getElementById("approveTerms");

    // validate it 
    if (approveTerms.validity.valueMissing) {
        document.getElementById("approveTermsError").innerHTML = "Η δημιουργία λογαριασμού είναι αδύνατη δίχως την αποδοχή των όρων και προϋποθέσεων.";
        approveTerms.focus();
    } else {
        document.getElementById("approveTermsError").innerHTML = "";
    }
}