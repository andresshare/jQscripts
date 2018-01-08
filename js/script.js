//Manejo de Consola
var a = 1
var b = "texto"
console.log(a)

//Asincrono
// function imprimir() {
// 	for (var i = 0; i < 8000; i++) {
// 		console.log("imprimio")
// 	}
// }

function presionoClick() {
		console.log("click en boton")
}

// imprimir();

//Objetos Json
var obj = {

	numero: 10,
  texto: "texto",

	numeros: {
    texto: "lorem",
    segundoTexto: "ipsum"
  }
}
console.log(obj)
//Por valor &referencia
//por valor
var a = 20;
var b = a;
console.log("a", a);
console.log("b:", b);
a=30
console.log("a", a);
console.log("b:", b);

//por Referencia: Objetos Siempre se ṕasan por referencia
var o = {
  nombre:"pepito"
}
var d = o;

console.log("o:", o);
console.log("d:", d);

	o.nombre ="pepitA"

console.log("o:", o);
console.log("d:", d);

	d.nombre="monica"

console.log("o:", o);
console.log("d:", d);

//Notacion,obtener los valores

var persona = {

	nombre: "Natalia",
  apellido: "Hernandez",
  edad: 23,

		direccion:{
		pais: "Colombia",
		ciudad: "Medelllin",
			edificio:{
				nombre:"Nombre del edificio",
				telefono:"123-423-451-333"
			}
		}


}

console.log("Nombre Completo: " + ' ' + persona.nombre + ' ' + persona.apellido);
console.log("Edad: " + ' ' + persona.edad);
console.log("Pais: " + ' ' + persona.direccion.pais);
console.log("Ciudad: " + ' ' + persona.direccion.ciudad);
//agregar Item
persona.direccion.zipcode = 123
console.log("Zipcode: " + ' ' + persona.direccion.zipcode);

//Consulta por referencia

var edificio = persona.direccion.edificio.telefono

console.log("Telefono" + ' ' + edificio);

//Notacion de corchete
var campo = "edad"
console.log("Campo con notacion de corchete --> Edad:" + ' ' + persona[campo]);


//Funciones

function primeraFuncion() {
  var a = 20
  console.log(a);
}
primeraFuncion()

function imprimir(nombre, apellido) {

  apellido = apellido || "este es el nuevo apellido"

  console.log(nombre + ' ' + apellido);
}

imprimir("esto es un nombre","esto es un apellido")


//mostrar Objetos
function mostrarObjetos(persona) {
  console.log(persona.nombre + ' ' + persona.apellido);
}

var obj = {
  nombre: "AndresObj",
  apellido: "ApellidoObj"
}
mostrarObjetos(obj)

//mostrar Objetos anonimos
function mostrarObjetosAnonimos(persona) {
  console.log(persona.nombre + ' ' + persona.apellido);
}
//Objeto anomimo
mostrarObjetosAnonimos({
  nombre: "AndresObj",
  apellido: "ApellidoObj"
})

//funcion a una Funcion
function imprimirFuncion(fn) //Todos los parametros son verificados por js o seran tomados con Undefinded
{
  fn()
}

var persona = {
  nombre: "AndresFn",
  apellido: "ApellidoFn"
}

var miFuncion =function(){
	console.log("miFuncion");
}

imprimirFuncion(miFuncion)

imprimirFuncion(function() {
  console.log("funcion Anonima");
})

