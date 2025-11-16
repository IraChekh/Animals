document.addEventListener("DOMContentLoaded",()=>{
    const link = document.getElementById("singin_password");
    const icon = document.getElementById("singin_eye") 
    
    function changeVisibility (){
        if(link.type=="password"){
            link.type="text";
            icon.textContent="visibility"
        }else{
            link.type="password";
            icon.textContent="visibility_off"
        }
    }

    icon.addEventListener("click",()=>{
        changeVisibility()
    })
})