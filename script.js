async function getText() {
    const variant = document.getElementById('variant').value;
    const hw = document.getElementById('hw').value;
    const task = document.getElementById('task').value;
    let num;
    if (hw === 1) {
        num = (variant % 3) || 3;
    } elif (hw === 2) {
        num = (variant % 6) || 6;
    } else {
        num = (variant % 36) || 36;
    }
    
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
