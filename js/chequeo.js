var URLBASE='http://localhost/diagnosticoEnfermedades/';
const enfermedades=[];
enfermedades[0]=[];
enfermedades[0]['nombre']="Hirsutismo";
enfermedades[0]['descripcion']="primera";
enfermedades[0]['tratamiento']="alguno";
//////////////////////
enfermedades[1]=[];
enfermedades[1]['nombre']="Eccema";
enfermedades[1]['descripcion']="primera";
enfermedades[1]['tratamiento']="alguno";
//////////////////////
enfermedades[2]=[];
enfermedades[2]['nombre']="Dermatitis atopica";
enfermedades[2]['descripcion']="primera";
enfermedades[2]['tratamiento']="alguno";
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


//prueba

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

            

function activaTab(tab){
    $('.nav-link a[href="enfermedades.html' + tab + '"]').tab('show');
};


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
    
    //misResultados();
    selEnfer=getEnfermedadesSelected();
    for (var k in selEnfer) {
        console.log("k: "+k);
        console.log("se[k]: "+selEnfer[k]);
        indx=parseInt(selEnfer[k]);
        arrarMilagro[indx]=compare(misSintomas,matsintomas[indx]);
    }

    var arrarMilagro=[];
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
    //redirige("enfermedades.html");
}
function mostrarEnfermedad(enfermedad,sintomas,tratamiento){

}
function redirige(pagina){
    window.location.replace(URLBASE+pagina);
}