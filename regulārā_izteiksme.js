let reg = /(.{3,10})\@([a-z]{3,10})\.([a-z]{2,3})/g;

let reg2 = new RegExp("(.{3,10})\@([a-z]{3,10})\.([a-z]{2,3})/g");

let reg3 = /(([A-Z]){1,}([a-z]){1,}([\!\_\$\*]){1,}(\d){1,})/g;

let email = "test2@gmail.com";
let password = "Qwerty!12345";

if(email.match(reg)){
    console.log("Mail is valid")
}else{
    console.log("Mail is invalid")
}

if(password.match(reg3) && password.length >=8){
    console.log("Password is valid")
}else{
    console.log("Password is invalid")
}  