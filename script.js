// =========================
// CONFIGURACIÓN
// =========================

// 🔥 PEGA AQUÍ TU URL DE GOOGLE APPS SCRIPT
const URL_API = "PEGA_AQUI_TU_URL";


// =========================
// FUNCIONES GENERALES
// =========================

// Cerrar sesión
function cerrarSesion(){

    sessionStorage.clear();

    window.location = "index.html";

}


// =========================
// UTILIDADES (OPCIONAL)
// =========================

// Obtener evaluador actual
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
    .catch(() => console.log("Error al guardar en nube"));

}


// =========================
// FUNCIÓN PARA LIMPIAR DATOS (opcional)
// =========================

function limpiarRegistros(){

    if(confirm("¿Deseas eliminar todos los registros?")){

        localStorage.removeItem("resultados");

        alert("Registros eliminados");

        location.reload();

    }

}
