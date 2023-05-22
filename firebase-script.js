import firebase from 'firebase/app';
import 'firebase/database';

// Configurar la conexión a tu proyecto de Firebase
const firebaseConfig = {
    // Aquí van tus credenciales y detalles de configuración
    apiKey: "AIzaSyBkfSfx8D2zdAR3Bh1GNJl7-b-PYZ0-TqI",
    authDomain: "lacellarclub-e8837.firebaseapp.com",
    databaseURL: "https://lacellarclub-e8837-default-rtdb.firebaseio.com",
    projectId: "lacellarclub-e8837",
    storageBucket: "lacellarclub-e8837.appspot.com",
    messagingSenderId: "777551710995",
    appId: "1:777551710995:web:0f7e6edd3e7c42fc6a68e6",
    measurementId: "G-JN6ZTP0CT2"
};

// Inicializar la aplicación de Firebase
firebase.initializeApp(firebaseConfig);

// Obtener una referencia a la base de datos
const database = firebase.database();

export { firebase, database };