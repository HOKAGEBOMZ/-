const body=document.querySelector("body")
const li=document.querySelectorAll(".a")
const product__title=document.querySelector(".product__title")
const product__description=document.querySelector(".product__description")
function dark(){
    console.log("dark") 
    body.style.background="#2F4F4F"
    body.style.transition="0.5s"
    li.forEach(element => {
        element.style.color="#ffdb58"
        product__title.style.color="#A5A5A5"
        product__description.style.color="#A5A5A5"
    });
}
function light(){
    console.log("light")
    body.style.background="#ffdb58"
    li.forEach(element => {
        element.style.color="white"
    });
}
