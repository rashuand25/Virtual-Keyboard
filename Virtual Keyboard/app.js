const buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('.text-area');

const delete_btn = document.querySelector('.delete')
const enter_btn = document.querySelector('.enter-btn')
const shift_btn = document.querySelector('.shift-btn')
const space_btn = document.querySelector('.space')

let chars = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText;
        chars = textarea.value.split('')
    });
});

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')

})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})

enter_btn.addEventListener('click', () =>{
   textarea.value += '\n'
})