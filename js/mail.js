
function checkIfBoxesAreFill() {

    var inputs = [document.getElementById("name"),document.getElementById("email").value,document.getElementById("message").value];
    
    for(var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            try{
            document.getElementById("submit-button").setAttribute("disabled",true);
            } catch(ReferenceError){
                console.log("ReferenceError catched!")
            }
            break;
        }
        
        document.getElementById("submit-button").removeAttribute("disabled");
        
    }
    setTimeout("checkIfBoxesAreFill()", 1000);
}


function checkInputRestrictions() {
    var inputs = [document.getElementById("name").value,document.getElementById("email").value];
    var name = inputs[0];
    var email = inputs[1];
    var nameValid = checkNameRestrictions(name);
    var emailValid = checkEmailRestrictions(email);
    if (nameValid && emailValid) {
        alert("Your message is sent as " + name +"(" + email + ")" + " !");
    } 
}


function checkNameRestrictions(name) {
    if (checkNameByOnlyWhiteSpace(name)) {
        alert("Name contains only space character!");
        return false;
    }
    if(checkNameByOnlyLettersAndSpace(name)){
        alert("Name not contain only letters and space character!");
        return false;
    }
    if (checkIfAllWordsStartCapitalLetter(name)) {
        alert("Name and Surname must to start by capital letter!")
        return false;
    }
    if (checkIfNameIsNotLongerThanArg(name, 40)) {
        return false;
    }
    return true;
}


function checkNameByOnlyWhiteSpace(name) {
    var onlySpace = true;
    for (i = 0; i < name.length; i++) {
        if (name[i] != " ") {
            onlySpace = false;
        }
    }
    return onlySpace;
}


function checkNameByOnlyLettersAndSpace(name) {
    for (i = 0; i < name.length; i++) {
        if (!(isLetter(name[i]) || name[i]==" ")) {
            return true;
        }
    }
    return false;
}


function isLetter(ch){
    return /^[A-Z]$/i.test(ch);
  }

  function checkIfAllWordsStartCapitalLetter(name) {
    if (name[0] != name[0].toUpperCase()) {
        return true;
    }
    for (i = 0; i < name.length; i++) {
        if(name[i] == " ") {
            if (name[i+1] != name[i+1].toUpperCase()) {
                return true;
            }
        }
    }
  }


function checkIfNameIsNotLongerThanArg(name, maxLenght){
  if (name.length > maxLenght) {
      alert("Name and surname must be not longer than "+ maxLenght+ "characters!");
      return true;
  }
}


function checkEmailRestrictions(email) {
    if (checkNameByOnlyWhiteSpace(email)){
        return false;
    }
    if (atEmailValidation(email)) {
        return false;
    }
    if (checkIfEmailContainsSpace(email)){
        return false;
    }
    if (checkEmailDotValidation(email)) {
        return false;
    }
    return true;
}



function atEmailValidation(email) {
    var indexOfAt = email.indexOf("@");
    if (indexOfAt == -1) {
        alert("Bad email format!");
        return true;
    }
    else if (indexOfAt != email.lastIndexOf("@")) {
        alert("Bad email format!");
        return true;
    }
}

function checkEmailDotValidation(email) {
    var indexOfAt = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
    if (indexOfAt+1 >= dotIndex) {
        alert("Bad email format!");
        return true;
    }
}


function checkIfEmailContainsSpace(email) {
        if (email.indexOf(" ") != -1) {
            alert("Email can't contain space!")
            return true;
        }
        return false;
}



document.getElementById("submit-button").addEventListener("click",checkInputRestrictions);










