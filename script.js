function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 10 + 10 + 'px';
    flower.style.width = size;
    flower.style.height = size;
    flower.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    document.body.appendChild(flower);
    setTimeout(() => { flower.remove(); }, 7000);
}
setInterval(createFlower, 400);