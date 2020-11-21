const cursorDot = document.querySelector('.cursor');
let clientX;
let clientY;

//mouse coords
document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
    console.log(clientX);
    console.log(clientY);

    cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
});