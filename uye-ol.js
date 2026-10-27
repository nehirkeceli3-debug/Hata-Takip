const form = document.querySelector("form");
const sifre = document.getElementById("sifre");
const sifreTekrar = document.getElementById("sifreTekrar");
const adSoyad = document.getElementById("adSoyad");
const email = document.getElementById("email");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (adSoyad.value.trim() === "") {
        alert("Ad soyad alanını doldurun!");
    } else if (sifre.value !== sifreTekrar.value) {
        alert("Şifreler birbiriyle aynı değil!");
    } else {
        alert("Şifreler eşleşti!");
    }
});