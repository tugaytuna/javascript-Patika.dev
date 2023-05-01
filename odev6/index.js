//koa paketini indirelim.
//index, hakkimda ve iletisim sayfaları oluşturalım.
//Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
//port numarası olarak 3000'i kullanalım.

const Koa = require("koa");
const app = new Koa();
const port = 3005;

// response
app.use((res) => {
  const url = res.url;
  if (url == "/") {
    res.body = "<h1>Anasayfa</h1>";
  } else if (url == "/hakkimda") {
    res.body = "<h1>hakkimda</h1>";
  } else if (url == "/iletisim") {
    res.body = "<h1>iletisim</h1>";
  } else {
    res.body = "<h1>404</h1>";
  }
});

app.listen(port, () => {
  console.log(`${port}. port listening...`);
});
