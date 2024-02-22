import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0ejeJnw2Z5gHpMooegodkxO0ZkGZ_bpk",
  authDomain: "admin-panel-careervyas.firebaseapp.com",
  projectId: "admin-panel-careervyas",
  storageBucket: "admin-panel-careervyas.appspot.com",
  messagingSenderId: "774095255466",
  appId: "1:774095255466:web:5f3a778bf564ccb9b51dd3"
};

let app;
if(app==null){
    initializeApp(firebaseConfig);
}

export default app;