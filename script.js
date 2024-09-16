const button = document.getElementById('rainbowButton');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colorIndex = 0;

button.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[colorIndex];
    
    const audio = new Audio('click.mp3');
    audio.play();
});