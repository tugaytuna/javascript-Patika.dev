// Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
//Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
//Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const piNumber = 3.14;

const calculation = (yaricap) => {
  const result = piNumber * (Number(yaricap) * 2);
  return console.log("Dairenin Alanı: ", result);
};

readline.question(`Dairenin yarıçap değerini giriniz: `, (yaricap) => {
  calculation(yaricap);
  readline.close();
});
