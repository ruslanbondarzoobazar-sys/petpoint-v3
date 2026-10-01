import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
getDatabase,
ref,
set
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
 
set(ref(db, "system"), {
status: "online",
version: "3.0"
})
.then(() => {
console.log("✅ Данные записаны в Firebase");
})
.catch((error) => {
console.error("❌ Ошибка Firebase:", error);
});
