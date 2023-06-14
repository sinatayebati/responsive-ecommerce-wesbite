/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('','')

/*===== REMOVE MENU =====*/


/*===== SCROLL SECTIONS ACTIVE LINK =====*/


/*===== CHANGE COLOR HEADER =====*/ 
