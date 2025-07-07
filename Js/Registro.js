document.getElementById("botonIngresar").addEventListener("click", function guardarDatos() {
  const nombre = document.getElementById("name").value.trim();
  const apodo = document.getElementById("nickName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();


  if (!nombre || !apodo || !email || !password) {
    alert("Por favor, complete todos los campos antes de continuar.");
    return; 
  }

  localStorage.setItem("name", nombre);
  localStorage.setItem("nickName", apodo);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("¡Registro exitoso!");
  window.location.href = "InicioSesion.html";
});
