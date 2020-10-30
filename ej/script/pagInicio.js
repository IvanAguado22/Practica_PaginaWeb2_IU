function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
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
}

function cambiarSignIn(){
    document.getElementById("signup").style.display = "block";
    document.getElementById("login").style.display = "none";
}