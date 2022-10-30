const user = document.getElementById("user")
let id = localStorage.getItem("userId");
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
const postbtn =document.getElementById('postbtn');
const logOut = document.getElementById('btn');
const pageTitle = document.getElementById('page-title');
const feedbtn = document.getElementById('feedbtn');
const likes = document.getElementById('heart');
const comment = document.getElementById('comment');


user.innerText = username
form.style.display ='none';

const renderpost = () => {
    fetch('http://localhost:4001/feeds/')
    .then(res=> res.json())
    .then(json => json.forEach(post => {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        let newpost = `
        <div class="card-body">
        <div class="user-info">
         <a class= 'user-links'>${post.username}</a>  
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
renderpost();

const postUserbtn = (e) => {
    let text = e.target.innerText
    if(typeof text === "string"){
    async function fetchUserPost() {
        const response = await fetch(`http://localhost:4001/feeds/${text}/`);
        const data = await response.json();
        console.log(data)
        if(data.length >0){
            feed.innerHTML = ''
            
            data.forEach(post => {
                
                let div = document.createElement('div');
                div.setAttribute('class', 'card');
                
                let newpost = `
                <div class="card-body">
                <div class="user-info">
                 <a>${post.username}</a>  
                  </div>
          
                  <span class="tag tag-teal">${post.tech1}</span>
                  <span class="tag tag-teal">${post.tech2}</span>
                  <h4>${post.title}
                  </h4>
                  <p>
                    ${post.description}
                  </p>
                  <a href = "${post.url}">Sites Link</a>
                </div>
            
          `       
                pageTitle.innerText = post.username
                div.innerHTML = newpost
                div.setAttribute("id",`${post.id}`)
                feed.append(div)
            })
            
        }
      } 
      fetchUserPost()
      
    }
}
const removeLocalStorage = () =>{
    localStorage.clear();
    window.location.href= "../index.html"
}

const postClickEvent = () => {
    form.style.display ='block'
    feed.style.display ='none'
    pageTitle.style.display ='none'
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

    fetch("http://localhost:4001/feeds/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    form.style.display ='none'
    feed.style.display ='flex'
    window.location.reload();

    }


const userClickEvent = () => {
    window.location.href= "../profile_page/profile.html"
    renderpost()
}





submit.addEventListener('click', clickForSubmit)
postbtn.addEventListener('click',postClickEvent)
cancel.addEventListener('click',cancelClickEvent)
user.addEventListener('click', userClickEvent)
logOut.addEventListener('click', removeLocalStorage)
feed.addEventListener('click', postUserbtn)
feedbtn.addEventListener('click', ()=>{
    renderpost()
    feed.style.display ='flex'
    pageTitle.style.display ='block'
    form.style.display ='none'
    renderpost()
})
document.body.style.backgroundColor = "#163919";
