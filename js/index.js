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
    <div class="col-lg-4">
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