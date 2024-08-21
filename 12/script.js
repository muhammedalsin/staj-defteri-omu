
let sayilar = [1, 2, 3, 4, 5];
let kareler = sayilar.map(function(sayi) {
    return sayi * sayi;
});

console.log(kareler); // [1, 4, 9, 16, 25]


// ===================================


let yaslar = [12, 18, 25, 30, 17, 16];
let yetiskinler = yaslar.filter(function(yas) {
    return yas >= 18;
});

console.log(yetiskinler); // [18, 25, 30]

