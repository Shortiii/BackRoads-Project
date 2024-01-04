let toggleBtn = document.querySelector('.toggle-btn');
let mobileMenu = document.querySelector('.mobile-menu');

let open = false
function toggleMenu(){
    if (open == false){
        mobileMenu.style.top = "10vh";
        open = true;
    }
    else{
        mobileMenu.style.top = "-200vh";
        open = false;
    }
}
toggleBtn.addEventListener("click", toggleMenu)
