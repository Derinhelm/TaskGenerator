async function getText() {
    const variant = document.getElementById('variant').value;
    const hw = document.getElementById('hw').value;
    const task = document.getElementById('task').value;
    const num = ((variant % 3) || 3);
    
    const response = await fetch('texts.txt');
    const text = await response.text();
    const lines = text.split('\n');
    
    for (let line of lines) {
        if (line.includes('Вариант ' + num + '. ДЗ ' + hw + '. Задача ' + task + '.')) {
            document.getElementById('result').innerHTML = line.replace(/\\n/g, '<br>');
            return;
        }
    }
    
    document.getElementById('result').textContent = 'Текст не найден';
}
