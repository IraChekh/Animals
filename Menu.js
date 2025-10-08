document.addEventListener("DOMContentLoaded",()=>{
    const showMenu= document.querySelector(".show_menu");
    const hideMenu= document.querySelector(".close_menu");
    const menu = document.querySelector(".hidden_menu");
    const links=document.querySelector(".link")
    showMenu.addEventListener("click",()=>{
        menu.style.right='0';
        showMenu.style.opacity='0';
        
    })

    hideMenu.addEventListener("click",()=>{
        menu.style.right='-350px';
        showMenu.style.opacity='1';
    })
})