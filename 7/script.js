
// ===================================


let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

console.log(meyveler[0]); // "Elma"
console.log(meyveler[2]); // "Muz"

// ===================================


let sayilar = [10, 20, 30, 40];

sayilar[1] = 25; // 20'yi 25 ile değiştir
console.log(sayilar); // [10, 25, 30, 40]


// ===================================

let isimler = ["Ali", "Veli", "Ahmet"];

isimler.push("Ayşe"); // Dizinin sonuna "Ayşe" ekler
console.log(isimler); // ["Ali", "Veli", "Ahmet", "Ayşe"]

isimler.pop(); // Son elemanı ("Ayşe") kaldırır
console.log(isimler); // ["Ali", "Veli", "Ahmet"]

isimler.shift(); // İlk elemanı ("Ali") kaldırır
console.log(isimler); // ["Veli", "Ahmet"]

isimler.unshift("Mehmet"); // Başına "Mehmet" ekler
console.log(isimler); // ["Mehmet", "Veli", "Ahmet"]


// ===================================

let hayvanlar = ["Kedi", "Köpek", "Kuş"];

console.log("Dizi Uzunluğu: " + hayvanlar.length); // "Dizi Uzunluğu: 3"


// ===================================


let sayilar = [1, 2, 3, 4, 5];

for (let i = 0; i < sayilar.length; i++) {
    console.log(sayilar[i]);
}
// Çıktı:
// 1
// 2
// 3
// 4
// 5


// ===================================


let renkler = ["Kırmızı", "Yeşil", "Mavi"];

renkler.forEach(function(renk) {
    console.log(renk);
});
// Çıktı:
// "Kırmızı"
// "Yeşil"
// "Mavi"


// ===================================

let sayilar = [3, 1, 4, 2, 5];

sayilar.sort(); // Küçükten büyüğe sıralar
console.log(sayilar); // [1, 2, 3, 4, 5]