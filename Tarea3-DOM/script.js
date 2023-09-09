const inputEmail = document.querySelector('#formInput-email')
const inputPassword = document.querySelector('#formInput-password')
const button = document.querySelector('#formButton')
//console.log(button);
//console.log(inputEmail);
//console.log(inputPassword);

button.addEventListener('click', (event) => {
    // console.log('check');
    //console.log(event.target.value);
    //console.log(inputEmail.value);
    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value

    const objetoInfoUsuario = {
        email: emailValue,
        password: passwordValue
    }

    console.log(objetoInfoUsuario);

})