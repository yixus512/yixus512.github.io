function resizeSelected(){
    const SELECTED = document.querySelector('#selected');
    const HEADER = document.querySelector('header');
    let selected = document.getElementById('selected');
    const computedStyle = window.getComputedStyle(selected);
    

    let height = SELECTED.offsetHeight;
    let headerHeight = HEADER.offsetHeight;

    const DEFAULT_HEIGHT = height - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);

    let totalNeededPadding = headerHeight - height;
    let halfNeededPadding = totalNeededPadding / 2;
    let setPadding = halfNeededPadding + "px";

    /*
    console.log("info: ");
    console.log("height: " + height);
    console.log("headerHeight: " + headerHeight);
    console.log("totalNeededPadding: " + totalNeededPadding);
    console.log("halfNeededPadding: " + halfNeededPadding);
    */

    if (totalNeededPadding == 0) { return; }

    setPadding = (((height - DEFAULT_HEIGHT) / 2) + halfNeededPadding) + "px";
    

    selected.style.paddingTop=setPadding;
    selected.style.paddingBottom=setPadding;

}

window.addEventListener("resize", resizeSelected);
window.addEventListener('DOMContentLoaded', resizeSelected);