const user = document.getElementById('user');
const user1 = document.getElementById('user1');
let id = localStorage.getItem("userId");
let username = localStorage.getItem("username");
const title = document.getElementById('title');
const tech1 = document.getElementById('1stTech');
const tech2 = document.getElementById('2ndTech');
const desc = document.getElementById('desc');
const url = document.getElementById('url');
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');
const feed = document.getElementById('feed');
const form = document.getElementById('form');
const postbtn =document.getElementById('postbtn');
const logOut = document.getElementById('btn');
const feedbtn = document.getElementById('feedbtn');


user.innerText = username;
user1.innerText = username;
form.style.display ='none';

//will render all the post by your id 
const renderpost = () => {
    fetch(`http://localhost:4002/feeds/id${id}`)
    .then(res=> res.json())
    .then(json => json.forEach(post => {

        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        
        let newpost = `
        <div class="card-body">
        <div class="user-info">
         <a class= 'user-links'>${username}</a>  
          </div>
          
          <h4>${post.title}
          </h4>
          <div class ='all-tags'>
          <span class="tag tag-pink">${post.tech1}</span>
          <span class="tag tag-teal">${post.tech2}</span>
          </div>
          <p>
            ${post.description}
          </p>
          <a class="web-links" href = "${post.url}">Sites Link</a>
        </div>
`       
        div.innerHTML = newpost
        feed.append(div)
    }))
}

renderpost()

//you click the logout button it will remove you information from local storage and take you to the home page
const removeLocalStorage = () =>{
    localStorage.clear();
    window.location.href= "../index.html"
}
//when you click to make a post
const postClickEvent = () => {
    form.style.display ='block'
    feed.style.display ='none'
}
//when you cancel the making of a post
const cancelClickEvent = () => {
    form.style.display ='none'
    feed.style.display ='flex'
}

//you you submit a post it will post it to the backend and reload the page to display it at the top
const clickForSubmit = () =>{
    let titleValue = title.value;
    let tech1Value = tech1.value;
    let tech2Value = tech2.value;
    let descValue = desc.value;
    let urlValue = url.value;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "userId": +id,
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

    fetch("http://localhost:4002/feeds/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    form.style.display ='none'
    feed.style.display ='flex'
    window.location.reload();

    }

//when you click to view your profile
const userClickEvent = () => {
    window.location.href= "../profile_page/profile.html"
}
//when you click to go to the feeds page it will take you there 
const showFeed = () => {
    window.location.href= "../feeds_page/feeds_page.html"
}

submit.addEventListener('click', clickForSubmit)
postbtn.addEventListener('click',postClickEvent)
cancel.addEventListener('click',cancelClickEvent)
user.addEventListener('click', userClickEvent)
logOut.addEventListener('click', removeLocalStorage)
feedbtn.addEventListener('click', showFeed)
document.body.style.backgroundColor = "#163919";

document.body.style.backgroundColor = "#163919";