function register(){

var name = document.getElementById("nameRegister").value;
var email = document.getElementById("emailRegister").value;
var pass = document.getElementById("passRegister").value;

var msg = document.getElementById("registerMsg");

if(name=="" || email=="" || pass==""){

msg.innerHTML = "All inputs required";
msg.style.color = "red";
return;

}

var user = {

name:name,
email:email,
pass:pass

};

localStorage.setItem("userData", JSON.stringify(user));

msg.innerHTML = "Register success";
msg.style.color = "green";



setTimeout(function(){

window.location.href = "html.html";

},1000);

}  // chat





function login(){

var email = document.getElementById("emailLogin").value;
var pass = document.getElementById("passLogin").value;

var msg = document.getElementById("loginMsg");

var savedUser = JSON.parse(localStorage.getItem("userData"));

if(savedUser == null){

msg.innerHTML = "No account found";
return;

}

if(email == savedUser.email && pass == savedUser.pass){

localStorage.setItem("username", savedUser.name);

window.location.href = "home.html";

}else{

msg.innerHTML = "Email or password wrong";

}

}





if(document.getElementById("welcome")){

var username = localStorage.getItem("username");

document.getElementById("welcome").innerHTML = "Welcome " + username;

}



function logout(){

window.location.href = "html.html";

}