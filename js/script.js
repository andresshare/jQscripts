
//JAVASCRIPT MODULO DE CODIGO
var elemento = document.querySelector('h1');
console.log(elemento.innerHTML);
var timeout=setTimeout(function(){
elemento.innerHTML='hola desde Javascript';
},100);

//JQUERY
var elemento=jQuery('h1');
 var timeout=setTimeout(function(){
elemento.text('hola desde JQuery');
 },100);

//JAVASCRIPT
Escuchar eventos del loaded(content Loaded)
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM cargado');
});

// //iniciar event listener sobre html
var enlace = document.querySelector('a');
enlace.addEventListener('click', function (event) {
    event.preventDefault(); //*prevenir un evento previo en este caso el click
    console.log('click');
});

// //Buscar elementos en base a un selector
var elementos = document.querySelectorAll('li'); // para mas elelmentos  div> ul>li>
console.log(elementos);
elementos[0].addEventListener('click', function () { //apunta al elemento de la matriz 
    console.log('click');
})
//Buscar elemento por TAG
var ul = document.getElementsByTagName('ul');
console.log(principal);

// //Buscar elementos por CLASS
var heading = document.getElementsByClassName('heading');
console.log(heading);

// //Buscar elementos por ID
var elementoID = document.getElementById('principal');
console.log(elementoID);

//SELECTOR DESDE JAVASCRIPT
var h2 = document.querySelector('h2');
console.log(h2.classList);

boton = document.querySelector('button');

// boton.addEventListener('click', function () {
    if (!h2.classList.contains('rojo')) {
        h2.classList.add('rojo');
        h2.classList.remove('blue');
    } else {
        h2.classList.add('blue');
        h2.classList.remove('rojo');
    }
});

//javascript
//revisar el h3 no funciona...
function toggleClass(elemento, clase) {
    if (elemento.classList.contains(clase)) {
        elemento.classList.remove(clase);
    } else {
        elemento.classList.add(clase);
    }
    }
    
    h3.addEventListener('click', function () {
    toggleClass(this, '.rojo');
    });

//Obtener los estilos de un elemento

var div=document.querySelector('div');
estilos =getComputedStyle(div,null);
console.log(estilos.backgroundColor); //estilos computados

//modificar o añadir estilos

div.style.backgroundColor='goldenrod'; //cambio aqui el css
div.style.borderRadius='20px'; //cambio del css

//cambio de varios estilos a al vez

div.style.cssText += 'background-color:green; green:width:400px; height:200px;'; //modificacion por varios css a a la vez

//añadir una clase
div.classList.add('transition');

//FIN DE MODULO DE CODIGO JAVACRIPT


