
const aramaKutusu = document.getElementById("hataArama");
const hataSatirlari = document.querySelectorAll("tbody tr");
const sonucMesaji = document.getElementById("sonucMesaji");
const oncelikFiltresi = document.getElementById("oncelikFiltresi");


function hatalariGoster() {
    const arananMetin = aramaKutusu.value.trim().toLowerCase();
    const secilenOncelik = oncelikFiltresi.value;

    let gorunenHataSayisi = 0;

    hataSatirlari.forEach(function(satir) {
        const hataBasligi = satir.cells[1].textContent.toLowerCase();
        const hataOnceligi = satir.cells[2].textContent.trim();

        const baslikUyuyor = hataBasligi.includes(arananMetin);

        const oncelikUyuyor =
            secilenOncelik === "tum" ||
            hataOnceligi === secilenOncelik;

        if (baslikUyuyor && oncelikUyuyor) {
            satir.style.display = "";
            gorunenHataSayisi++;
        } else {
            satir.style.display = "none";
        }
    });

    if (gorunenHataSayisi === 0) {
        sonucMesaji.style.display = "block";
    } else {
        sonucMesaji.style.display = "none";
    }
}

aramaKutusu.addEventListener("input", hatalariGoster);
oncelikFiltresi.addEventListener("change", hatalariGoster);

const detayBaglantilari = document.querySelectorAll(".detay-baglantisi");

const hataDetayi = document.getElementById("hataDetayi");
const detayBaslik = document.getElementById("detayBaslik");
const detayOncelik = document.getElementById("detayOncelik");
const detayDurum = document.getElementById("detayDurum");
const detayTarih = document.getElementById("detayTarih");

detayBaglantilari.forEach(function(baglanti) {
    baglanti.addEventListener("click", function(event) {
        event.preventDefault();

        const satir = baglanti.closest("tr");

        detayBaslik.textContent =
            "Hata Başlığı: " + satir.cells[1].textContent;

        detayOncelik.textContent =
            "Öncelik: " + satir.cells[2].textContent.trim();

        detayDurum.textContent =
            "Durum: " + satir.cells[3].textContent.trim();

        detayTarih.textContent =
            "Tarih: " + satir.cells[4].textContent;

        hataDetayi.style.display = "block";
    });
});
