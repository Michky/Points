import { firebase, database } from 'firebase-script.js';

// Función para registrar un usuario en la base de datos
function registrarUsuario(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const numeroCelular = document.getElementById('numeroCelular').value;
  const correoElectronico = document.getElementById('correoElectronico').value;

  const ref = firebase.database().ref('usuarios');
  const nuevoUsuario = {
    nombre: nombre,
    numeroCelular: numeroCelular,
    correoElectronico: correoElectronico,
    puntos:"0",
    suscripcion: {
      fechaInicio: '',// Aquí debes establecer la fecha de inicio 
      fechaFin: '' // Aquí debes establecer la fecha de fin 
    }
  };

  ref.push(nuevoUsuario)
    .then(() => {
      alert('Usuario registrado exitosamente');
      document.getElementById('registroForm').reset();
    })
    .catch((error) => {
      console.error('Error al registrar el usuario:', error);
    });
}

export { registrarUsuario };
