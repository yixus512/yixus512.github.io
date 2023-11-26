function resizeSelected(){
    const SELECTED = document.querySelector('#selected');
    const HEADER = document.querySelector('header');
    let selected = document.getElementById('selected');

    const DEFAULT_HEIGHT = 19;

    let height = SELECTED.offsetHeight;
    let headerHeight = HEADER.offsetHeight;

    let totalNeededPadding = headerHeight - height;
    let halfNeededPadding = totalNeededPadding / 2;

    console.log()
    console.log(height);
    console.log(headerHeight);
    console.log(totalNeededPadding);
    console.log(halfNeededPadding);
    
    

    let setPadding = halfNeededPadding + "px";

    selected.style.paddingTop=setPadding;
    selected.style.paddingBottom=setPadding;

}

window.addEventListener("resize", resizeSelected);
window.addEventListener('DOMContentLoaded', resizeSelected);