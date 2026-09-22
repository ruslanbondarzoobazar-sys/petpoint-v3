console.log('PetPoint v3 started');

const firebaseConfig = {
  apiKey: "AIzaSyDEM6yhFUy9gyO71-tyg6Guq_q6ixASZIw",
  authDomain: "try1-11531.firebaseapp.com",
  databaseURL: "https://try1-11531-default-rtdb.firebaseio.com",
  projectId: "try1-11531",
  storageBucket: "try1-11531.firebasestorage.app",
  messagingSenderId: "677256692016",
  appId: "1:677256692016:web:a1c11a500cc3b8b090c8f5",
  measurementId: "G-MXL1QYBJ4K"
};

firebase.initializeApp(firebaseConfig);

console.log("Проверка Firebase...");

firebase.database().ref("/test").set("hello")
  .then(() => console.log("Firebase работает!"))
  .catch(err => console.error("Firebase ошибка:", err));
