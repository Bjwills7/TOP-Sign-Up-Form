const pass = document.querySelector('#password');
const passConfirm = document.querySelector('#confirmPassword');
const button = document.querySelectorAll('button');

passConfirm.addEventListener('change', () => {resetValidity()});
pass.addEventListener('change', () => {resetValidity()});

function checkPass() {
    if (pass.value === passConfirm.value) {
        return true;
    } else {
        pass.classList.add('error');
        passConfirm.classList.add('error');
        pass.setCustomValidity('Passwords do not match');
        pass.reportValidity();
        return false;
    }
} 

function resetValidity() {
    pass.setCustomValidity('');
    pass.reportValidity();
}
