
const home = document.getElementById('home')
const signUp = document.getElementById('signbtn')

const backHome = function() {
    document.location.href = "../index.html";
}

home.addEventListener('click', backHome)

signUp.addEventListener('click', function() {
    document.location.href = "../sign_up_page/sign_up.html";
})

