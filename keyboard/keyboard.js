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

    keyDown.classList.add('active')

})

window.addEventListener('keyup', function (e) {
    let keyUp = document.getElementById(`${e.code}`)

    keyUp.classList.remove('active')
    keyUp.classList.add('remove')
    setTimeout(() => {
        keyUp.classList.remove('remove')
    }, 200)
})