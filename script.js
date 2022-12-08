function register(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    if (email == null || email == "") {
        alert("Please enter the email.");
        return false;
    }

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("email",email);

    localStorage.setItem('logged', true);

    window.location.href = "account.html";
}

function login(){
    var storedusername = localStorage.getItem("username");
    var storedpassword = localStorage.getItem("password");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == storedusername && password == storedpassword){
        window.location.href = "account.html";
        localStorage.setItem('logged', true);
    }else{
        alert("Identifiants incorrect !")
    }
}

function Logout(){
    localStorage.removeItem('logged');
    window.location.href="login.html";
}

function DeleteAccount(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    localStorage.removeItem('logged');
    window.location.href="register.html";
}

function showPSW() {
    if(document.getElementById("showbtn").innerHTML == "Hide"){
        document.getElementById("showbtn").innerHTML = "Show";
    } else {
        document.getElementById("showbtn").innerHTML = "Hide";
    }
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function checkiflogged(){
    let loggedin = localStorage.getItem('logged');
    if(loggedin == null){
      alert("Veuillez vous connecter avant d'accéder a cette page");
      window.location.href="register.html";
    }
}