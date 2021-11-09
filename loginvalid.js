let email= document.getElementById("regEmail");
let phno = document.getElementById("phoneNum");
let error=document.getElementById("errorMsg");
let passwd = document.getElementById("regPassword");
let timeout;
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))');
    

function validate(){
    //let emailRegex = /^([a-zA-Z0-9\-.]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phRegex1 = /^\d{10}$/;
    let phRegex2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(emailRegex.test(email.value)){
        //error.innerHTML = "Valid";
        //error.style.color = "Green";
        //return true;
        if(phRegex1.test(phno.value) || phRegex2.test(phno.value)){
            //return true;
            if(passRegex.test(passwd.value)){
                return true;
            }else{
                error.innerHTML = "Password should contain Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
                error.style.color = "Red";
                return false;
            }
        }else{
            error.innerHTML = "Invalid Mob no.";
            error.style.color = "Red";
            return false;
        }


    }else{
        error.innerHTML = "Invalid email";
        error.style.color = "Red";
        return false;
    }
}

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'orange'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Poor'
    }
}


// Adding an input event listener when a user types to the  password input 

passwd.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(passwd.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(passwd.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});

function show1(){
    let x = document.getElementById("form2");
    let y = document.getElementById("form1");
    x.style.display = "none";
    y.style.display = "block";
}

function show2(){
    let x = document.getElementById("form1");
    let y = document.getElementById("form2");
    x.style.display = "none";
    y.style.display = "block";
}