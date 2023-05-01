//createServer metodunu kullanacağız.
//index, hakkimda ve iletisim sayfaları oluşturalım.
//Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
//port numarası olarak 5000'i kullanalım.

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url == "/index" || url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Anasayfa!</h2>");
  } else if (url == "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Hakkımda!</h2>");
  } else if (url == "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>İletisim!</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404!</h2>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`${port} port dinleniyor.`);
});
