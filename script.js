//variables declaradas de manera  global
let nombre="";
let categoria="";
let contador=0;
let rptaIncorrectas=[];
let incorrectas=0;
let correctas=0;


//Para obtener el nombre

nombre = document.getElementById('jugar').addEventListener('click', obtenerNombre)

function obtenerNombre(){
  nombre = document.getElementById('name').value;
  if(nombre==''){
    document.getElementById('escribirNombre').style.display = 'block';
    return false;
  } else{
  document.getElementById('escribirNombre').style.display = 'none';  
  document.getElementById('recibirNombre').innerHTML = nombre;
  document.getElementById('name').value = "";
  document.getElementById('bienvenida').style.display = 'none';
  document.getElementById('empezar').style.display = 'block';
  }
};

//Seleccionar categoria

function seleccionarCategoria(string){
  categoria = string;
  if(categoria=='ciudad'){
      document.getElementById('empezar').style.display='none';
  document.getElementById('formulario1').style.display='block';
  } else if (categoria=='comidas'){
    document.getElementById('empezar').style.display='none';
  document.getElementById('formulario5').style.display='block';
  }
}
 
//Función para obtener respuesta del  formulario 01

let respuesta1 = document.getElementById('Responder1').addEventListener('click', obtenerRespuesta1)

function obtenerRespuesta1() {

  let alternativa = document.form1.pregunta1.value;
 
  if (alternativa == '') {
      return false;
  }
  if (alternativa == 'Brazil') {
    contador= contador +25;
    correctas++;
  } else {
     let rptVerdadera="1. Rio de Janeiro se encuentra en : Brazil"
      rptaIncorrectas.push(rptVerdadera);
      incorrectas++;
  }
  document.getElementById('formulario1').style.display = 'none';
  document.getElementById('formulario2').style.display = 'block';
}


//Función para obtener respuesta del formulario 02

let respuesta2 = document.getElementById('Responder2').addEventListener('click',obtenerRespuesta2)
function obtenerRespuesta2() {
  let alternativa = document.form2.pregunta2.value;

  if (alternativa == '') {
    return false;
  }
  if (alternativa == 'Francia') {
    contador= contador +25;
    correctas++;
  } else {
      let rptVerdadera="2. Paris se encuentra en : Francia"
      rptaIncorrectas.push(rptVerdadera);
      incorrectas++;
  }
  document.getElementById('formulario2').style.display = 'none';
  document.getElementById('formulario3').style.display = 'block';
}

//Función para obtener respuesta del formulario 03

let respuesta3 = document.getElementById('Responder3').addEventListener('click',obtenerRespuesta3)
function obtenerRespuesta3() {

  let alternativa = document.form3.pregunta3.value;

  if (alternativa == '') {
    return false;
  }
  if (alternativa == 'Peru') {
    contador= contador +25;
    correctas++;
  } else {
      let rptVerdadera="3. Cusco se encuentra en : Peru"
      rptaIncorrectas.push(rptVerdadera);
      incorrectas++;
  }
  document.getElementById('formulario3').style.display = 'none';
  document.getElementById('formulario4').style.display = 'block';
}

//Función para obtener respuesta del formulario 04
let respuesta4 = document.getElementById('Responder4').addEventListener('click',                              obtenerRespuesta4)

function obtenerRespuesta4() {

  let alternativa = document.form4.pregunta4.value;

  if (alternativa == '') {
    return false;
  }
  if (alternativa == 'Inglaterra') {
    contador= contador +25;
    correctas++;
  } else {
      let rptVerdadera="4. Londres se encuentra en: Inglaterra ";
          rptaIncorrectas.push(rptVerdadera);
          incorrectas++;
  }

  document.getElementById('obtenerPuntaje').innerHTML=contador;
  document.getElementById('rptCorrecta').innerHTML=correctas;
  document.getElementById('rptIncoorrecta').innerHTML=incorrectas;
  document.getElementById('formulario4').style.display = 'none';

  if(contador == 100) {
    document.getElementById('gano').style.display = 'block';
    document.getElementById('perdio').style.display = 'none';
  } else {
        document.getElementById('gano').style.display = 'none';
        document.getElementById('perdio').style.display = 'block';
  }

  document.getElementById('fin').style.display = 'block';
  let respuestas="";
 for(i=0; i< rptaIncorrectas.length ;i++  ){
      respuestas=respuestas + rptaIncorrectas[i] + "<br/>";
 }
 document.getElementById('arregloRptas').innerHTML=respuestas;
  rptaIncorrectas=[];
  contador=0;
  correctas=0;
  incorrectas=0;
}


//Función para obtener respuesta del formulario 05
let respuesta5 = document.getElementById('Responder5').addEventListener('click',                              obtenerRespuesta5)

function obtenerRespuesta5() {

  let alternativa = document.form5.pregunta5.value;

  if (alternativa == '') {
    return false;
  }
  if (alternativa == 'Perú') {
    contador= contador +25;
    correctas++;
  } else {
     let rptVerdadera="1. La Papa a la Huancaína pertenece a : Perú ";
      rptaIncorrectas.push(rptVerdadera);
      incorrectas++;
  }
  document.getElementById('formulario5').style.display = 'none';
  document.getElementById('formulario6').style.display = 'block';
}

//Función para obtener respuesta del formulario 06
let respuesta6 = document.getElementById('Responder6').addEventListener('click',                              obtenerRespuesta6)

function obtenerRespuesta6() {

  let alternativa = document.form6.pregunta6.value;

  if (alternativa == '') {
    return false;
  }
  if (alternativa == 'Argentina') {
    contador= contador +25;
    correctas++;
  } else {
    let rptVerdadera="2. La Milanesa napolitana pertenece a : Argentina ";
      rptaIncorrectas.push(rptVerdadera);
      incorrectas++;
  }
  document.getElementById('formulario6').style.display = 'none';
  document.getElementById('formulario7').style.display = 'block';
}

//Función para obtener respuesta del formulario 07
let respuesta7 = document.getElementById('Responder7').addEventListener('click',                              obtenerRespuesta7)

function obtenerRespuesta7() {

  let alternativa = document.form7.pregunta7.value;

  if (alternativa == '') {
    console.log("marcar una respuesta");
    return false;
  }
  if (alternativa == 'Italia') {
    contador= contador +25;
    correctas++;
  } else {
    let rptVerdadera="3. La Pizza pertenece a : Italia ";
      rptaIncorrectas.push(rptVerdadera);
      incorrectas++;
  }
  document.getElementById('formulario7').style.display = 'none';
  document.getElementById('formulario8').style.display = 'block';
}

//Función para obtener respuesta del formulario 08
let respuesta8 = document.getElementById('Responder8').addEventListener('click',                              obtenerRespuesta8)

function obtenerRespuesta8() {

  let alternativa = document.form8.pregunta8.value;

  if (alternativa == '') {
    return false;
  }
  if (alternativa == 'Mexico') {
    contador= contador +25;
    correctas++;
  } else {
    let rptVerdadera="4. Los Tacos pertenece a : Mexico ";
      rptaIncorrectas.push(rptVerdadera);
      incorrectas++;
  }
  document.getElementById('obtenerPuntaje').innerHTML=contador;
    document.getElementById('rptCorrecta').innerHTML=correctas;
  document.getElementById('rptIncoorrecta').innerHTML=incorrectas;
  document.getElementById('formulario8').style.display = 'none';
  if(contador == 100) {
    document.getElementById('gano').style.display = 'block';
    document.getElementById('perdio').style.display = 'none';
  } else {
        document.getElementById('gano').style.display = 'none';
        document.getElementById('perdio').style.display = 'block';
  }
  document.getElementById('fin').style.display = 'block';

  let respuestas="";
 for(i=0; i< rptaIncorrectas.length ;i++  ){
      respuestas=respuestas + rptaIncorrectas[i] + "<br/>";
 }
 document.getElementById('arregloRptas').innerHTML=respuestas;
  rptaIncorrectas=[];
  contador=0;
  correctas=0;
  incorrectas=0;
  
}
 
 //funcion para resetear valores de radio buton

 function resetRpts(){
   let pregunta1 =document.getElementsByName('pregunta1');
    resetRadioButton(pregunta1);

   let pregunta2 =document.getElementsByName('pregunta2');
    resetRadioButton(pregunta2);

   let pregunta3 =document.getElementsByName('pregunta3');
    resetRadioButton(pregunta3);

   let pregunta4 =document.getElementsByName('pregunta4');
    resetRadioButton(pregunta4);

   let pregunta5 =document.getElementsByName('pregunta5');
    resetRadioButton(pregunta5);

   let pregunta6 =document.getElementsByName('pregunta6');
    resetRadioButton(pregunta6);

   let pregunta7 =document.getElementsByName('pregunta7');
    resetRadioButton(pregunta7);

   let pregunta8 =document.getElementsByName('pregunta8');
    resetRadioButton(pregunta8);
   
 }

 function resetRadioButton(radioHTML) {
   for (i = 0; i < radioHTML.length; i++) {
        radioHTML[i].checked = false;
    }
 }


//Funcion volver a jugar
function volverAJugar(){
  document.getElementById('fin').style.display= 'none';
  document.getElementById('empezar').style.display='block';
  resetRpts();
}


//Funcion para volver a inicio

function finalizarJuego(){
  document.getElementById('fin').style.display='none';
  document.getElementById('bienvenida').style.display='block';
  resetRpts();
}