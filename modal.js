let getModal = document.getElementById('modal');
let btn = document.querySelector(".times");
let startModal = document.getElementById('OpenInputArea');
let openModal = function(){
    startModal.addEventListener("click", () =>{
        getModal.style.display = "flex";
    })
}
 let closeModal = function(){
    btn.addEventListener("click", () => {
        getModal.style.display = "none";
    })
}
openModal()
closeModal()