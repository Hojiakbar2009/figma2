
// function data() {
//        let data = {
//         id: 1,
//         ism: salom,
//         model:1
//        }


// }   
const like = document.querySelector(".like");
const lik = document.querySelector(".lik") 
setTimeout(function() {
    
let modal = document.querySelector(".modal"),
p_1 = document.querySelector(".p_1"),
btn = document.querySelector(".nav2_box"),
tel = document.querySelector(".tel"),
h11 = document.querySelector(".h11"),
modal_nav = document.querySelector(".modal_nav1");
setTimeout(function () {
    
h11.addEventListener("click",()=>{

    modal_nav.style.display = 'none'
})
tel.addEventListener("click", ()=>{
    modal_nav.style.display = 'block'
})

},1000)

}, 1000);
p_1.addEventListener("click", function () {
    modal.style.display = "none";
});



const btn_2 = document.querySelector(".btn"),
    div_1 = document.querySelector(".div_1"),
    div_2 = document.querySelector(".div_2"),
    div_3 = document.querySelector(".div_3"),
    div_4 = document.querySelector(".div_4"),
    div_5 = document.querySelector(".div_5");  


let section_1 = document.querySelector(".section_1");

const data = [
{
    id:"6% OFF",
    narxi:"Buy More & Save More",
    nomi:"s",
    soni:"Beverage",
    
}

]
data.map((item)=>{
    section_1.innerHTML +=`

    <div class="sec1_1">
    <img src="${item.img}" alt="" >

    <p> ${item.id} </p>
    <p> ${item.narxi} </p>
    <p> ${item.nomi} </p>
    <p> ${item.soni} </p>
    <button class="ilyosbek"> sotib olish </button>
    </div>
    `;
});

let btn_3 = document.querySelector(".ilyosbek")

btn_3.addEventListener("click", function(){
  let Json = localStorage.getItem("salom", );
  Json = JSON.parse(Json);
    localStorage.setItem("salom", JSON.stringify(data));
    Json.map((item)=> {
        modal.innerHTML +=  `
        <div class="div_1">
        <div class="left">
            <div class="div1">
                <span>6% OFF</span>
                <b>Buy More & Save More</b>
                <p class="salom">Beverage</p>
            </div>
        </div>
        
        `;
        

        p_1.addEventListener("click", function () {
            modal.style.display = "none";
            
        });

    })

});






// for (let k = 0; k <= 5; k++) {
//     console.log(k)
    
// }



fetch("json.json")