const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const botonIngresar = document.getElementById('botonIngresar');

// Posiciones en las que se moverá el botón
const posiciones = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
let index = 0;

// Validar campos vacíos
function camposVacios() {
  return emailInput.value.trim() === '' || passwordInput.value.trim() === '';
}

// Movimiento del botón
function moverBoton() {
  // Si los campos ya están llenos, no se mueve más
  if (!camposVacios()) return;

  botonIngresar.classList.remove(posiciones[index]);
  index = (index + 1) % posiciones.length;
  botonIngresar.classList.add(posiciones[index]);
}

// Detectar el intento de clic
botonIngresar.addEventListener('mouseenter', moverBoton);

// Acción real de login
botonIngresar.addEventListener('click', function () {
  if (camposVacios()) return;

  const emailRegistro = localStorage.getItem('email');
  const passwordRegistro = localStorage.getItem('password');

  if (
    emailInput.value === emailRegistro &&
    passwordInput.value === passwordRegistro
  ) {
    alert('¡Inicio de Sesión exitoso!');
    window.location.href = 'principal.html';
  } else {
    alert('El usuario o contraseña están incorrectos');
    
  }
});