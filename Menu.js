document.addEventListener("DOMContentLoaded",()=>{
    function openMenu(menu, showMenu){
     menu.style.right='0';
     showMenu.style.opacity='0';
    }

    function closeMenu(menu,showMenu){
        menu.style.right='-350px';
        showMenu.style.opacity='1';
    }

    const showMenu= document.querySelector(".show_menu");
    const hideMenu= document.querySelector(".close_menu");
    const menu = document.querySelector(".hidden_menu");
    const links=document.querySelectorAll(".link")
    
    showMenu.addEventListener("click",()=>{
        openMenu(menu,showMenu)
    })

    hideMenu.addEventListener("click", ()=>{
        closeMenu(menu,showMenu)
    })
    links.forEach(element => {
        element.addEventListener("click",()=>{
            closeMenu(menu,showMenu)
        })
        
    });
})