let hero = document.querySelector(".hero");
if (window.innerWidth >= 700){
    
    hero.classList.add("hero-active");
}else{
    hero.classList.remove("hero-active");
}

let errorMessage = document.querySelector(".error-message");

let icon = document.querySelector(".error-icon");


function CheckEmail(emailString){
    //get result as true/false
    var Result= ValidateEmailAddress(emailString);

    if(Result) {
        errorMessage.innerHTML ="";
        icon.classList.remove("error-icon-active");   
    }
    else
    {
    errorMessage.innerHTML ="Please provide a valid email";
    icon.classList.add("error-icon-active");
    }
}

function ValidateEmailAddress(emailString) {
    // check for @ sign
    let atSymbol = emailString.indexOf("@");
    
    if(atSymbol < 1) return false;
    
    var dot = emailString.indexOf(".");
    if(dot <= atSymbol + 2) return false;
    
    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;
    
    return true;
}

