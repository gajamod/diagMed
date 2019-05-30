<h1 id="titu">Enfermedades</h1>
<div class="row">
	<a href="enfermedad/" id="vte" class="mx-auto btn btn-info my-3 d-none"><h4>Ver Todas</h4></a>
</div>

<?php 
$select = array();
foreach ($this->params as $key => $value) {
	if (is_numeric($value) and $value>=0 and $value<=9) {
		$select[]=$value;
	}
}
 ?>
 <script src="js/chequeo.js"></script>
 <div id="dades" class="row"></div>


  <script >$(document).ready(function(){
   id="dades";
   sele=<?php echo json_encode($select); ?>;
   if (sele.length>0) {
   		for (var i = sele.length - 1; i >= 0; i--) {
   			k=sele[i];
   			$('#'+id).append('<div class="container col-md-6 mb-3"><div class="card"><img class="card-img-top" src="'+enfermedades[k]['img']+'" alt="'+enfermedades[k]['nombre']+'"><div class="card-body"><h5 class="card-title">'+enfermedades[k]['nombre']+'</h5><p class="card-text">'+enfermedades[k]['descripcion']+'</p><h5 class="card-title text-right"><small>Tratamiento</small></h5><p class="card-text text-right">'+enfermedades[k]['tratamiento']+'</p></div></div></div>');
   			document.getElementById('titu').innerHTML="Enfermedades Seleccionadas: ";
   			$( "#vte" ).removeClass( "d-none" );
   		}
   } else {
		for (var k in enfermedades) {
	         $('#'+id).append('<div class="container col-md-6 mb-3"><div class="card"><img class="card-img-top" src="'+enfermedades[k]['img']+'" alt="'+enfermedades[k]['nombre']+'"><div class="card-body"><h5 class="card-title">'+enfermedades[k]['nombre']+'</h5><p class="card-text">'+enfermedades[k]['descripcion']+'</p><h5 class="card-title text-right"><small>Tratamiento</small></h5><p class="card-text text-right">'+enfermedades[k]['tratamiento']+'</p></div></div></div>');
	    }
   }
   
		
});
</script>