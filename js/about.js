const obj = JSON.parse('{"name": "Nargi", "age": 21, "city": "Baku"}');
console.log(obj);



const text = '["Ford", "Audi", "Ceska"]';
const arr = JSON.parse(text);
console.log(arr);



const nana = {
    ad: "lana",
    age: 34,
    music: "Indi-pop"
}
const json = JSON.stringify(nana);
localStorage.setItem("txt", json );

let txt = localStorage.getItem("txt");
let nese = JSON.parse(txt);
console.log(nese.ad);



const su = '{"name":"Tamli su", "name2": "Ipeksu"}';
const mysun = JSON.parse(su);
let a = " ";
for (const x in mysun) {
    a += mysun[x] + ", ";
}
console.log(a);



const havayi = document.getElementById('havayi');


fetch('https://jsonplaceholder.typicode.com/posts')
.then(nara => nara.json())
.then(data => {
    let x = " ";
    data.forEach(element => {
    x += `<h3>${element.title}</h3>
    <p>${element.body}</p>
    `
    });
    havayi.innerHTML = x
})
.catch(error => console.log(error))
.finally(console.log("I will Always working"));



const photos = document.getElementById('photo');
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(img => img.json())   // gelen daatanin  json cevriri
.then(dark => {
    let number = ' ';
    dark.forEach(e => {
        number += `<img src="${e.thumbnailUrl }">
        <h1>${e.title}</h1>

        `
    })
    photos.innerHTML = number
})
.catch(error => console.log(islemir))
.finally(console.log("men hemise varam"))



const album = document.getElementById('album')


const post = async () => {
    const numer = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');  //gelen datani yuklesein bitsin sonra asagdakini isletsin
    const dt = await numer.json();  // dt gozlet 
    console.log(dt);
    album.innerHTML = dt[3].title // burda 3 pozitiyada olan title ekrana yazdiri

}
post();