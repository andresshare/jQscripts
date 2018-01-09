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
  this.pais ="UK"
  this.imprimirInformation = function () {
    console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    

  }
}
clasePersona.prototype.imprimirInformation = function () {
  console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
  
} //añade datos con tipo prototype  para que no se repitan con los objetos
 //en general las funciones

var variablePersona = new clasePersona()
console.log(variablePersona);

var Prototipo = new clasePersona()

Number.prototype.esPosiivo = function () {
  if (this > 0) {
    return true
  }
  else {
    return false
  }
}
  //functiones anonimas

  (function () {

    var numero = 10 //variable global
    
    function cambiarA() {
      return numero = 23
    }

    console.log(numero);
  
  }())

//Uso funcion anonima 

function ejecutarFuncion(fn) {
  if ( fn() === 1) {
  return true

  } else {
    return false
    

  }
  
}

console.log(

  //llama a ejecutar funcion
    
    ejecutarFuncion(function () {
    
    console.log("funcion anonima");
    return 1

  })

);


//typeof
function identifica (param) {
  console.log(typeof param);
  if (typeof param === "function") {
    param();
  }
  else {
    console.log(param)
  }
    
}

function personaTipoOf() {
  
}

var juan = new personaTipoOf()

identifica(function () {
  console.log("funcion anonima con Typeof");
  
})
identifica(function () {
  console.log(1);

})


//Arrays
var arr = [5, 4, 3, 2, 1]
console.log(arr);
console.log(arr[0], arr[3]);

//reverse
arr.reverse()
console.log(arr);

//map
arr = arr.map(function (elem) {
  elem *= elem
  return elem
})

console.log(arr);

//map uso dos
arr = arr.map(Math.sqrt)
console.log(arr)


//join

arr = arr.join("|")
console.log(arr);

//split

arr = arr.split("|")
console.log(arr);



//arr push //cuando se coloca se reinicia la matriz abajo

// arr = arr.push("6")
// console.log(arr);


//unshift

arr.unshift("0")
console.log(arr);


//.toString
console.log(arr.toString());

//Pop

var eliminaUltimoElemento = arr.pop()
console.log(eliminaUltimoElemento, "Elemento eliminado" + eliminaUltimoElemento);


arr.splice(1,1,"10","20","30")
console.log(arr);


arr = arr.slice(0, 2)
console.log(arr);



var arr = [
  true,
  {
    nombre: "arreglo",
    apellido: "objeto"
  },
  false,
  function () { 
    console.log("adentro del arreglo");
  },
  function (persona) {
    console.log(persona.nombre +' '+persona.apellido)
  },
  

  [
    "carla",
    "natalia",
    "monica",
    [
      "milena",
      "paola",
      "catalina"
    ]
  ]


]

console.log(arr.length);
console.log(arr);
console.log(arr[0])
console.log(arr[1].nombre+""+arr[1].apellido)

arr[3]()
arr[3](arr[1]); //areglo y funcion


console.log(arr[4][3]);
console.log(arr[4][3]);


var arreglo2 = arr[5][3]
arreglo2[0] = "nuevoNombre"
console.log(arreglo2);

//Arguments

// var arguments = 20;
// function funcionArgumentos(a,b,c,d) {
//   if (arguments.length !==4) {
//     console.error("La funcion necesita 4 paramentros")
//     return   
//   }
  
//   console.log(a + b + c + d)
  
  
// }
// funcionArgumentos(10,20,30)


//sobrecarga de operadores

function crearProducto(nomnbre,precio) {
  nombre = nombre || "sin nombre"
  precio = precio || 0
  console.log("Producto", nombre, 'Precio', precio);
  
  
}

function crearProducto100(nombre) {
  crearProducto(nombre, 10)
}

function crearProductoCamisa(precio) {
  crearProducto("camisa",precio)
}
crearProducto("lapiz")
crearProducto100("masProducto")
crearProductoCamisa(23)

//Polimorfismo

function DeterminaDato(dato) {
  if (dato==undefined) {
    console.log("dato, es 'undefinded'");
  }
  if (typeof dato === "number") {
    console.log("Es un numero dato, y hago operaciones con numeros");
    
  }

  if (typeof dato === "texto") {
    console.log("Es un numero dato, y hago operaciones con textos");

  }
  if (typeof dato === "object") {
    console.log("Es un objeto dato, pero puede ser cualquier cosa");
  }
  if (dato instanceof Number) {
    console.log("Dato es un objeto numerico");
    
  }
}

DeterminaDato(2)

//funciones  y su contexto

//arreglo de funciones
// function funcionConConTexto() {
//   var arr_ = []
//   var numero = 1
  
 
//   for (var numero = 1; numero <= 3; numero++) {
//     arr_.push(
//       (function numero() { //funcion anonima
//         return function () {
//           console.log(numero);

//         }
//       })(numero)
//     );
//   }
//    return arr; 
//   }
 
  


// var funcionesencontexto = funcionConConTexto()
// funcionesencontexto[0]()
// funcionesencontexto[1]()
// funcionesencontexto[2]()


//Objet Number

var numeroUno =10
var numeroDos = new Number(10)


//objecto Booleano
var aBoolean = new Boolean ("-2")
console.log(aBoolean);

//objeto fecha

var hoy = new Date()
var fechaMilisegundos = new Date(1)
// formato : var fechaFija = new Date(anio, mes, dia, hora, min, segundo, mili)
var fechaFija = new Date(2090, 10, 21, 23, 10, 15, 1)
console.log(hoy);
console.log(fechaMilisegundos);
console.log(fechaFija);


console.log(hoy.getFullYear() + 1);
console.log(hoy.Date);
console.log(hoy.getHours);
console.log(hoy.getMilliseconds);
console.log(hoy.getSeconds);
console.log(hoy.getTime); //milisegundos

//calcula tiempo de respuesta

var inicio = new Date()

for (i = 0; i <= 15000; i++) {
  
  console.log("Procesando")
}

var fin = new Date();

// console.log(inicio);
// console.log(fin);

var duracion = fin.getTime() - inicio.getTime()
console.log(duracion, "milisegundos");
console.log(duracion/1000, "segundos");

///operaciones con fechas

var fechaFinal = new Date(2016,10,20)
console.log(fechaFinal);

// fechafinal.setDate(31)
// console.log(fechaFinal);

Date.prototype.sumarDias= function (dias) {
  this.setDate(this.getDate()+dias)
  return this
}
Date.prototype.sumarAnios = function (anios) {
  this.setFullYear(this.getFullYear() + anios)
  return this
}


//Suma dias
console.log(fechaFinal);
console.log(fechaFinal.sumarDias(5));

//suma años
console.log(fechaFinal);
console.log(fechaFinal.sumarAnios(5));

//objeto Math

var PI = Math.PI
var E = Math.E;
console.log(PI);
console.log(E);

//expresiones regulares

var reg = RegExp("a")
var reg = /a/;
var texto = "Hola Mundo"

var arr = texto.match(reg)
console.log(arr);



//Cookies

//validar el estado de la cookie

// var demo = "123; 123&123/"
// console.log(demo);
// console.log(escape(demo));
// console.log(unescape(demo));

//guardar dato de cookie"
//document.cookie = "datos:eldatoqueguarde";

// function crearCookie(nopmbre, valor) {
//   valor =escape(valor)
//   var hoy = new Date()
//   hoy.setMonth(hoy.getMonth()+1)
//   document.cookie = nombre + "= " + valor + ";expires=".toUTCString()+";";
// }
// function borrarCookie() {
//   var hoy = new Date()
//   hoy.setMonth(hoy.getMonth() + 1)

//   document.cookie = nombre + "= x" + valor + ";expires=".toUTCString() + ";";
// }


// function getCookie(nombre) {
//   // var cookies = document.cookie;
  
//   var cookieArr = cookies.split(";")
//   console.log(cookieArr);
//   for (var i = 0; i < cookieArr.length; i++) {
  
//     var parArr = cookieArr[i].split("=")
//     cookieArr[i] = parArr;
//     if (parArr[0] == nombre) {
//       return unscape(parArr[1])
//     }
//   }
//   return undefined
// }

// console.log(getCookie("direccion"));

//codigo testCookie
// crearCookie("nombre", "Fernanda")
// console.log(cookies);
// crearCookie("nombre:", "Fernanda")
// crearCookie("correo:", "Fernanda@hotmail.com")
// crearCookie("ciudad:", "SanJose,")
// borrarCookie("nombre");


///



//funciones
var a = 29
var b = 234
var c=(a<b)?function () {
  console.log("A es mayor que B");
  return a;
}(): function () {
  console.log("B es mayor que A");
  return a;
}
console.log(c);


//objetos json
var objetoJS = {
  nombre: "Iron Man",
  poder: 234
}

console.log("Objeto literal", objetoJS);
var jsonString =JSON.stringify(objetoJS)
console.log(jsonString);
var objetoDesdeJson = JSON.parse(jsonString)
console.log(objetoDesdeJson);
console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.poder);






  










