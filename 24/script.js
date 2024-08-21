function gorevEkle() {
  let gorev = document.getElementById("yeniGorev").value;

  if (gorev === '') {
      alert("Lütfen bir görev girin!");
      return;
  }

  let li = document.createElement("li");
  li.textContent = gorev;

  // Tamamlandı işaretleme özelliği ekleyelim
  li.addEventListener("click", function() {
      li.classList.toggle("tamamlandi");
  });

  // Silme butonu ekleyelim
  let silButon = document.createElement("button");
  silButon.textContent = "Sil";
  silButon.style.marginLeft = "10px";
  silButon.addEventListener("click", function() {
      li.remove();
  });

  li.appendChild(silButon);

  document.getElementById("gorevListesi").appendChild(li);
  document.getElementById("yeniGorev").value = ''; // Girdi alanını temizleyelim
}
