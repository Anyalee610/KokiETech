//dom elements 
const submitButtonSign = document.getElementById("submit-sign-in");
const submitButtonLog = document.getElementById("submit-log-in");
const nameTextInput = document.getElementById("fname");
const usernameTextInput = document.getElementById("username");
const passwordTextInput = document.getElementById("pword");
const emailTextInput = document.getElementById("email");
const signupInfo = document.getElementById("sign-up");
const logIn = document.getElementById("log-in")

logIn.style.display ="none"

//event listener function 
const clickButtonLog = (event) =>{
    event.preventDefault()
    let passwordValue = passwordTextInput.value;
    let usernameValue = usernameTextInput.value;

}
const clickButtonSign = (event) => {
    event.preventDefault();
    let nameValue = nameTextInput.value;
    let emailValue = emailTextInput.value;
    let passwordValue = passwordTextInput.value;
    let usernameValue = usernameTextInput.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({
        "name": nameValue,
        "username": usernameValue,
        "email": emailValue,
        "password": passwordValue
    });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    }

    console.log(usernameValue);
    
    fetch("http://localhost:3001/engineer/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    signupInfo.style.display = "none";
    logIn.style.display = "block";

    




}
submitButtonSign.addEventListener("click", clickButtonSign);
submitButtonLog.addEventListener("click", clickButtonLog);
//background color
document.body.style.backgroundColor = "#163919";
document.body.style.textAlign = "center";





