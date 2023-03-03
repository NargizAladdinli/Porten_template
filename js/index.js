//Mock Data in JS
const data = [
    {
        img:"https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_500960893.png",
        name:'Louis XVI ATHOS',
        price:"165 000 руб."
    },
    {
        img:"https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_480726656.png",
        name:'Jacob & Co',
        price:"2 000 000 руб."
    },
    {
        img:"https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_326315259.png",
        name:'Louis XVI ATHOS',
        price:"895 000 руб."
    },
]
data.map((el) => {
    const cart = document.querySelector('.cart');
    cart.innerHTML += `
    <div class="col-lg-4 col-sm-6 col-12">
        <div class="img_cart">
            <img src="${el.img}" alt="">
        </div>
        <div class="txt">
            <p>${el.name}/p>
            <p>${el.price}</p>
        </div>
    </div>
    `
})



// Watch In JS
function clock() {
const hoursArrow = document.querySelector('.hours');
const minutesArrow = document.querySelector('.minutes');
const secondsArrow = document.querySelector('.seconds');
const deg = 6

setInterval(() => {
    const day = new Date();
    
    const hours = day.getHours() * 30
    const minutes = day.getMinutes() * deg
    const seconds = day.getSeconds() * deg

    hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
    minutesArrow.style.transform = `rotateZ(${minutes}deg)`
    secondsArrow.style.transform = `rotateZ(${seconds}deg)`
}, 0);
}
clock();



// section clock mock data in JS
const suprice = [
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_500960893.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_480726656.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_217553507.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_146092163.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_823058858.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_680793122.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_427367421.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_939498924.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_343081776.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_480726656.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_134858292.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_884518663.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_642721348.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_232299782.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    {
        imgsrc: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_182403077.png",
        imghover: "https://transform.octanecdn.com/fitLogo/525x425/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_138221396.png",
        style: "Jacob & Co",
        cena: "895 000 руб."
    },
    
]
suprice.map((e) => {
    const secta = document.querySelector('.secta');
    secta.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 g-3">
        <div class="img_cart">
            <img class="img1" src="${e.imgsrc}" alt="">
            <div class="img_hover">
                <img class="img2" src="${e.imghover}" alt="">
            </div>
        </div>
        <div class="txt">
            <p>${e.style}</p>
            <p>${e.cena}</p>
        </div>
    </div>
    `
})