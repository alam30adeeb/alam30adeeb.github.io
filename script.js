const menu = document.getElementById("menu")
const navbar = document.getElementById("navbar")

if(menu){
    menu.addEventListener("click",()=>{
        navbar.style.display="initial";
    })
}