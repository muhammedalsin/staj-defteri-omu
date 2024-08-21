let yas = 20;

if (yas >= 18) {
    console.log("Yetişkin."); // Koşul doğru, bu blok çalıştırılır
} else {
    console.log("Çocuk.");
}


// =============================

let not = 85;

if (not >= 90) {
    console.log("AA");
} else if (not >= 80) {
    console.log("BB"); // Koşul doğru, bu blok çalıştırılır
} else if (not >= 70) {
    console.log("CC");
} else {
    console.log("FF");
}

// =============================

let sicaklik = 30;

let durum = (sicaklik > 25) ? "Hava sıcak." : "Hava serin.";
console.log(durum); // "Hava sıcak."



// =============================


let gun = 3;

switch (gun) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba"); // Bu blok çalıştırılır
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Geçersiz gün.");
}