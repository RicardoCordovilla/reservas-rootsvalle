const imageEl = document.getElementById("fadingImage");
const images = [
    "images/personas_bailando_en_roots_valle-1.jpg",
    "images/personas_bailando_en_roots_valle-2.jpg",
    "images/personas_bailando_en_roots_valle-3.jpg",
    "images/personas_bailando_en_roots_valle-4.jpg",
    "images/personas_bailando_en_roots_valle-5.jpg",
    "images/personas_bailando_en_roots_valle-6.jpg",
    "images/personas_bailando_en_roots_valle-7.jpg",
    "images/personas_bailando_en_roots_valle-8.jpg",
    "images/personas_bailando_en_roots_valle-9.jpg"
];

window.setInterval(changePicture, 2000);
let i = 0;
const nimages = images.length
let nrandom = Math.floor(Math.random() * nimages)
let n=0
function changePicture() {
    nrandom = Math.floor(Math.random() * nimages)
    i++;
    // console.log(nrandom, n)
    if (n == nrandom) nrandom += 1
    imageEl.style.backgroundImage = `url(${images[nrandom]})`;
    // console.log("luego: ",nrandom, n)
    n = nrandom

    if (i > nimages - 1) i = 0;
}
