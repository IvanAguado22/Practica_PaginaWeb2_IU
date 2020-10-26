function mostrar1() {
    document.getElementById("column_mid1").style.display = "block";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
}

function mostrar2() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "block";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
}

function mostrar3() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "block";
    document.getElementById("column_mid4").style.display = "none";
}

function mostrar4() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "block";
}

function cerrarSesion() {
    var txt;
    if (confirm("Seguro que quieres cerrar sesión?")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }