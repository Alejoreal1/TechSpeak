document.getElementById("archivo").addEventListener("change", function () {
  const archivo = this.files[0];
  if (archivo) {
    const url = URL.createObjectURL(archivo);
    document.getElementById("fotoPerfil").src = url;
    document.getElementById("tamañoFoto").src = url;
  }
});

document.getElementById("btnCerrarSesion").addEventListener("click", function () {
  alert("Sesión cerrada exitosamente.");
  window.location.href = "../index.html";
})

document.getElementById("btnGuardar").addEventListener("click", function () {
  alert("Tus cambios han sido guardados exitosamente.");
  window.location.href = "principal.html";
})

document.getElementById("eliminar").addEventListener("click", function eliminarCuenta() {
  const confirmar = confirm("¿Esta seguro de que desea eliminar su cuenta?")
  if(confirmar){
    localStorage.clear();
    alert("Tu cuenta ha sido eliminada exitosamente.");
    window.location.href="index.html";
  } else{
    alert("No se pudo eliminar tu cuenta.");
  }
})

 /*-------------------------------------------------------------------------------*/
window.addEventListener("DOMContentLoaded", () => {
  const apodo = localStorage.getItem("nickName");

  if (apodo) {
    document.getElementById("nombrePerfil").textContent = apodo;
  } else {
    document.getElementById("nombrePerfil").textContent = "Invitado";
  }
});