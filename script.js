async function getText() {
    const origin = document.getElementById('numberInput').value;
    const num = ((origin % 3) || 3);
    
    const response = await fetch('texts.txt');
    const text = await response.text();
    const lines = text.split('\n');
    
    for (let line of lines) {
        if (line.startsWith('Вариант ' + num + '.')) {
            document.getElementById('result').innerHTML = line.replace(/\n/g, '<br>');;
            return;
        }
    }
    
    document.getElementById('result').textContent = 'Текст не найден';
}
