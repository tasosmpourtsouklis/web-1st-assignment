function validate() {
    // HTML elements
    // Personal Information
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
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

    // Remove unnecessary whitespaces
    // const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    // const emailValue = email.value.trim();
    // const phoneValue = phone.value.trim();
    // const regionValue = region.value.trim();
    // const countyValue = county.value.trim();
    // const postalCodeValue = postalCode.value.trim();

    // Personal Information
    if (!firstName.checkValidity()) {
        document.getElementById("firstNameError").innerHTML = "Εισάγετε το όνομα σας.";
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    if (!lastName.checkValidity()) {
        document.getElementById("lastNameError").innerHTML = "Εισάγετε το επίθετο σας.";
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    // email
    if (!email.checkValidity()) {
        document.getElementById("emailError").innerHTML = "Εισάγετε το email σας.";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // phone
    if (!tel.checkValidity()) {
        document.getElementById("telError").innerHTML = "Εισάγετε το τηλέφωνο σας.";
    } else {
        document.getElementById("telError").innerHTML = "";
    }

    // bDay
    if (!bDay.checkValidity()) {
        document.getElementById("bDayError").innerHTML = "Εισάγετε την ημερομηνία γεννήσεως σας.";
    } else {
        document.getElementById("bDayError").innerHTML = "";
    }

    // // Address
    // region
    if (!region.checkValidity()) {
        document.getElementById("regionError").innerHTML = "Εισάγετε την περιφέρειά σας.";
    } else {
        document.getElementById("regionError").innerHTML = "";
    }

    // county 
    if (!county.checkValidity()) {
        document.getElementById("countyError").innerHTML = "Εισάγετε τον νομό σας.";
    } else {
        document.getElementById("countyError").innerHTML = "";
    }

    // postalCode 
    if (!postalCode.checkValidity()) {
        document.getElementById("postalCodeError").innerHTML = "Εισάγετε τον ταχυδρομικό σας κώδικα.";
    } else {
        document.getElementById("postalCodeError").innerHTML = "";
    }

    // address 
    if (!address.checkValidity()) {
        document.getElementById("addressError").innerHTML = "Εισάγετε την διεύθυνση σας.";
    } else {
        document.getElementById("addressError").innerHTML = "";
    }

    // // Payment
    // ccNumber 

    // ccExpDate

    // ccCode

    // ccName 

    // // Account
    // username 
    if (!username.checkValidity()) {
        document.getElementById("usernameError").innerHTML = "Εισάγετε το όνομα χρήστη σας.";
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }

    // password.length 
    if (!password.checkValidity()) {
        document.getElementById("passwordError").innerHTML = "Εισάγετε τον κωδικό σας.";
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    // password != password1
    if (!password1.checkValidity()) {
        document.getElementById("passwordsError").innerHTML = "Ελέγξτε τον κωδικό σας!";
    } else {
        document.getElementById("passwordsError").innerHTML = "";
    }

    // // Approves
    // approveTerms
    if (!approveTerms.checkValidity()) {
        document.getElementById("approveTermsError").innerHTML = "Η δημιουργία λογαριασμού είναι αδύνατη δίχως την αποδοχή των όρων και προϋποθέσεων.";
    } else {
        document.getElementById("approveTermsError").innerHTML = "";
    }
}
