function checkCookie(){
    var inputEmail = document.getElementById("emailLogin").value;
    var cookieEmail = getCookie("email");
    var inputPass = document.getElementById("passLogin").value;
    var cookiePass = getCookie("pass");
    if(inputEmail == cookieEmail){
        if(inputPass == cookiePass){
            if(getCookie("rol") == "Estudiante"){
                changeWeb();
                window.onload = showStudent();
            } else{
                changeWeb();
            }
        } else{
            alert("La contraseña es incorrecta");
        }
    } else{
        alert("Este correo electrónico no está dado de alta");
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function saveCookies(){
    setCookie("name", document.getElementById("name").value, 30);
    setCookie("surname", document.getElementById("surname").value, 30);
    setCookie("usrname", document.getElementById("usrname").value, 30);
    setCookie("nia", document.getElementById("nia").value, 30);
    setCookie("bornDate", document.getElementById("bornDate").value, 30);
    setCookie("dni", document.getElementById("dni").value, 30);
    setCookie("rol", document.getElementById("rol").value, 30);
    setCookie("grade", document.getElementById("grade").value, 30);
    setCookie("lenguage", document.getElementById("lenguage").value, 30);
    if(document.getElementById("email").value == getCookie("email")){
        alert("Ya existe una cuenta asociada al correo electrónico introducido, por favor introduzca uno válido");
    } else{
        setCookie("email", document.getElementById("email").value, 30);
    }
    setCookie("pass", document.getElementById("pass").value, 30);
    
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
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

function showStudent(){
    document.getElementById("columnLeftComputerStudent").style.display = "block";
    document.getElementById("columnLeftComputer").style.display = "none";
}

function creatUserName(){
    document.getElementById("userName").innerHTML = getCookie('usrname').value;
}

function showGrade(){
    if(document.getElementById("rol").value == "Estudiante"){
        document.getElementById("divGrade").style.display = "block";
    } else{
        document.getElementById("divGrade").style.display = "none";
    }
}

function changeWeb(){
    document.getElementById("pagInicio").style.display = "none";
    document.getElementById("pagWeb").style.display = "block";
    window.onload = creatUserName();
}

function alertCookie() {
    alert(document.cookie);
}

//***************************************************************************************************************** */

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