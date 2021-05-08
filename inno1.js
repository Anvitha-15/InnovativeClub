// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDl-jpBsDuN6k3qUyugHMPKtjCkKd1cORg",
    authDomain: "innovativedatabase-6ed4f.firebaseapp.com",
    databaseURL: "https://innovativedatabase-6ed4f-default-rtdb.firebaseio.com",
    projectId: "innovativedatabase-6ed4f",
    storageBucket: "innovativedatabase-6ed4f.appspot.com",
    messagingSenderId: "352705898350",
    appId: "1:352705898350:web:1ec4b106bfce31ea34837f",
    measurementId: "G-64PNH13BV5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




const innoForm = document.querySelector('#inno-form');
innoForm.addEventListener('submit', (e) =>  {
    e.preventDefault();

    var Name = document.getElementById('inno-name');
    var reg = document.getElementById('inno-reg');
    var dept = document.getElementById('inno-dept');
    var year = document.getElementById('inno-year');
    var mail = document.getElementById('inno-mail');

    if(Name.value == ' ' || reg.value == ' ' || dept.value == ' ' || year.value == ' ' || mail.value == ' ')
    {
        alert('Fill the missing Fields');
    }
    else
    {
        firebase.database().ref('/Innovative Details/' + reg.value).update({

            Name : Name.value,
            Register : reg.value,
            Department : dept.value,
            Year : year.value,
            Email : mail.value
        });

        swal({
            title: "Good Job",
            text: "You have been successfully Registerd  !",
            icon: "success",
            button: "OK!",
          });
    }


})