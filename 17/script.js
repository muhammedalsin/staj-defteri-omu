


function degistir() {
  let paragraf = document.getElementById("paragraf");
  paragraf.textContent = "Paragraf metni değiştirildi!";
}
// ===================================



function yeniOgeEkle() {
  let yeniOge = document.createElement("li");
  yeniOge.textContent = "Yeni Öğe";
  
  let liste = document.getElementById("liste");
  liste.appendChild(yeniOge);
}