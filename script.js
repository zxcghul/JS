
let text = prompt('Введите текст:');
let textSlice;

function main(stringg) {
    let txt, txtSlc;
    txt = stringg.trim()
    if (txt.length > 30) {
        txtSlc = txt.slice(0, 30) + '...';
        return txtSlc
    }
    else if (typeof txt !== 'string' || txt == '') {
        alert("Неверный тип");
    }
    else {
        return txt
    }
}

textSlice = main(text);
alert('Cокращение: ' + textSlice + '\n' + 'Длина: ' + textSlice.length)


