function mostrar1() {
    document.getElementById("column_mid1").style.display = "block";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar2() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "block";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar3() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "block";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar4() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "block";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar5() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "block";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar6() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "block";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar7() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "block";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar8() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "block";
    document.getElementById("column_mid9").style.display = "none";
}

function mostrar9() {
    document.getElementById("column_mid1").style.display = "none";
    document.getElementById("column_mid2").style.display = "none";
    document.getElementById("column_mid3").style.display = "none";
    document.getElementById("column_mid4").style.display = "none";
    document.getElementById("column_mid5").style.display = "none";
    document.getElementById("column_mid6").style.display = "none";
    document.getElementById("column_mid7").style.display = "none";
    document.getElementById("column_mid8").style.display = "none";
    document.getElementById("column_mid9").style.display = "block";
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

function commentBox(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
 
	if(name =="" || comment ==""){
		alert("Los campos marcados con * son obligatorios!");
	}else{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');
		var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);
		el_name.appendChild(txt_name);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_name);
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);
 
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}
 
}