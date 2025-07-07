window.addEventListener("DOMContentLoaded", () => {
  const apodo = localStorage.getItem("nickName");

  if (apodo) {
    document.getElementById("apodo").textContent = apodo;
  } else {
    // Si no hay nombre en localStorage, redirigir al login o mostrar mensaje
    document.getElementById("apodo").textContent = "Invitado";
  }
});