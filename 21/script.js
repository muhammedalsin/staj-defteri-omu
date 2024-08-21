



function jsonVeriGoster() {
  let jsonVeri = '{"isim": "Ahmet", "yas": 30, "meslek": "Yazılımcı"}';
  let nesne = JSON.parse(jsonVeri);

  document.getElementById("jsonSonuc").textContent = "İsim: " + nesne.isim + ", Yaş: " + nesne.yas + ", Meslek: " + nesne.meslek;
}


// ===================================




function jsonFormatiniGoster() {
  let nesne = {
      isim: "Ayşe",
      yas: 25,
      meslek: "Grafiker"
  };

  let jsonVeri = JSON.stringify(nesne);
  document.getElementById("jsonFormat").textContent = jsonVeri;
}