

let shop = {
    name: "api",
    age:"44"

}



function bosing(){
    localStorage.setItem("api", JSON.stringify(shop))

}

let loca = localStorage.getItem("api");

loca.map((item)=>{
    loca.innerHTML += `
    <div class="item">
    <p>${item.age}</p>
    </div>
    `
})

