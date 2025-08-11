let form = document.querySelector(".form_");
form.addEventListener("click", () => {
    form.classList.add("shadow");
});
document.addEventListener("click",(event)=>{
    if(!form.contains(event.target)){
        form.classList.remove("shadow");
    }
})
