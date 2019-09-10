var partidos="";
$('#colombia').click(function(){
	$('#contenedor').load('selecciones/colombia.html'); 	
$("#contenedor").removeClass("container");})

$('#contacto').click(function(){
	$('#contenedor').load('formulario.php'); 	
})

$('#partidos').click(function(){
	$('#contenedor').load('partidos.php');
	$.getJSON("partidos.json", function(datos) {
                partidos=datos;
                $.each(partidos["partidos"], function(idx,partidos) {
           			$("#contenido").append("<tr><td>"+partidos["fecha"]+"</td>"+"<td>"+partidos["equipo1"]+"</td>"+"<td>"+
           				partidos["equipo2"]+"</td></tr>");
                });
            });
        
})
$('#iniciobtn').click(function(){
	$('#contenedor').load('inicio.php');
})
