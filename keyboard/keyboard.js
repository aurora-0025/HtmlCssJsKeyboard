new Audio('sounds/laptop_notebook_return_or_enter_key_press.mp3').load()
new Audio('sounds/laptop_notebook_delete_key_press.mp3').load()
new Audio('sounds/laptop_notebook_spacebar_press.mp3').load()
new Audio('sounds/laptop_notebook_key_press.mp3').load()


let keyboard =document.querySelector('.hidden')
let keysFrame =document.querySelector('.keys-frame')

window.addEventListener("load", async ()=>{
   await keyboard.classList.remove('hidden')
    let keys = [...document.querySelectorAll('.key')];
    keys.forEach((key) => {
        key.addEventListener('mousedown', (e) => {
            e.preventDefault()
            let pressedKey = e.target.id
            window.dispatchEvent(new KeyboardEvent('keydown', { 'code': pressedKey }));
            window.addEventListener('mouseup', () => {
                window.dispatchEvent(new KeyboardEvent('keyup', { 'code': pressedKey }));
                pressedKey="undefined"
                window.removeEventListener('mouseup', ()=> {return})
            })
        })
    })

    window.addEventListener('keydown', function (e) {
        let keyDown = document.getElementById(`${e.code}`)
        if(e.repeat) return;
        if(e.code == "Enter"){
            new Audio('sounds/laptop_notebook_return_or_enter_key_press.mp3').play()
        }
        else if(e.code == "Backspace"){
            new Audio('sounds/laptop_notebook_delete_key_press.mp3').play()
        }
        else if(e.code == "Space"){
            new Audio('sounds/laptop_notebook_spacebar_press.mp3').play()
        }
        else{
            new Audio('sounds/laptop_notebook_key_press.mp3').play()
        }
        if(keyDown==null||keyDown=="undefined"){
            return
        }
        keyDown.classList.add('active')

    })

    window.addEventListener('keyup', function (e) {
        let keyUp = document.getElementById(`${e.code}`)
        if(keyUp==null||keyUp=="undefined"){
            return
        }
        keyUp.classList.remove('active')
        keyUp.classList.add('remove')
        setTimeout(() => {
            keyUp.classList.remove('remove')
        }, 200)
    })

})
