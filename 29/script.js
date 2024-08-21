



document.getElementById("baslatButon").addEventListener("click", function() {
  let sayac = document.getElementById("sayac");
  let sayi = parseInt(sayac.textContent);
  
  let geriSayim = setInterval(function() {
      sayi--; // Sayıyı bir azalt
      sayac.textContent = sayi; // Sayacı güncelle

      if (sayi <= 0) {
          clearInterval(geriSayim); // Sayım tamamlandığında interval'i durdur
          alert("Süre doldu!");
      }
  }, 1000); // Her 1 saniyede bir tekrar et
});

// ===================================


