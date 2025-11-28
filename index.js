let username;
let email;
let birthdate;
let password;

document.getElementById('userSubmit').onclick = function(){
    username = document.getElementById("userInput").value;
    email = document.getElementById("emailInput").value;
    birthdate = document.getElementById("birthInput").value;
    password = document.getElementById("pinInput").value;

    if(username && email && birthdate && password && valid_password){
        document.getElementById("demo").innerText = 
        `${username}
        ${email}
        ${birthdate}
        ${password}`;
    }
}