async function getText() {
    const origin = document.getElementById('numberInput').value;
    const num = (origin % 5)
    if (num === 0) num = 5;
    num = num - 1;
    
    const response = await fetch('texts.txt');
    const text = await response.text();
    const lines = text.split('\n');
    
    for (let line of lines) {
        if (line.startsWith(num + '.')) {
            document.getElementById('result').textContent = line;
            return;
        }
    }
    
    document.getElementById('result').textContent = 'Текст не найден';
}
