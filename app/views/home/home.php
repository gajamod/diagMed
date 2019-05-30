
<?php 

$sintomas[0]['nombre']="Acne";
$sintomas[0]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[0]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);

////////////////////////////////////////////////////////
$sintomas[1]['nombre']="Comezon";
$sintomas[1]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[1]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[2]['nombre']="Color Amarillento";
$sintomas[2]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[2]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[3]['nombre']="Descamacion";
$sintomas[3]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[3]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[4]['nombre']="Depigmentacion";
$sintomas[4]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[4]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[5]['nombre']="Dolor Localizado";
$sintomas[5]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[5]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[6]['nombre']="Enrojecimiento";
$sintomas[6]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[6]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[7]['nombre']="Erupciones";
$sintomas[7]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[7]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[8]['nombre']="Lesiones Con Costra";
$sintomas[8]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[8]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
    ////////////////////////////////////////////////////////
$sintomas[9]['nombre']="Lesiones Hipopigmentadas";
$sintomas[9]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[9]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[10]['nombre']="Mal Olor";
$sintomas[10]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[10]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[11]['nombre']="Picor";
$sintomas[11]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[11]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[12]['nombre']="Placas Cremosas";
$sintomas[12]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[12]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[13]['nombre']="Placas Rojizas";
$sintomas[13]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[13]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);
////////////////////////////////////////////////////////
$sintomas[14]['nombre']="Ronchas";
$sintomas[14]['opciones'][] = array(
    'text' => "Nada"
    ,'val' => 0);
$sintomas[14]['opciones'][] = array(
    'text' => "Poco"
    ,'val' => 0.3);

//print_r($sintomas);
 ?>
 <script >
     var cant_sintomas=<?php echo count($sintomas); ?>;
 </script>
 <script src="js/chequeo.js"></script>
 <div class="container">
    <div class="input-group">
        <button class="btn btn-info" id="cambiar">Comparacion Especifica</button>
    </div>
        
 </div>
<div class="container">
    <div class="oneMusic-tab-text" id="sintoms">
                <br><br>
        <div id="especi">
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

function cambiar(){
    estat=0;
    var element = document.getElementById("especi");
    if (estat==0) {
        estat=1;
        element.classList.add("hidden");
    } else {
        estat=0;
        element.classList.remove("hidden");
    }
    
    
}

$(document).ready(function(){
    agregarOpcion('p1');
    var i=1;
    $('#add').click(function(){
        i++;
        $('#dynamic_pago').append('<div id="row'+i+'" class="form-group"><br/><div class="form-group "><select class="form-control form-control-lg  vp" id="p'+i+'" name="enfer['+i+']" required="required"><option value="">Enfermedad</option></select></div><div class="input-group col-md-4"><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove col-md-4">X</button></div></div>');
        agregarOpcion('p'+i);
    });

    $('#cambiar').click(function(){
        estat=0;
        if (estat==0) {
            estat=1;
            $( "#especi" ).addClass( "invisible" );
        } else {
            estat=0;
            $( "#especi" ).removeClass( "invisible" );
        }
        
    });
    $(document).on('click', '.btn_remove', function(){
        var button_id = $(this).attr("id"); 
        $('#row'+button_id+'').remove();
    });
    

});
</script>
