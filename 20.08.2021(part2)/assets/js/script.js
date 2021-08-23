 function showMenu(){
    let el = document.querySelector('.mainMenu');
    let show = document.querySelector('.show');
    let close  = document.querySelector('.close');
    el.classList.toggle('showMenu');
    if(el.classList.contains('showMenu')) {
        close.classList.toggle('showMenu');
        show.classList.toggle('hide');
    } else {
        show.classList.toggle('hide');
        close.classList.toggle('showMenu');
    }
    
 }