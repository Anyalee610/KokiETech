const title = document.getElementById('title');
const tech1 = document.getElementById('1stTech');
const tech2 = document.getElementById('2ndTech');
const desc = document.getElementById('desc');
const url = document.getElementById('url');
const submit = document.getElementById('submit')
const cancel = document.getElementById('cancel')

let userId = localStorage.getItem("userId");
const titleValue = title.value
const tech1Value = tech1.value
const tech2Value = tech2.value
const descValue = desc.value
const urlValue = url.value

const clickForSubmit = () =>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
    "userId" : userId,
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
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

    submit.addEventListener('click', clickForSubmit)