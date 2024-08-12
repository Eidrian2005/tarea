const botonPopver = document.getElementById('botonPop')
const popver = document.getElementById('popover')
const botonAgregar = document.querySelectorAll('.botonAgregar')
let carritoCompras = document.getElementById('carrito')
let listaCompra = []

botonPopver.addEventListener('click',function() {

    if (popver.style.display === 'none' || popver.style.display === '') {
        popver.style.display = 'block';
    } else {
        popver.style.display = 'none'
    }
})

botonAgregar.forEach(boton => {
    boton.addEventListener('click', function() {
        
            const nombreProducto = this.previousElementSibling.textContent;
            listaCompra.push(nombreProducto)
            actualizarCarrito()
        
    })
})

function actualizarCarrito() {
    carritoCompras.innerHTML = ''

    listaCompra.forEach(producto =>{

        
        const objeto = document.createElement('p')
        const botonElim = document.createElement('button')
        
        const icono = document.createElement('i')
        icono.classList.add('fa-solid', 'fa-trash')
        botonElim.appendChild(icono)

        objeto.textContent = producto
        botonElim.classList.add("btnEliminar")
        carritoCompras.appendChild(objeto)
        carritoCompras.appendChild(botonElim)

        botonElim.addEventListener("click", function(){

            console.log("hay que quitar");
            objeto.remove(this)
            botonElim.remove(this)
        })
    })

    
}

