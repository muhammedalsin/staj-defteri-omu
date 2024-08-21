let toplam = 0;

for (let i = 1; i <= 5; i++) {
    toplam += i;
}

console.log("Toplam: " + toplam); // Toplam: 15



// =======================================================


let carpim = 1;
let i = 1;

while (i <= 5) {
    carpim *= i;
    i++;
}

console.log("Çarpım: " + carpim); // Çarpım: 120


// =======================================================

let sayi;
let dogruSayi = 7;

do {
    sayi = prompt("Bir sayı tahmin edin (1-10):");
} while (sayi != dogruSayi);

console.log("Tebrikler! Doğru sayıyı buldunuz.");



// =======================================================


let ogrenci = {
  ad: "Ali",
  soyad: "Yılmaz",
  yas: 20
};

for (let ozellik in ogrenci) {
  console.log(ozellik + ": " + ogrenci[ozellik]);
}
// Çıktı:
// ad: Ali
// soyad: Yılmaz
// yas: 20


// =======================================================


let sayilar = [10, 20, 30, 40, 50];

for (let sayi of sayilar) {
    console.log(sayi);
}
// Çıktı:
// 10
// 20
// 30
// 40
// 50

