const colorDiv = document.getElementById('color');
const btn = document.getElementById('btn');

const colors = [
    '#59CC83' , '#F1f5f8'
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDiv.textContent = randomColor;
    colorDiv.style.color = randomColor;
})