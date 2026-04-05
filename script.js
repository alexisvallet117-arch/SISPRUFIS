const URL_API="https://script.google.com/macros/s/AKfycbyagH4yvpypa2v8iy34bdz3FnI-2dRZo0-RGv8tWdLc_fUMZkdZZCX4I6U9lI_Fr0E/exec";

function iniciarSesion(){

let usuario=document.getElementById("usuario").value;
let password=document.getElementById("password").value;

let usuarios=[

{usuario:"admin",password:"1234"},
{usuario:"evaluador1",password:"1234"},
{usuario:"evaluador2",password:"1234"}

];

for(let i=0;i<usuarios.length;i++){

if(
usuario===usuarios[i].usuario &&
password===usuarios[i].password
){

sessionStorage.setItem("evaluador",usuario);

window.location="menu.html";

return;

}

}

alert("Datos incorrectos");

}



function enviarDatos(datos){

fetch(URL_API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(datos)

})

.then(r=>r.text())

.then(r=>{

alert("Registro guardado");

})

.catch(e=>{

alert("Error al guardar");

console.error(e);

});

}



function guardarTerrestre(){

let evaluador=sessionStorage.getItem("evaluador");

let datos={

Evaluador:evaluador,

Nombre:document.getElementById("nombre").value,

Tipo:"Terrestre",

"2400m":document.getElementById("carrera").value,

Sentadillas:document.getElementById("sentadillas").value,

Lagartijas:document.getElementById("lagartijas").value,

Plancha:document.getElementById("plancha").value,

Barras:document.getElementById("barras").value,

Apnea:"",

Nado:"",

Flotacion:"",

Fecha:new Date().toLocaleString()

};

enviarDatos(datos);

document.getElementById("form").reset();

}



function guardarAcuatico(){

let evaluador=sessionStorage.getItem("evaluador");

let datos={

Evaluador:evaluador,

Nombre:document.getElementById("nombre").value,

Tipo:"Acuatico",

"2400m":"",

Sentadillas:"",

Lagartijas:"",

Plancha:"",

Barras:"",

Apnea:document.getElementById("apnea").value,

Nado:document.getElementById("nado").value,

Flotacion:document.getElementById("flotacion").value,

Fecha:new Date().toLocaleString()

};

enviarDatos(datos);

document.getElementById("form").reset();

}



function cerrarSesion(){

sessionStorage.clear();

window.location="login.html";

}
