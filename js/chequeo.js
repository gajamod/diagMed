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
    console.log("sintomas");
    console.log(misSintomas);
    return misSintomas;
}

function comparacionEspecifica(){
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
    alert("enfermedad: "+enfermedad);
    alert("Recordar que solo es una pagina de auto checo, favor de ir a una clinica especialicadad.");
    redirige("enfermedad");
}
function mostrarEnfermedad(enfermedad,sintomas,tratamiento){

}
function redirige(pagina){
    window.location.replace(URLBASE+pagina);
}