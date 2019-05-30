
<?php 

$sintomas[0]['nombre']="Acne";
$sintomas[0]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[0]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);

////////////////////////////////////////////////////////
$sintomas[1]['nombre']="Placas rojizas";
$sintomas[1]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[1]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[2]['nombre']="Descamacion";
$sintomas[2]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[2]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[3]['nombre']="Picor";
$sintomas[3]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[3]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[4]['nombre']="Erupciones";
$sintomas[4]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[4]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[5]['nombre']="Lesiones Hipopigmentadas";
$sintomas[5]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[5]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[6]['nombre']="Mal olor";
$sintomas[6]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[6]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);


//print_r($sintomas);
 ?>
 <script >
     var cant_sintomas=<?php echo count($sintomas); ?>;
 </script>
 <script src="js/chequeo.js"></script>
<div class="container">
    <div class="oneMusic-tab-text" id="sintoms">
        <h5 class="casos">Enfermedad que se quiere comparar</h5>
        <div id="dynamic_pago" class="form-inline container-fluid" >
            <div class="form-group ">
                <select class="form-control form-control-lg  vp" id="p1" name="enfer[1]" required="required">
                    <option value="">--Seleccione Enfermedad--</option>
                </select>
            </div>
        </div>
        <div class="input-group">
            <button type="button" name="add" id="add" class="btn btn-success">Agregar enfermedad</button>
        </div>                                 
        <br><br>
        <div class="container">
            <?php foreach ($sintomas as $key => $sintoma): ?>
                <h5><?php echo $sintoma['nombre']; ?></h5>
                <div class="form-group ">
                    <select class="form-control form-control-lg  sn" id="sintom[<?php echo $key; ?>]" required="required">
                        <?php foreach ($sintoma['opciones'] as $key => $opcion): ?>
                            <option value="<?php echo $opcion['val'] ?>"><?php echo $opcion['text'] ?></option>
                        <?php endforeach ?>
                    </select>
                </div>
            <?php endforeach ?>
        </div>
        <div class="oneMusic-buttons-area mb-100 align-items-center justify-content-center d-flex">
            <button class="btn btn-success" onclick="holis();">Mostrar Resultados <i class="fa fa-angle-double-right"></i></button>
        </div>
    </div>
</div>
    <script>


$(document).ready(function(){
    agregarOpcion('p1');
    var i=1;
    $('#add').click(function(){
        i++;
        $('#dynamic_pago').append('<div id="row'+i+'" class="form-group"><br/><div class="form-group "><select class="form-control form-control-lg  vp" id="p'+i+'" name="enfer['+i+']" required="required"><option value="">Enfermedad</option></select></div><div class="input-group col-md-4"><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove col-md-4">X</button></div></div>');
        agregarOpcion('p'+i);
    });

    $(document).on('click', '.btn_remove', function(){
        var button_id = $(this).attr("id"); 
        $('#row'+button_id+'').remove();
    });
    

});
</script>
