function showIni() {
    document.getElementById("column_mid_ini").style.display = "block";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showStudentsList() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "block";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showForum() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "block";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showGrades() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "block";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showForum1() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "block";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showForum2() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "block";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showForum3() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "block";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showForum4() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "block";
    document.getElementById("column_mid_forum5").style.display = "none";
}

function showForum5() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "block";
}


function cerrarSesion() {
    var txt;
    if (confirm("Seguro que quieres cerrar sesión?")) {
        document.getElementById("pagWeb").style.display = "none";
        document.getElementById("pagInicio").style.display = "block";
    } else {
      txt = "You pressed Cancel!";
    }
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

function commentBox1(){
	var name=document.getElementById('name1').value;
	var comment=document.getElementById('comment1').value;
 
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

		document.getElementById('result1').appendChild(parent);
		document.getElementById('name1').value="";
		document.getElementById('comment1').value="";
	}
}

function commentBox2(){
	var name=document.getElementById('name2').value;
	var comment=document.getElementById('comment2').value;
 
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
        
		document.getElementById('result2').appendChild(parent);
		document.getElementById('name2').value="";
		document.getElementById('comment2').value="";
	}
}

function commentBox3(){
	var name=document.getElementById('name3').value;
	var comment=document.getElementById('comment3').value;
 
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
        
		document.getElementById('result3').appendChild(parent);
		document.getElementById('name3').value="";
		document.getElementById('comment3').value="";
	}
}

function commentBox4(){
	var name=document.getElementById('name4').value;
	var comment=document.getElementById('comment4').value;
 
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
        
		document.getElementById('result4').appendChild(parent);
		document.getElementById('name4').value="";
		document.getElementById('comment4').value="";
	}
}

function commentBox5(){
	var name=document.getElementById('name5').value;
	var comment=document.getElementById('comment5').value;
 
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
        
		document.getElementById('result5').appendChild(parent);
		document.getElementById('name5').value="";
		document.getElementById('comment5').value="";
	}
}