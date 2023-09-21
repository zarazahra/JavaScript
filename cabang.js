// 1. Syntax Percabangan If

var totalBelanja = 20000;

if(totalBelanja > 10000){
    document.getElementById("if").innerHTML = "Selamat kamu dapat piring"
}


// 2. Syntax Percabangan If Else

var umurPengunjung = 17;

if(umurPengunjung >= 17 ){
    document.getElementById("ifelse").innerHTML = "Kamu boleh masuk wahana ini"
}else{
    document.getElementById("ifelse").innerHTML = "Maafkamu tidak dapat masuk wahana ini"
}


// 3. Syntax Percabangan If Else If

// var tiket = 8; 

// if(tiket > 6){
//     document.getElementById("ifelseif").innerHTML = "Dapat Popcorn";
// }else if (tiket >=4){
//     document.getElementById("ifelseif").innerHTML = "Dapat Makanan Ringan";
// }else if (tiket >=2){
//     document.getElementById("ifelseif").innerHTML = "Dapat Permen";
// }else{
//     document.getElementById("ifelseif").innerHTML = "Tidak dapat snack";
// }


// 4. Syntax Percabangan Switch Case

//Cara Pertama
// var umurPengunjung = prompt("Masukkan Umur Anda");
// var wahana = "";

// switch(true){
//      case umurPengunjung >= 18:
//         wahana = "Boleh masuk wahana Kora kora";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//     case umurPengunjung >= 16:
//         wahana = "Boleh masuk wahana Flaying Fox";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//     case umurPengunjung >= 14:
//          wahana = "Boleh masuk wahana Halilintar";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//     default: 
//         wahana = "Terima kasih sudah berkunjung"  
//         document.getElementById("switchcase").innerHTML = wahana;
//  }

//Cara Kedua
var nilai = prompt("Masukkan Nilai Anda");
var grade = "";

switch(true){
    case nilai > 90:
         grade = "A+";
         break;
         document.getElementById("switchcase").innerHTML = grade;
     case nilai > 80:
         grade = "A";  
         break;
         document.getElementById("switchcase").innerHTML = grade;
     case nilai > 70:
         grade = "B";  
         break;
         document.getElementById("switchcase").innerHTML = grade;
     case nilai > 60:
         grade = "C";
         break; 
         document.getElementById("switchcase").innerHTML = grade;  
     case nilai > 50:
         grade = "D";
         break; 
         document.getElementById("switchcase").innerHTML = grade; 
     default:
         grade = "F"; 
         document.getElementById("switchcase").innerHTML = grade; 

 }


// 5. Percabanga Ternary ?

// var tanya = prompt("Apakah Serang Ibukota Banten");

// var jawaban = (tanya.toUpperCase() == "IYA") ? "Benar": "Salah";
// document.getElementById("ternary").innerHTML = jawaban;


// 6. Percabanga Nested

var user = {
    nama: "Zara",
    email: "zara@gmail.com",
    password: "0204",
    role: "admin"
}

function masuk(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // console.log(email);
    if(user.email == email){
        if(user.password == password){
            if(user.role == "admin"){
                alert("Selamat datang" + user.nama);
            }
        }else{
            alert("Tidak Bisa Masuk");
        }
     }else{
        alert("Bukan Admin woee");
     }

}