const form = document.querySelector('form')
const password = document.querySelector('.password')
const confirmation = document.querySelector('.confirmation')
const error = document.querySelector('.error')

form.addEventListener('submit', (e) => {
    if (password.value != confirmation.value) {
        error.textContent = '* Passwords do not match'
        password.classList.add('invalid')
        confirmation.classList.add('invalid')
        e.preventDefault()
    }
})