let registrar = document.getElementById("registroCuenta") // <-- esto llama al form que cree

registrar.addEventListener('submit', (event)=>{ 
    event.preventDefault() // <--- esto evita que la pagina se recarge por si sola xd no olvidar
    const email = document.querySelector('#exampleInputEmail1').value
    const contrasenia = document.querySelector('#exampleInputPassword1').value

    const users = JSON.parse(localStorage.getItem('users')) || []    // <--- obtiene los datos de la llave 'users'
    const userRegistered = users.find(user => user.email === email) // <---- usa un .find para buscar el users 
    if (userRegistered) {  // <-- validacion para evitar que se repitan usuarios
        return alert('Usuario ya registrado')
        
    }

    users.push({email: email, contrasenia: contrasenia  }) // <- esto los "empuja" 
    localStorage.setItem('users', JSON.stringify(users)) // <- esto los guarda
    alert('registro exitoso')

    window.location.href = 'login.html' // <-- para redirigir a la siguiente pagina
})