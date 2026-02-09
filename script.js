async function getText() {
    const num = document.getElementById('numberInput').value;
    if (!num) return;
    
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
