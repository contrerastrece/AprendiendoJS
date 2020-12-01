export{hamburgerMenu} ;

function hamburgerMenu(hamburger_btn,panel_menu,menu_link){
  document.addEventListener("click",e=>{
    if(e.target.matches(hamburger_btn) || e.target.matches(`${hamburger_btn} *`)){
        document.querySelector(panel_menu).classList.toggle("show");
        document.querySelector(menu_link).classList.toggle("open");
        document.querySelector(hamburger_btn).classList.toggle("open");
    }
    if(e.target.matches(menu_link)){
        document.querySelector(panel_menu).classList.remove("show");
        document.querySelector(menu_link).classList.remove("open");        
        document.querySelector(hamburger_btn).classList.remove("open");
    }
  });
}

//hace efecto del menu hamburger a X 
// const menuBtn = document.querySelector('.menu-btn');
// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle("open");  
// });
