
for (let i = 0; i < 5; i++) {
  console.log("İterasyon: " + i);
}
// Çıktı:
// İterasyon: 0
// İterasyon: 1
// İterasyon: 2
// İterasyon: 3
// İterasyon: 4


// ===================================

let sayi = 0;

while (sayi < 3) {
    console.log("Sayı: " + sayi);
    sayi++;
}
// Çıktı:
// Sayı: 0
// Sayı: 1
// Sayı: 2

// ===================================


let x = 5;

do {
    console.log("x'in değeri: " + x);
    x++;
} while (x < 7);
// Çıktı:
// x'in değeri: 5
// x'in değeri: 6


// ===================================


let araba = {
  marka: "BMW",
  model: "X5",
  yil: 2022
};

for (let ozellik in araba) {
  console.log(ozellik + ": " + araba[ozellik]);
}
// Çıktı:
// marka: BMW
// model: X5
// yil: 2022


// ===================================

let meyveler = ["Elma", "Muz", "Portakal"];

for (let meyve of meyveler) {
    console.log(meyve);
}
// Çıktı:
// Elma
// Muz
// Portakal

// ===================================

for (let i = 0; i < 5; i++) {
  if (i === 2) {
      continue; // İterasyonun geri kalanını atlar
  }
  if (i === 4) {
      break; // Döngüyü sonlandırır
  }
  console.log("i: " + i);
}
// Çıktı:
// i: 0
// i: 1
// i: 3


// ===================================

