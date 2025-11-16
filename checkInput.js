function check_input(type){
    const titles = ['firstName', 'phone', 'email'];
    const functions = [check_name, check_phone, check_email];
    for (let i = 0; i < titles.length; i++) {
        let text = document.getElementById("singup_" + titles[i]).value;
        let mistake = document.getElementById("singup_" + titles[i] + "_mistake");
        functions[i](text, mistake);
    }
}

function check_password1(password,mistake){

}

function check_password2(password1,password2,mistake){
    mistake.textContent=password1===password2?"":"Passwords should be the same";
}

function check_email(email,mistake){
    if (email.length==0){
        mistake.textContent = "Email can't be empty";
    }else if (email.includes(" ")){
        mistake.textContent = "Email can't contain a space";
    }else if (!email.includes("@")){
        mistake.textContent = "Email should have symbol '@'";
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        mistake.textContent = "Email should be like: example@mail.com";
    }else{
        mistake.textContent=""
    }

}

function check_phone(phone,mistake){
    if (/^\+380\d{9}$/.test(phone) || /^0\d{9}$/.test(phone)) {
        mistake.textContent = "";
    } else if (phone.length === 0) {
        mistake.textContent = "Phone number can't be empty";
    } else if (phone.startsWith("+380") || phone.startsWith("0")) {
        mistake.textContent = "Phone number can't have more or less than 9 digits after the code";
    } else {
        mistake.textContent = "Phone number can start from +380 or 0";
    }
}

function check_name(name, mistake){
    if (name.length == 0) {
        mistake.textContent = "Name can't be empty";
    } else if (name.length < 3) {
        mistake.textContent = "Length of name can't be less than 3 letters";
    } else if (!/^[A-Za-z]+$/.test(name)) {
        mistake.textContent = "Name can contain only letters";
    } else {
        mistake.textContent = "";
}
}