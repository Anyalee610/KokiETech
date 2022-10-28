const user = document.getElementById("user")
let userId = window.localStorage.getItem("userId");
let username = localStorage.getItem("username");
let password = localStorage.getItem("password");
const title = document.getElementById('title');
const tech1 = document.getElementById('1stTech');
const tech2 = document.getElementById('2ndTech');
const desc = document.getElementById('desc');
const url = document.getElementById('url');
const submit = document.getElementById('submit')
const cancel = document.getElementById('cancel')
const feed = document.getElementById('feed');
const form = document.getElementById('form');
const postbtn =document.getElementById('postbtn')
const logOut = document.getElementById('btn')

user.innerText = username
form.style.display ='none';

const removeLocalStorage = () =>{
    localStorage.clear();
    window.location.href= "../index.html"
}

const postClickEvent = () => {
    form.style.display ='block'
    feed.style.display ='none'
}
const cancelClickEvent = () => {
    form.style.display ='none'
    feed.style.display ='flex'
}

const clickForSubmit = () =>{

    let titleValue = title.value;
    let tech1Value = tech1.value;
    let tech2Value = tech2.value;
    let descValue = desc.value;
    let urlValue = url.value;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "userId":userId,
        "description": descValue,
        "tech1": tech1Value,
        "tech2": tech2Value,
        "title": titleValue,
        "url": urlValue
    });

    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:4001/feeds/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    form.style.display ='none'
    feed.style.display ='flex'

    }


const userClickEvent = () => {
    window.location.href= "../profile_page/profile.html"
}
submit.addEventListener('click', clickForSubmit)
postbtn.addEventListener('click',postClickEvent)
cancel.addEventListener('click',cancelClickEvent)
user.addEventListener('click', userClickEvent)
logOut.addEventListener('click', removeLocalStorage)
document.body.style.backgroundColor = "#163919";
