var URLBASE='http://localhost/diagMed/';
const enfermedades=[];
enfermedades[0]=[];
enfermedades[0]['nombre']="Candidiasis";
enfermedades[0]['descripcion']="Infección provocada por un tipo de hongo conocido como cándida y puede afectar a distintas partes del cuerpo. ";
enfermedades[0]['tratamiento']="Fármacos antifúngicos";


const matsintomas=[];
 matsintomas[0]=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.35,0.3,0.15,0.7,0.25,0.2,0.5];
 matsintomas[1]=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.2,0.3,0.15,0.7,0.25,0.2,0.5];
 matsintomas[2]=[0.15,1.6,1,0.6,0.3,0.3,0.35,0.6,0.15,0.3,0.25,0.7,0.25,0.3,0.5];
 matsintomas[3]=[0.15,1.6,1,0.45,0.3,0.15,0.2,0.6,0.2,0.35,0.25,0.2,0.25,0.2,0.5];
 matsintomas[4]=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0.15,0.35,0.15,0.4,0.25,0.4,0.5];
 matsintomas[5]=[0.15,1.6,1,0.3,0,0.15,0.1,0.6,0.35,0,0.15,0.1,0.25,0.1,0];
 matsintomas[6]=[0.15,1.6,1,0.15,0,0.15,0.1,0.6,0.2,0.1,0.1,0,0.05,0.1,0];
 matsintomas[7]=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0,0,0.1,0.2,0.25,0.15,0.5];
 matsintomas[8]=[0.15,1.6,1,0.15,0.3,0.15,0.1,0.6,0.15,0,0.15,0.2,0.25,0.1,0.3];
 matsintomas[9]=[0.15,0.16,0.2,0,0,0,0,0.05,0,0,0,0,0.25,0,0];
const valSintomas=[];

valSintomas[0]=[];
valSintomas[0]['nombre']='Acne';//Sintoma 1 (0)
valSintomas[0]['opciones']=[];
valSintomas[0]['opciones'][0]=[];
valSintomas[0]['opciones'][0]['text']='nada';
valSintomas[0]['opciones'][0]['val']=0;
valSintomas[0]['opciones'][1]=[];
valSintomas[0]['opciones'][1]['text']='poco';
valSintomas[0]['opciones'][1]['val']=0.5;

valSintomas[1]=[];
valSintomas[1]['nombre']="Comezon";//Sintoma 2 (1)
valSintomas[1]['opciones']=[];
valSintomas[1]['opciones'][0]=[];
valSintomas[1]['opciones'][0]['text']='nada';
valSintomas[1]['opciones'][0]['val']=0;
valSintomas[1]['opciones'][1]=[];
valSintomas[1]['opciones'][1]['text']='poco';
valSintomas[1]['opciones'][1]['val']=0.5;

valSintomas[2]=[];
valSintomas[2]['nombre']="Color Amarillento";//Sintoma 3 (2)
valSintomas[2]['opciones']=[];
valSintomas[2]['opciones'][0]=[];
valSintomas[2]['opciones'][0]['text']='nada';
valSintomas[2]['opciones'][0]['val']=0;
valSintomas[2]['opciones'][1]=[];
valSintomas[2]['opciones'][1]['text']='poco';
valSintomas[2]['opciones'][1]['val']=0.5;
valSintomas[3]=[];

valSintomas[3]['nombre']="Descamación";//Sintoma 4 (3)
valSintomas[3]['opciones']=[];
valSintomas[3]['opciones'][0]=[];
valSintomas[3]['opciones'][0]['text']='nada';
valSintomas[3]['opciones'][0]['val']=0;
valSintomas[3]['opciones'][1]=[];
valSintomas[3]['opciones'][1]['text']='poco';
valSintomas[3]['opciones'][1]['val']=0.5;

valSintomas[4]=[];
valSintomas[4]['nombre']="Depigmentación";//Sintoma 5 (4)
valSintomas[4]['opciones']=[];
valSintomas[4]['opciones'][0]=[];
valSintomas[4]['opciones'][0]['text']='nada';
valSintomas[4]['opciones'][0]['val']=0;
valSintomas[4]['opciones'][1]=[];
valSintomas[4]['opciones'][1]['text']='poco';
valSintomas[4]['opciones'][1]['val']=0.5;

valSintomas[5]=[];
valSintomas[5]['nombre']="Dolor Localizado";//Sintoma 6 (5)
valSintomas[5]['opciones']=[];
valSintomas[5]['opciones'][0]=[];
valSintomas[5]['opciones'][0]['text']='nada';
valSintomas[5]['opciones'][0]['val']=0;
valSintomas[5]['opciones'][1]=[];
valSintomas[5]['opciones'][1]['text']='poco';
valSintomas[5]['opciones'][1]['val']=0.5;

valSintomas[6]=[];
valSintomas[6]['nombre']="Enrojecimiento";//Sintoma 7 (6)
valSintomas[6]['opciones']=[];
valSintomas[6]['opciones'][0]=[];
valSintomas[6]['opciones'][0]['text']='nada';
valSintomas[6]['opciones'][0]['val']=0;
valSintomas[6]['opciones'][1]=[];
valSintomas[6]['opciones'][1]['text']='poco';
valSintomas[6]['opciones'][1]['val']=0.5;

valSintomas[7]=[];
valSintomas[7]['nombre']="Erupciones";//Sintoma 8 (7)
valSintomas[7]['opciones']=[];
valSintomas[7]['opciones'][0]=[];
valSintomas[7]['opciones'][0]['text']='nada';
valSintomas[7]['opciones'][0]['val']=0;
valSintomas[7]['opciones'][1]=[];
valSintomas[7]['opciones'][1]['text']='poco';
valSintomas[7]['opciones'][1]['val']=0.5;

valSintomas[8]=[];
valSintomas[8]['nombre']="Lesiones Con Costra";//Sintoma 9 (8)
valSintomas[8]['opciones']=[];
valSintomas[8]['opciones'][0]=[];
valSintomas[8]['opciones'][0]['text']='nada';
valSintomas[8]['opciones'][0]['val']=0;
valSintomas[8]['opciones'][1]=[];
valSintomas[8]['opciones'][1]['text']='poco';
valSintomas[8]['opciones'][1]['val']=0.5;

valSintomas[9]=[];
valSintomas[9]['nombre']="Lesiones Hipopigmentadas";//Sintoma 10 (9)
valSintomas[9]['opciones']=[];
valSintomas[9]['opciones'][0]=[];
valSintomas[9]['opciones'][0]['text']='nada';
valSintomas[9]['opciones'][0]['val']=0;
valSintomas[9]['opciones'][1]=[];
valSintomas[9]['opciones'][1]['text']='poco';
valSintomas[9]['opciones'][1]['val']=0.5;

valSintomas[10]=[];
valSintomas[10]['nombre']="Mal Olor";//Sintoma 11 (10)
valSintomas[10]['opciones']=[];
valSintomas[10]['opciones'][0]=[];
valSintomas[10]['opciones'][0]['text']='nada';
valSintomas[10]['opciones'][0]['val']=0;
valSintomas[10]['opciones'][1]=[];
valSintomas[10]['opciones'][1]['text']='poco';
valSintomas[10]['opciones'][1]['val']=0.5;

valSintomas[11]=[];
valSintomas[11]['nombre']="Picor";//Sintoma 12 (11)
valSintomas[11]['opciones']=[];
valSintomas[11]['opciones'][0]=[];
valSintomas[11]['opciones'][0]['text']='nada';
valSintomas[11]['opciones'][0]['val']=0;
valSintomas[11]['opciones'][1]=[];
valSintomas[11]['opciones'][1]['text']='poco';
valSintomas[11]['opciones'][1]['val']=0.5;

valSintomas[12]=[];
valSintomas[12]['nombre']="Placas Cremosas";//Sintoma 13 (12)
valSintomas[12]['opciones']=[];
valSintomas[12]['opciones'][0]=[];
valSintomas[12]['opciones'][0]['text']='nada';
valSintomas[12]['opciones'][0]['val']=0;
valSintomas[12]['opciones'][1]=[];
valSintomas[12]['opciones'][1]['text']='poco';
valSintomas[12]['opciones'][1]['val']=0.5;

valSintomas[13]=[];
valSintomas[13]['nombre']="Placas Rojizas";//Sintoma 14 (13)
valSintomas[13]['opciones']=[];
valSintomas[13]['opciones'][0]=[];
valSintomas[13]['opciones'][0]['text']='nada';
valSintomas[13]['opciones'][0]['val']=0;
valSintomas[13]['opciones'][1]=[];
valSintomas[13]['opciones'][1]['text']='poco';
valSintomas[13]['opciones'][1]['val']=0.5;

valSintomas[14]=[];
valSintomas[14]['nombre']="Ronchas";//Sintoma 15 (14)
valSintomas[14]['opciones']=[];
valSintomas[14]['opciones'][0]=[];
valSintomas[14]['opciones'][0]['text']='nada';
valSintomas[14]['opciones'][0]['val']=0;
valSintomas[14]['opciones'][1]=[];
valSintomas[14]['opciones'][1]['text']='poco';
valSintomas[14]['opciones'][1]['val']=0.5;

function agregarOpcion(id){
    for (var k in enfermedades) {
         $('#'+id).append('<option value="'+k+'" class="val">'+enfermedades[k]['nombre']+'</option>');
    }
}

function compare(array1,array2){
    //const arr1= [5,5,6];
    //const arr2= [3,7,4];
    const arrayN=[];
    for(i=0;i<=14;i++){
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
    misSintomas=getSintomas();
    var arrarMilagro=[];
    //misResultados();
    selEnfer=getEnfermedadesSelected();
    for (var k in selEnfer) {
        console.log("k: "+k);
        console.log("se[k]: "+selEnfer[k]);
        indx=parseInt(selEnfer[k]);
        arrarMilagro[indx]=compare(misSintomas,matsintomas[indx]);
    }

    
    var opcion = indexOfMax(arrarMilagro);
    var max = Math.max(...arrarMilagro);
    if(max<=3.4){
        alert("No padeces de alguna enfermedad seleccionada");
    }else if(max>=3.5){
        enfermedadProbable(opcion);
        
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
    console.log("sintomas");
    console.log(misSintomas);
    return misSintomas;
}


function compararTodos(){

        //aqui definiremos todos los arrays de las enfermedades, y  con cada uno de ellos mandaremos llamar a la funcion "compare", pasandole como primer parametro
        //nuestro array de usuario, el cual recuperaremos con document get element by id desde esta funcion, una vez definido este array desde aqui, lo pasaremos como parametro junto con los demas arrays de las enfermedades

    misSintomas=getSintomas();
    var enfermedadScore=[];
    for (var i = 0; i <= matsintomas.length - 1; i--) {
        enfermedadScore[i] = compare(misSintomas,matsintomas[i]);
    }
    var opcion = indexOfMax(enfermedadScore);
    var max = Math.max(...enfermedadScore);
      if(max<=3.4){
        alert("No padeces de ninguna enfermedad");
      }else if(max>=3.5){
        enfermedadProbable(opcion);
      }

}


function enfermedadProbable(enfermedad){
    switch(enfermedad){
        case 0:
            alert("Tromboembolismo pulmonar");
            break;
        case 1:
            alert("Sindrome de miocardio");
            break;

        case 2:
            alert("Cardio isquemica");
            break;

        case 3:
            alert("Amiloidosis");
            break;

        case 4:
            alert("Insuficiencia cardiaca");
            break;

        case 5:
            alert("Fibrilación auricular");
            break;

        case 6:
            alert("Arritmia");
            break;

        case 7:
            alert("Sindrome de marfan");
            break;

        case 8:
            alert("Coartación de aorta");
            break;

        case 9:
            alert("Enfermedad de kawasaki");
            break;

    }
    alert("Recordar que solo es una pagina de auto checo, favor de ir a una clinica especialicadad.");
    redirige("enfermedades.html");
}
function mostrarEnfermedad(enfermedad,sintomas,tratamiento){

}
function redirige(pagina){
    window.location.replace(URLBASE+pagina);
}