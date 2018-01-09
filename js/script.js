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

//obtener aleatorio

function obtenerAleatorio() {
  return Math.random()
}
console.log(obtenerAleatorio);

function obtenerNombre() {
  return "andres"
}

function booleanoEsMayor05() {
  if (obtenerAleatorio() > 0.5) {
    return true
  } else
    return false;
  
}
if (booleanoEsMayor05()) {
  console.log("Es mayor que 0.5");
}
else {
  console.log("Es Menor a 0.5");
}

function crearPersona(nombre,apellido) {
  
  //objeto anonimo
  return {
    nombre: nombre,
    apellido: apellido

    
  }
}

var persona = crearPersona("Milena", "morales")
console.log(persona);
console.log(persona.nombre)
console.log(persona.apellido);


var nombre = obtenerNombre()
console.log(nombre)
console.log(booleanoEsMayor05());

//funciones quq regresan funciones


  function creaFuncion() {
    return function (nombre) {
      console.log("1raFn--- Creado de aqui" + nombre);
      return function () {
        console.log("***segunda funcion***");
        
      }
      
    }
  }

var nuevaFuncion = creaFuncion()
var segundaFuncion = nuevaFuncion(persona.nombre)
segundaFuncion();


//funciones de primer orden (funciones son objetos)

function nombrea() {
  console.log("funcion a");
}
nombrea()
nombrea.apply = "Martha"
nombrea.direccion = {
    pais: "Costa Rica",
    ciudad: "San jose",
    edificio: {
    piso: "noveno",
    nombre: "edificamos"
  }
}
nombrea.apply = "Martha"


//MethodosThis

var personaObj = {
    nombre: "Alexa",
    apellido: "guepardo",
    imprimirNombre: function () {
      console.log("NombreCompleto: "+this.nombre +' '+this.apellido);
      
  },
  direccion: {
    pais: "Brasil",
    obtenerPais:function () {
      console.log("la direccion es en:  "+this.pais);
      
        //usar el self para > continuar call al Obj
        var self = this
        var nuevaDireccion = function () {
          console.log("direccion tomada del obj anterior: "+self.pais);
        
      }
        nuevaDireccion() //llamado del objeto
      }
    }
}
  
personaObj.imprimirNombre()
personaObj.direccion.obtenerPais()


// new

function PersonNew(nombre,apellido) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad =90 
  console.log("Este mensaje paso por aquí");
  this.imprimirPersona = function () {
    return this.nombre + " " + this.apellido + "(" + this.edad + ")";
  }
}

var juan = new PersonNew();
console.log(juan);
console.log(juan.imprimirPersona());

var conParametros = new PersonNew("nati", "paris");
console.log(conParametros);


//GAME js

//Class
function Jugador() {
  this.nombre = nombre
  this.pv=100
  this.sp = 100

  this.curar = function (jugadorObjetivo) {
    
    if (this.sp>=40) {
    
      this.sp -= 40
      jugadorObjetivo.pv += 20
    
    } else {
      console.info(this.nombre+"No tiene sp!!");
      
    }
    this.estado(jugadorObjetivo)
  }

  this.tirarFlecha = function (jugadorObjetivo) {
  if (jugadorObjetivo.pv > 40) {
    jugadorObjetivo.pv -= 40
  } else
  {
    jugadorObjetivo.pv -= 0
    console.log(jugadorObjetivo.nombre +"Lose!!");
    
  }  
  
    jugadorObjetivo -= 40
    this.estado(jugadorObjetivo);
  }
  
  this.estado = function (jugadorObjetivo)
  {
    console.info(this)
    console.info(jugadorObjetivo);

  }  
}

var gandalf = new Jugador("GANDALF")
var legolas = new Jugador("LEGOLAS")

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas)



//Prototypes

function clasePersona() {
  this.nombre ="silvia"
  this.apellido="corso"
  this.edad = 34
}