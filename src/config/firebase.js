import firebase from 'firebase/app'  //Firebase Appをインポート

import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA73XM1AqeYksTaeQDVwNNHT36xEohPhBU",
    authDomain: "chat-app-3192e.firebaseapp.com",
    projectId: "chat-app-3192e",
    storageBucket: "chat-app-3192e.appspot.com",
    messagingSenderId: "949339744454",
    appId: "1:949339744454:web:82ad225a5ab59139370fc7"
}

firebase.initializeApp(firebaseConfig)  //認証情報を引数に与えてFirebaseAppの初期化を行っています。

export default firebase  //初期化が完了したFirebaseAppをエクスポートしています。