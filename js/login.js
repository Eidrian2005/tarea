const loginForm = document.querySelector('#iniciarSesion') //<--- lo mismo que en el login llama al formulario de inicio de sesion

loginForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    const email = document.querySelector('#exampleInputEmail1').value
    const contrasenia = document.querySelector('#exampleInputPassword1').value
    const users = JSON.parse(localStorage.getItem('users')) || []

    const validUser = users.find(users => users.email === email && users.contrasenia === contrasenia) //<-- validacion de datos 
    if (!validUser) { // <- si validUser es diferente a validUser no dejara iniciar sesion
        return alert('Usuario y/o contraseña incorrectos')
    }
    alert('bienvenido a Task administre')
    window.location.href = 'index.html' //reenvia a la pagina principal 
})