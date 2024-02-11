let btmState = false
const btm_buy = document.getElementById("buy")
let bank = 0
let product_price = document.querySelector(".product_price")
let basketcash = document.querySelector(".basketcash")
console.log(product_price)
function buying() {
    console.log("buy");
    if (btmState === false) {
       btm_buy.innerHTML = "В корзине";
       btm_buy.style.background = "#ffcc00";
        btmState =true
    } else {
        btm_buy.innerHTML = "В корзину";
        btm_buy.style.background = "#e7bf2b";
        btmState = false

    }
}