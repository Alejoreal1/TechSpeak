window.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("name");
  const apodo = localStorage.getItem("nickName");

  if (nombre && apodo) {
    document.getElementById("nombreUsu").textContent = nombre;
    document.getElementById("apodo").textContent = apodo;
  } else {
    // Si no hay nombre en localStorage, redirigir al login o mostrar mensaje
    document.getElementById("nombreUsu").textContent = "Invitado";
    document.getElementById("apodo").textContent = "Invitado";
  }
});