var URLBASE='http://localhost/diagMed/';
umbral=1.2;
const enfermedades=[];
enfermedades[0]=[];
enfermedades[0]['nombre']="Candidiasis";
enfermedades[0]['descripcion']="Infección provocada por un tipo de hongo conocido como cándida y puede afectar a distintas partes del cuerpo. ";
enfermedades[0]['tratamiento']="Fármacos antifúngicos";
enfermedades[0]['img']="img/candidiasis.jpg";

enfermedades[1]=[];
enfermedades[1]['nombre']="Eccema (Dermatitis)";
enfermedades[1]['descripcion']="Eccema es un término que designa varios tipos distintos de hinchazón de la piel. También se llama dermatitis. La mayoría de los tipos causa sequedad y comezón en la piel, además de sarpullido en la cara, al interior de los codos y detrás de las rodillas; y en las manos y los pies. Rascarse la piel puede enrojecerla, aumentando la hinchazón y picazón.";
enfermedades[1]['tratamiento']="Los tratamientos pueden incluir medicamentos, cremas para la piel, terapia de luz y un buen cuidado de la piel.";
enfermedades[1]['img']="img/eccema.jpg";

enfermedades[2]=[];
enfermedades[2]['nombre']="Hirsutismo";
enfermedades[2]['descripcion']="El hirsutismo es el crecimiento excesivo de vello, principalmente en mujeres, en zonas en las que no suele producirse: labio superior, patillas, barbilla, cuello, areolas mamarias, tórax, en el área inmediatamente superior o inferior al ombligo, así como en ingles, muslos o espalda.";
enfermedades[2]['tratamiento']="Los más eficaces son los que combinan estrógenos y un antiandrógeno, durante un periodo de un año y se elige dependiendo de la causa del hirsutismo.";
enfermedades[2]['img']="img/hirsutismo.jpg";

enfermedades[3]=[];
enfermedades[3]['nombre']="Dermatitis atópica";
enfermedades[3]['descripcion']="Es un trastorno cutáneo prolongado (crónico) que consiste en erupciones pruriginosas y descamativas. Es un tipo de eccema.";
enfermedades[3]['tratamiento']="Use un humectante, una crema de esteroides tópica u otros medicamentos recetados por su proveedor. Tome antihistamínicos por vía oral para reducir la comezón intensa. Mantenga su piel humectada usando ungüentos (como la vaselina), cremas o lociones 2 a 3 veces al día.";
enfermedades[3]['img']="img/dermatitis-atopica.jpg";

enfermedades[4]=[];
enfermedades[4]['nombre']=" Hiperhidrosis";
enfermedades[4]['descripcion']="Es una afección por la cual una persona suda demasiado y de manera impredecible. Las personas con hiperhidrosis pueden sudar incluso cuando la temperatura es fresca o cuando están en reposo.";
enfermedades[4]['tratamiento']="La sudoración excesiva se puede controlar con antitranspirantes fuertes, los cuales tapan los conductos sudoríparos. Los productos que contienen de 10% a 20% de hexahidrato de cloruro de aluminio son el primer tratamiento para la sudoración de la axila. A algunas personas se les puede recetar un producto que contenga dosis más altas de cloruro de aluminio, el cual se aplica en las noches sobre la zona afectada. Los antitranspirantes pueden causar irritación de la piel, y las grandes dosis de cloruro de aluminio pueden estropear la ropa. Nota: los desodorantes no previenen la sudoración, pero ayudan a reducir el olor corporal.";
enfermedades[4]['img']="img/hiperhidrosis.jpg";

enfermedades[5]=[];
enfermedades[5]['nombre']="Vitiligo";
enfermedades[5]['descripcion']="Es una enfermedad cutánea en la cual hay una pérdida del color (pigmento) de zonas de piel. El resultado son parches blancos y desiguales que no tienen pigmento pero se sienten como piel normal.";
enfermedades[5]['tratamiento']="Medicamentos aplicados a la piel, tales como cremas o ungüentos corticosteroides, cremas o ungüentos inmunodepresores como pimecrolimus (Elidel) y tracolimus (Protopic) o medicamentos tópicos como metoxaleno (Oxsoralen) también pueden ayudar.";
enfermedades[5]['img']="img/vitigilio.jpg";

enfermedades[6]=[];
enfermedades[6]['nombre']="Urticaria";
enfermedades[6]['descripcion']="Son ronchas rojizas, elevadas y a menudo pruriginosas (que producen picazón) que aparecen en la superficie de la piel. Pueden ser una reacción alérgica a algún alimento o medicamento. También pueden presentarse sin una causa.";
enfermedades[6]['tratamiento']="Antihistamínico como difenhidramina (Benadryl) o cetirizina (Zyntec). Siga las instrucciones de su proveedor o las que se incluyen en el envase sobre cómo tomar el medicamento. Si la inflamación compromete la garganta, es posible que necesite una inyección urgente de epinefrina (adrenalina) o esteroides";
enfermedades[6]['img']="img/urticaria.jpg";

enfermedades[7]=[];
enfermedades[7]['nombre']="Psoriasis";
enfermedades[7]['descripcion']="Es una afección cutánea que provoca enrojecimiento, escamas plateadas e irritación de la piel. La mayoría de las personas con psoriasis presentan parches gruesos, rojos y bien definidos de piel y escamas de color blanco plateado. Esto se denomina psoriasis en placa.";
enfermedades[7]['tratamiento']="Lociones, ungüentos, cremas y champús para la piel: estos se denominan tratamientos tópicos. Pastillas o inyecciones que afectan la respuesta inmunitaria del cuerpo, no simplemente la piel";
enfermedades[7]['img']="img/psoriasis-baja.jpg";

enfermedades[8]=[];
enfermedades[8]['nombre']="Impetigo";
enfermedades[8]['descripcion']="El impétigo es una infección de la piel. Generalmente, es causada por la bacteria estafilococo pero algunas veces el estreptococo también puede causarla. Es más común en los niños entre dos y seis años. Suele comenzar cuando las bacterias entran por una grieta de la piel, como una cortadura, rasguño o picadura de un insecto.";
enfermedades[8]['tratamiento']="El empleo de cremas de antibiótico. Los dos tipos de antibiótico que más se utilizan son la mupirocina o la bacitracina, que se aplican en la piel afectada dos veces al día durante 7 o 10 días. Aunque el tratamiento sea sencillo, sólo se deben utilizar estas cremas si un médico ha diagnosticado impétigo y las ha recetado; un mal uso de ellas puede hacer que otras enfermedades pasen desapercibidas.";
enfermedades[8]['img']="img/impetigo.jpg";

enfermedades[9]=[];
enfermedades[9]['nombre']="Sinus Pilonidal";
enfermedades[9]['descripcion']="El sinus pilonidal o quiste pilonidal aparece en el pliegue interglúteo, entre las nalgas, contiene piel y folículos pilosos (pelo). Es una afección relativamente frecuente, no grave, aunque molesta, y que se da principalmente en varones entre los 15 y los 30 años, con abundante vello corporal";
enfermedades[9]['tratamiento']="En un primer momento, si el sinus pilonidal se infecta se suele desinfectar la herida y además, tomar antibióticos. Sin embargo, en muchas ocasiones la infección se repite en el tiempo y es necesario recurrir a la cirugía.";
enfermedades[9]['img']="img/pilonidal-sinus.jpg";


const matsintomas=[];
 matsintomas[0]=[0.70,0.1,0.01,0.01,0.40,0.02,0.01,0.16,0.01,0.01,0.00,0.01,0.00,0.50,0.00];
 matsintomas[1]=[0.13,0.50,0.50,0.50,0.02,0.00,0.00,0.03,0.00,0.00,0.00,0.00,0.00,0.30,0.00];
 matsintomas[2]=[0.03,0.50,0.50,0.30,0.02,0.40,0.00,0.03,0.00,0.00,0.00,0.00,0.00,0.60,0.30];
 matsintomas[3]=[0.03,0.50,0.50,0.30,0.02,0.02,0.90,0.03,0.00,0.00,0.00,0.00,0.00,0.30,0.01];
 matsintomas[4]=[0.03,0.50,0.50,0.30,0.03,0.60,0.00,0.60,0.00,0.00,0.30,0.00,0.00,0.00,0.02];
 matsintomas[5]=[0.12,0.50,0.50,0.60,0.03,0.01,0.00,0.04,0.40,0.40,0.30,0.00,0.00,0.40,0.04];
 matsintomas[6]=[0.02,0.40,0.60,0.30,0.03,0.01,0.00,0.50,0.40,0.40,0.30,0.00,0.00,0.01,0.02];
 matsintomas[7]=[0.02,0.02,0.00,0.00,0.02,0.40,0.00,0.02,0.00,0.00,0.50,0.50,0.40,0.01,0.00];
 matsintomas[8]=[0.01,0.03,0.00,0.40,0.30,0.00,0.00,0.01,0.00,0.00,0.00,0.00,0.40,0.20,0.80];
 matsintomas[9]=[0.13,0.01,0.00,0.40,0.01,0.00,0.00,0.01,0.00,0.00,0.00,0.00,0.90,0.30,0.80];


function agregarOpcion(id){
    for (var k in enfermedades) {
         $('#'+id).append('<option value="'+k+'" class="val">'+enfermedades[k]['nombre']+'</option>');
    }
}

function compare(array1,array2){
    //const arr1= [5,5,6];
    //const arr2= [3,7,4];

    //console.log(typeof array1);
    //console.log(typeof array2);

    const arrayN=[];
    for (var i = array1.length - 1; i >= 0; i--) {
        a = array1[i];
        b = array2[i];
        arrayN[i] = Math.min(a,b);
    }

    //document.write(arrayN);
    //return arrayN;
    return arrayN.reduce(add,0);
}

function add(a, b) {
    return a + b;
}

function miMax(arr){
    var mimax=0;
    for (var k in arr) {
        if (arr[k]>mimax) {
            mimax=arr[k];
        }
    }
    return mimax;
}

function miIndexMax(arr){
    var mimax2=-1;
    var maxVal=0;
    for (var k in arr) {
        if (arr[k]>maxVal) {
            maxVal=arr[k];
            mimax2=k;
        }
    }
    return mimax2;
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}


function getValueSelect(id){
    //alert(id);
  var x = document.getElementById(id).selectedIndex;
  var y = document.getElementById(id).options;
  var val=y[x].value
  return val;
}

function getEnfermedadesSelected(){

    var y = document.getElementsByClassName("vp");
    var i;
    senfer=[];
    for (i = 0; i < y.length; i++) {
      pid=y[i].id;
      pid=pid.substring(1);
      //alert("ID SELECT : "+ pid);
      val=parseInt(getValueSelect('p'+pid+''));
      if (isNaN(val)) {

      } else {
        //alert(val);
        senfer.push(val);
      }
      
    }
    
    return senfer;
}


function holis(){
    if (estat==0) {
        comparacionEspecifica();
    } else {
        compararTodos();
    }

}


function getSintomas()
{
    var y = document.getElementsByClassName("sn");
    var i;
    misSintomas=[];
    for (i = 0; i < y.length; i++) {
      pid=y[i].id;
      //alert("ID SELECT : "+ pid);
      val=getValueSelect(''+pid+'');
      misSintomas.push(val);
      
    }
    return misSintomas;
}

function comparacionEspecifica(){
    misSintomas=getSintomas();
    var enfermedadScore=[];
    //misResultados();
    selEnfer=getEnfermedadesSelected();
    for (var k in selEnfer) {
        indx=parseInt(selEnfer[k]);
        enfermedadScore[indx]=compare(misSintomas,matsintomas[indx]);
        console.log("Enfermedad "+indx+": "+enfermedadScore[indx]);
    }

    
    var opcion = miIndexMax(enfermedadScore);
    var max = miMax(enfermedadScore);
    console.log("Index Max: "+opcion);
    console.log(enfermedadScore);
    console.log("Max: "+max);
    if(max<umbral){
        swal({
          title: "Bien!",
          text: "No padeces ninguna enfermedad seleccionada!",
          icon: "success",
          button: "Cerrar!",

        });
    }else{
        enfermedadProbable(opcion);
        
    }
}
function getSum(total, num) {
  return total + num;
}
function compararTodos(){

    //aqui definiremos todos los arrays de las enfermedades, y  con cada uno de ellos mandaremos llamar a la funcion "compare", pasandole como primer parametro
    //nuestro array de usuario, el cual recuperaremos con document get element by id desde esta funcion, una vez definido este array desde aqui, lo pasaremos como parametro junto con los demas arrays de las enfermedades

    misSintomas=getSintomas();
    var enfermedadScore=[];
    for (var i = 0; i <= matsintomas.length - 1; i++) {
        console.log("Suma ENFER "+i+": "+matsintomas[i].reduce(getSum));
        enfermedadScore[i] = compare(misSintomas,matsintomas[i]);
        console.log("Enfermedad "+i+": "+enfermedadScore[i]);
    }
    var opcion = indexOfMax(enfermedadScore);
    var max = Math.max(...enfermedadScore);
    console.log("Max: "+max);
      if(max<umbral){
        swal({
          title: "Bien!",
          text: "No padeces ninguna enfermedad en nuestra Base de Datos!",
          icon: "success",
          button: "Cerrar!",

        });
      }else{
        enfermedadProbable(opcion);
      }

}


function enfermedadProbable(enfermedad){
    swal({
      title: "Resultados Encontrado",
      text: "A continuacion seras redirigido a la pagina que contiene informacion sobre el resultado encontrado.\n Recuerda que debes acudir a tu medico para confirmar el diagnostico",
      icon: "info",
      //button: "Ver Informacion",
      buttons: {
        cancel: "NO quiero ver la info",
        defeat: "Ver Informacion",
      }
    })
    .then((value) => {
      switch (value) {
     
        case "defeat":
          redirige("enfermedad/selected/"+enfermedad);
          break;
     
        default:
          swal("Gracias por consultar con nosotros!");
      }
    })

     

    
}

function redirige(pagina){
    window.location.replace(URLBASE+pagina);
}