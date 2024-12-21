//Caixa
const caixa = document.querySelector('.caixa');
let clickCount = 0;
let doubleClickCount = 0;
let lastClickTime = 0;

//Clique no botão principal
caixa.addEventListener('click', () => {
    const currentTime = new Date().getTime();
    if (lastClickTime > 0) {
        const timeDiff = (currentTime - lastClickTime) / 1000;
        console.log(`Tempo entre cliques: ${timeDiff.toFixed(2)} segundos`);
        document.getElementById('timeBetweenClicks').textContent = `${timeDiff.toFixed(2)}s`;
    }
    lastClickTime = currentTime;
    
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});

//Duplo clique no botão principal
caixa.addEventListener('dblclick', () => {
    doubleClickCount++;
    document.getElementById('doubleClickCount').textContent = doubleClickCount;
    caixa.style.backgroundColor = '#ff0000';
    
    setTimeout(() => {
        caixa.style.backgroundColor = '#f0f0f0';
    }, 1000);
});

