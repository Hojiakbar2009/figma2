

let shop = {
    id: "6% OFF",
    nomi: "Buy More & Save More" ,
    kompaniya: "Beverage",
}

function add() {
    localStorage.setItem("Buy More & Save More", JSON.stringify("shop"))
}




let op = localStorage.getItem(JSON.parse("shop"));



{op.localeCompare((ota) =>
        `
        <div class="div_1">
        <p>${shop.id}</p>
        </div>

        `
)}


let btn = document.querySelector("#tn");
let local = document.querySelector("#local_page")

btn.addEventListener("click", function(){
    local.style.transform = "translateX(0px)"
})

