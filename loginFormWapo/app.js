// Seleccionar el formulario
const loginForm = document.getElementById('login-form');

// Manejar el evento de envío del formulario
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar que el formulario se envíe

  // Obtener valores de los campos
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validaciones básicas
  if (!email || !password) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  // Simular inicio de sesión exitoso
  alert(`Inicio de sesión exitoso.\nCorreo: ${email}\nContraseña: ${password}`);
  loginForm.reset(); // Limpiar el formulario
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}