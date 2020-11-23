const cursorDot = document.querySelector('.customAnimCursor');
let clientX;
let clientY;

//mouse coords
document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
    cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
});