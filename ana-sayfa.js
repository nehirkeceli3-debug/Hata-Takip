const toplamTest = 24;
const basariliTest = 18;

const oran = (basariliTest / toplamTest) * 100;
document.querySelector(".basari-doluluk").style.width = oran + "%";

document.getElementById("basariOrani").textContent =
    "%" + oran;
 const toplamHata = 12;
const cozulenHata=8;
 const bekleyenHata = toplamHata - cozulenHata;

document.getElementById("toplamHata").textContent = toplamHata;
document.getElementById("cozulenHata").textContent = cozulenHata;
document.getElementById("bekleyenHata").textContent = bekleyenHata;