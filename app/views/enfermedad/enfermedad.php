<h1>Enfermedades</h1>
 <script src="js/chequeo.js"></script>
 <div id="dades" class="row"></div>


  <script >$(document).ready(function(){
   id="dades";
	for (var k in enfermedades) {
         $('#'+id).append('<div class="container col-md-6 mb-3"><div class="card"><img class="card-img-top" src="'+enfermedades[k]['img']+'" alt="'+enfermedades[k]['nombre']+'"><div class="card-body"><h5 class="card-title">'+enfermedades[k]['nombre']+'</h5><p class="card-text">'+enfermedades[k]['descripcion']+'</p><h5 class="card-title text-right"><small>Tratamiento</small></h5><p class="card-text text-right">'+enfermedades[k]['tratamiento']+'</p></div></div></div>');
    }
});
</script>