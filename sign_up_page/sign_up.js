//dom elements 
const submitButtonSign = document.getElementById("submit-sign-in");
const submitButtonLog = document.getElementById("submit-log-in");
const nameTextInput = document.getElementById("fname");
const usernameTextInput1 = document.getElementById("username1");
const passwordTextInput1 = document.getElementById("pword1");
const emailTextInput = document.getElementById("email");
const usernameTextInput = document.getElementById("username");
const passwordTextInput = document.getElementById("pword");
const signupInfo = document.getElementById("sign-up");
const logIn = document.getElementById("log-in")
const switchToSign = document.getElementById("switch-sign");
const switchToLogin = document.getElementById("switch-log");
const title = document.getElementById('title')

logIn.style.display ="none"

//event listener function 
const switchTo = (logOrSign) => {
    if(logOrSign === 'sign'){
        signupInfo.style.display = "none";
        logIn.style.display= "block";
    }else if (logOrSign === "log"){
        logIn.style.display ="none"
        signupInfo.style.display = "block"

    }
    
}


const clickButtonLog = (event) =>{
    event.preventDefault()
    let passwordValue = passwordTextInput1.value;
    let usernameValue = usernameTextInput1.value;
    
      
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      
      fetch(`http://localhost:4001/engineer-login/${usernameValue}/${passwordValue}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.alert = "loged in"){
                console.log(result)
                localStorage.setItem("userId",result.data.id);
                localStorage.setItem("username",usernameValue);
                localStorage.setItem("password",passwordValue);
                
                window.location.href= "../feeds_page/feeds_page.html"
            }else{
                alert("Invalid User")
            }
        })
        .catch(error => console.log('error', error));
    

   


}
const clickButtonSign = (event) => {
    event.preventDefault();
    let nameValue = nameTextInput.value;
    let emailValue = emailTextInput.value;
    let passwordValue = passwordTextInput.value;
    let usernameValue = usernameTextInput.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    let raw = JSON.stringify({
        "name": nameValue,
        "username": usernameValue,
        "email": emailValue,
        "password": passwordValue
    });

    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    }

    console.log(usernameValue);
    
    fetch("http://localhost:4001/engineer/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    signupInfo.style.display = "none";
    logIn.style.display = "block";

    




}
submitButtonSign.addEventListener("click", clickButtonSign);
submitButtonLog.addEventListener("click", clickButtonLog);
switchToLogin.addEventListener('click',()=>{
    switchTo('sign')
    title.innerText = 'Login to KokiTech'

});
switchToSign.addEventListener('click',()=>{
    switchTo('log')
    title.innerText = 'Sign up to KokiETech'
    
})

//background color
document.body.style.backgroundColor = "#163919";
document.body.style.textAlign = "center";


