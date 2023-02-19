const pass = document.querySelector('#password');
const passConfirm = document.querySelector('#confirmPassword');
const button = document.querySelectorAll('button');

function checkPass() {
    if (pass.value === passConfirm.value) {
        return true;
    } else {
        pass.classList.add('error');
        passConfirm.classList.add('error');
        return false;
    }
} 