const user = document.getElementById("user")
const usertitle = document.getElementById("title")
let userId = localStorage.getItem("userId");
let username = localStorage.getItem("username");
let password = localStorage.getItem("password");
const logOut = document.getElementById('btn')

user.innerText = username
usertitle.innerText = username
const removeLocalStorage = () =>{
    localStorage.clear();
    window.location.href= "../index.html"
}
logOut.addEventListener('click', removeLocalStorage)

document.body.style.backgroundColor = "#163919";