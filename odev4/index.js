//employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
//Bu veriyi okuyalım. (READ)
//Bu veriyi güncelleyelim.
//Dosyayı silelim.

const fs = require("fs");

const sampleData = `{ name: "Employee 1 Name", salary: 2000 }`;

console.log("Dosya oluşturuluyor...");
fs.writeFile("employees.json", sampleData, (res) => {
  console.log(res);
});

console.log("Dosya okunuyor...");

fs.readFile("employees.json", "utf8", (err, data) => {
  console.log(data);
});

fs.unlink("employees.json", (err, data) => {
  console.log("deleted!");
});
