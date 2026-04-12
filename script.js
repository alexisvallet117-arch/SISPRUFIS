// =========================
// FUNCIONES GENERALES
// =========================

// Cerrar sesión
function cerrarSesion(){

    sessionStorage.clear();

    // 🔥 redirección correcta
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
// FUNCIÓN PARA LIMPIAR DATOS (opcional)
// =========================

// ⚠️ SOLO usar si quieres borrar todos los registros
function limpiarRegistros(){

    if(confirm("¿Deseas eliminar todos los registros?")){

        localStorage.removeItem("resultados");

        alert("Registros eliminados");

        location.reload();

    }

}
