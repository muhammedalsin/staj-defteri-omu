for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  // Çıktı:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  // 10


// ===================================

let sayilar = [1, 2, 3, 4, 5];
let toplam = 0;
let i = 0;

while (i < sayilar.length) {
    toplam += sayilar[i];
    i++;
}

console.log("Toplam: " + toplam); // "Toplam: 15"

