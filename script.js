// =========================
// CONFIGURACIÓN
// =========================

const URL_API = "https://script.google.com/macros/s/AKfycbxGMbwP2pc1jhS6zM3hSP49a6M7WtHi2jqf0GvhYXb-L9x-VXnQnDSp6jmKCJFyDl_a/exec";


// =========================
// FUNCIONES GENERALES
// =========================

function cerrarSesion(){
    sessionStorage.clear();
    window.location = "index.html";
}


// =========================
// UTILIDADES
// =========================

function obtenerEvaluador(){
    return sessionStorage.getItem("evaluador") || "Sin registro";
}


// =========================
// GUARDADO EN NUBE 🔥
// =========================

function guardarEnNube(datos){

    fetch(URL_API, {
        method: "POST",
        body: JSON.stringify(datos)
    })
    .then(() => console.log("Guardado en nube"))
    .catch((err) => console.log("Error:", err));

}


// =========================
// LIMPIAR DATOS
// =========================

function limpiarRegistros(){

    if(confirm("¿Deseas eliminar todos los registros?")){

        localStorage.removeItem("resultados");
        alert("Registros eliminados");
        location.reload();

    }

}
