import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
getDatabase,
ref,
set,
get
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
 
const firebaseConfig = {
apiKey: "AIzaSyBccU9T60QnMwcOKOvzh0xp871j7_qy5kQ",
authDomain: "petpointv3.firebaseapp.com",
databaseURL: "https://petpointv3-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "petpointv3",
storageBucket: "petpointv3.firebasestorage.app",
messagingSenderId: "647316543558",
appId: "1:647316543558:web:841c3c8230bc21f3171247"
};
 
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
 
const petPointStructure = {
system: {
status: "online",
version: "3.0"
},
 
products: {},
 
categories: {},
 
stock: {},
 
sales: {},
 
clients: {},
 
employees: {},
 
logs: {}
};
 
set(ref(db), petPointStructure)
.then(() => {
console.log("✅ Структура PetPoint v3 создана");
 
return get(ref(db));
})
.then((snapshot) => {
console.log("📦 База данных:");
console.log(snapshot.val());
})
.catch((error) => {
console.error("❌ Ошибка:", error);
});
``
