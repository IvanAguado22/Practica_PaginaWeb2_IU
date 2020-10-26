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
        
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}

function enviarEmail(){
    window.open('mailto:test@example.com');
}

function descargarExcel(){
    // Creamos un Elemento Temporal en forma de enlace
    var tmpElemento = document.createElement('a');
    // Obtenemos la información desde el div que lo contiene en el html
    // Obtenemos la información de la tabla
    var data_type = 'data:application/vnd.ms-excel';
    var tabla_div = document.getElementById('tabla');
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    tmpElemento.href = data_type + ', ' + tabla_html;
    // Asignamos el nombre a nuestro EXCEL
    tmpElemento.download = 'calificaciones.xls';
    // Simulamos el click al elemento creado para descargarlo
    tmpElemento.click();
}