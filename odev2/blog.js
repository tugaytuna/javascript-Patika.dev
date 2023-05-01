//Blog oluşturmaya hazır mısınız?
//Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

const allPosts = [
  {
    id: 1,
    name: "Node.js Nedir?",
    desc: "Node.js - Javascript",
  },
  {
    id: 2,
    name: "Javascript Nedir?",
    desc: "Javascript - Node.js",
  },
  {
    id: 3,
    name: "Kodluyoruz",
    desc: "Kodluyoruz",
  },
  {
    id: 4,
    name: "Örnek Post",
    desc: "Örnek Açıklama",
  },
];

const showAllPosts = () => {
  allPosts.map((data) => {
    console.log(
      `Post: ${data.id} \n Post İsmi: ${data.name} \n Post Açıklaması: ${data.desc} \n`
    );
  });
};

showAllPosts();

const addPost = (newPost) => {
  promise1 = new Promise((resolve, reject) => {
    const lastId = allPosts.length;
    newPost.id = lastId + 1;
    allPosts.push(newPost);
    resolve(allPosts);
    reject(console.log("there is a problem!"));
  })
    .then((res) => {
      showAllPosts();
    })
    .catch((err) => {
      console.log(err);
    });
};

addPost({ name: "New Post!", desc: "New Post added! Read It!" });
