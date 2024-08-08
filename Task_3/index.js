function checkPhoneNumber(userPhoneNumber) {
    let isValid = true;

    
    if (userPhoneNumber.length != 13) {
        isValid = false;
    }

    
    if (userPhoneNumber[0] != "+") {
        isValid = false;
    }

    
    let countryCode = userPhoneNumber.slice(1, 4);
    if (countryCode != "994") {
        isValid = false;
    }

    
    if (userPhoneNumber[4] != "5" && userPhoneNumber[4] != "7") {
        isValid = false;
    }

    
    if (userPhoneNumber[5] != "0" && userPhoneNumber[5] != '1' && userPhoneNumber[5] != "5" && userPhoneNumber[5] != "7") {
        isValid = false;
    }

    
    for (let i = 1; i < userPhoneNumber.length; i++) {
        if (userPhoneNumber[i] < '0' || userPhoneNumber[i] > '9') {
            isValid = false;
            break;
        }
    }


    if (!isValid) {
        console.log("sehvdir");
    } else {
        console.log("Dogrudur");
    }
}


let phoneNumber = prompt("Please insert your phone number:");

checkPhoneNumber(phoneNumber);

