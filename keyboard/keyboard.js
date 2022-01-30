let keys = [...document.querySelectorAll('.key')];
keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        e.preventDefault()
        window.dispatchEvent(new KeyboardEvent('keydown', { 'code': e.target.id }));
    })
    key.addEventListener('mouseup', (e) => {
        window.dispatchEvent(new KeyboardEvent('keyup', { 'code': e.target.id }));
    })
})

window.addEventListener('keydown', function (e) {
    let keyDown = document.getElementById(`${e.code}`)
    if(e.repeat) return;
    if(e.code == "Enter"){
        return new Audio('sounds/laptop_notebook_return_or_enter_key_press.mp3').play();
    }
    else if(e.code == "Backspace"){
        new Audio('sounds/laptop_notebook_delete_key_press.mp3').play();
    }
    else if(e.code == "Space"){
        new Audio('sounds/laptop_notebook_spacebar_press.mp3').play();
    }
    else{
        new Audio('sounds/laptop_notebook_key_press.mp3').play();
    }
    if(keyDown==null){
        return console.log('key pressed which is not in this keyboard');
    }
    keyDown.classList.add('active')

})

window.addEventListener('keyup', function (e) {
    let keyUp = document.getElementById(`${e.code}`)
    if(keyUp==null){
        return console.log('key up which is not in this keyboard');
    }
    keyUp.classList.remove('active')
    keyUp.classList.add('remove')
    setTimeout(() => {
        keyUp.classList.remove('remove')
    }, 200)
})
