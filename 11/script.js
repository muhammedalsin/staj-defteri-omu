function enBuyukSayi(sayi1, sayi2) {
  if (sayi1 > sayi2) {
      return sayi1;
  } else {
      return sayi2;
  }
}

let sonuc = enBuyukSayi(10, 20);
console.log("En büyük sayı: " + sonuc); // "En büyük sayı: 20"

// ===================================

function diziToplami(dizi) {
  let toplam = 0;
  for (let i = 0; i < dizi.length; i++) {
      toplam += dizi[i];
  }
  return toplam;
}

let sayilar = [1, 2, 3, 4, 5];
let toplamSonuc = diziToplami(sayilar);
console.log("Dizideki sayıların toplamı: " + toplamSonuc); // "Dizideki sayıların toplamı: 15"


