// Welcome Display
window.addEventListener('DOMContentLoaded', () => {
    const msg = document.getElementById('welcome-message');
    msg.classList.add('show');
    setTimeout(() => {
        msg.classList.remove('show');
    }, 3000)
});

// Back to top button
var btn = document.getElementById('back-to-top');

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});

//  Form validation
var nameError = document.getElementById('name-err');
let emailError = document.getElementById('email-err');
let messageError = document.getElementById('message-err');
let submitError = document.getElementById('submit-err');

function validateName() 
{
    let name = document.getElementById('name').value;
    console.log(name);

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false
    }
    if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check "></i>';
    return true;
}

function validateEmail() 
{
    let email = document.getElementById('email').value;
    
    if(email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z]*\.?[A-Za-z]*[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid Email"
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check "></i>';
    return true;
}

function validateMessage() 
{
    let message = document.getElementById('message').value;
    var required = 20;
    var delta = required - message.length;

    if (delta > 0) {
        messageError.innerHTML = delta + " chars required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check "></i>';
    return true;
}

function validateForm() 
{
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix the errors to submit.";
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}


// Time
let time = document.getElementById("current-time");
let date = document.getElementById("current-date");

setInterval(() => {
    let current_date = new Date();
    time.innerHTML = current_date.toLocaleTimeString();
}, 1000);

let current_date = new Date();
date.innerHTML = current_date.toLocaleDateString();
