

function alertCookie() {
    alert(document.cookie);
}

//***************************************************************************************************************** */
function verificarPassword(){
    var inputPassword = document.getElementById('pass').value;
    if (inputPassword.length < 8) {
        alert("too_short");
        return("too_short");
    } else if (inputPassword.search(/\d/) == -1) {
        alert("no_num");
        return("no_num");
    } else if (inputPassword.search(/[a-z]/) == -1) {
        alert("no_letter");
        return("no_letter");
    }
    document.getElementById("pagInicio").style.display = "none";
    document.getElementById("pagWeb").style.display = "block";
    return("ok");
}

function cambiarLogIn(){
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("logIn").className = "active";
    document.getElementById("signUp").className = "";
}

function cambiarSignIn(){
    document.getElementById("signup").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("logIn").className = "";
    document.getElementById("signUp").className = "active";
}