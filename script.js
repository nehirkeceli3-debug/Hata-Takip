
const sifreAlani = document.getElementById("sifre");
const sifreGosterButonu = document.getElementById("sifreGoster");


sifreGosterButonu.addEventListener("click", function () {
    if (sifreAlani.type === "password") {
        sifreAlani.type = "text";
        sifreGosterButonu.textContent = "Şifreyi Gizle";
    } else {
        sifreAlani.type = "password";
        sifreGosterButonu.textContent = "Şifreyi Göster";
    }
});


const emailAlani = document.getElementById("email");
const ornekEmail = "nehirkeceli3@gmail.com";
const ornekSifre = "123456";


const girisFormu = document.querySelector("form");

girisFormu.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailAlani.value.trim() === "") {
        alert("E-posta alanını doldurun!");
    } else if (sifreAlani.value === "") {
        alert("Şifre alanını doldurun!");
    } else if (
        emailAlani.value.trim() === ornekEmail &&
        sifreAlani.value === ornekSifre
        
) {
    window.location.href = "ana-sayfa.html";
} 

     else {
        alert("E-posta veya şifre hatalı!");
    }
});


