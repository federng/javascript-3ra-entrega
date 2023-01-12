/* 
// let valor1 = parseInt(prompt("ingresá un numero") );
// let valor2 = parseInt(prompt("ingresa otro numero") );

// alert("Bienvenid@ a heladeria H")

// let valor1 = prompt("ingresa tu nombre ")
// let valor2 = prompt("ingresa tu apellido ")


// function suma ( numero1, numero2){
     
//    numero1 = valor1
//    numero2 = valor2

//    if(numero1 <= numero2){
//     return numero1
//    }
    
//     return numero1 + numero2;

// }

// document.write(suma())

// let nombre = "Homero";
// let edad   = 39;
// let calle  = "Av. Siempreviva 742";
// // Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }

// console.log(persona1)
// document.write(nombre, "", edad, calle)

// function Producto(nombre, color, talle, stock) {
//     this.nombre = nombre;
//     this.color 	 = color;
//     this.talle = talle;
//     this.stock  = stock;
// }
// let producto1 = new Producto("Zapatilla Adidas", "Negra", 43, 3);
// let producto2 = new Producto("Licuadora Portatil", "Celeste", "", 21);
// let producto3 = new Producto("Televisor Samsung", "Blanco", "", 3);
// let producto4 = new Producto("Lente de sol", "Dorado/verde", "Small", 2);

// console.log(producto1, producto2, producto3, producto4);

// let cadena = "HOLA CODER";
// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
//     this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// // persona1.hablar();
// // persona2.hablar();
// // console.log(persona1.hablar(), persona1, persona2);

// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]);
// }


// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//     }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");

// console.log(persona1);

// class Producto {
//     constructor(nombre, precio, stock){
//         this.precio = precio
//         this.nombre = nombre
//         this.stock = stock
//     }
// }

// let producto1 = new Producto("linterna", "$20.000", 5)

// document.write(producto1.nombre, producto1.precio, producto1.stock)


// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");
// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();

class Libro{
    constructor(titulo, autor, age, genero ){
        
        this.titulo = titulo; 
        this.autor = autor;
        this.age = age;
        this.genero = genero;
    }

    infolibro(){
        return ` ${this.titulo} es un libro de ${this.autor} que pertenece al género ${this.genero} y fue escrito en el año ${this.age}  `;
    }
};

let libros = []

while(libros.length < 3){
    let titulo= prompt("Ingresá el titulo de un libro");
    let autor = prompt ("ingresa nombre del autor");
    let age = prompt("ingresá el año de lanzamiento");
    let genero= prompt("Ingresá el género del libro");
    // .toLowerCase()

    if (titulo != '' &&
        autor != '' &&
        !isNaN(age) &&
        age.length == 4 &&
        (genero == 'aventura' || genero == 'terror' || genero == 'fantasía' ));
         {
            libros.push(new Libro(titulo, autor, age, genero))
        };
}

const monstrarLibros = () => {
    console.log(libros);
}

const mostrarAutores = () => {
    
}

monstrarLibros() */

const stockProductos = [
    {
      id: 1,
      nombre: "Quilmes 1 L.",
      cantidad: 1,
      desc: "Cerveza lager argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor del lúpulo y el sabor del cereal. ",
      precio: 1200,
      img: "img/Quilmes.jpg",
    },
    {
      id: 2,
      nombre: "BRAHMA 1 L.",
      cantidad: 1,
      desc: "Cerveza rubia de rico sabor con cuerpo suave y refrescante. ",
      precio: 1500,
      img: "img/brahma.jpg",
    },
    {
      id: 3,
      nombre: "Corona",
      cantidad: 1,
      desc: "Corona es una cerveza premium, clásica y auténtica, reconocida mundialmente por su alta calidad, su sabor distintivo e imagen.",
      precio: 1570,
      img: "img/corona.png",
    },
    {
      id: 4,
      nombre: "Heineken",
      cantidad: 1,
      desc: "Cerveza rubia, que te invita a conectar con el momento presente, sin apuros, sin juicios, a tomarse un tiempo para disfrutar.",
      precio: 1000,
      img: "img/heineken.png",
    },
    {
      id: 5,
      nombre: "Salta",
      cantidad: 1,
      desc: "Una cerveza de cautivante sabor, para beber tranqui.",
      precio: 1200,
      img: "img/salta.png",
    },
    {
      id: 6,
      nombre: "Schneider",
      cantidad: 1,
      desc: "Suave sabor a malta. Color dorado claro y espuma blanca.",
      precio: 1200,
      img: "img/scheneider.jpg",
    },
    {
      id: 7,
      nombre: "Stella Artois",
      cantidad: 1,
      desc: "En su forma original, la cerveza tiene un 5,2 por ciento ABV",
      precio: 1400,
      img: "img/stella.jpg",
    },
    {
      id: 8,
      nombre: "Duff",
      cantidad: 1,
      desc: "La iconica cerveza que toma Homero Simpson",
      precio: 1200,
      img: "img/duff.png",
    },
    {
      id: 9,
      nombre: "Iguana",
      cantidad: 1,
      desc: "Aroma intermedio, Ibu de 5.5, un vasito tranqui es suficiente",
      precio: 1400,
      img: "img/iguana.png",
    },
    {
      id: 10,
      nombre: "Palermo",
      cantidad: 1,
      desc: "Solamente, si no queda otra alternativa",
      precio: 1200,
      img: "img/palermo.png",
    },
  ];
  let carrito = [];
  
  const contenedor = document.querySelector("#contenedor");
  const carritoContenedor = document.querySelector("#carritoContenedor");
  const vaciarCarrito = document.querySelector("#vaciarCarrito");
  const precioTotal = document.querySelector("#precioTotal");
  const activarFuncion = document.querySelector("#activarFuncion");
  const procesarCompra = document.querySelector("#procesarCompra");
  const totalProceso = document.querySelector("#totalProceso");
  const formulario = document.querySelector('#procesar-pago')
  
  if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
  });
  if(formulario){
    formulario.addEventListener('submit', enviarCompra)
  }
  
  
  if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
  }
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
      }
    });
  }
  
  stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `
      <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });
  
  const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id)
      carrito.push(item)
    }
    mostrarCarrito()
  
  };
  
  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
      modalBody.innerHTML = "";
      carrito.forEach((prod) => {
        const { id, nombre, precio, desc, img, cantidad } = prod;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${img}"/>
          </div>
          <div>
          <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
          </div>
        </div>
        
    
        `;
      });
    }
  
    if (carrito.length === 0) {
      console.log("Nada");
      modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
    } else {
      console.log("Algo");
    }
    carritoContenedor.textContent = carrito.length;
  
    if (precioTotal) {
      precioTotal.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      );
    }
  
    guardarStorage();
  };
  
  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
  }
  function procesarPedido() {
    carrito.forEach((prod) => {
      const listaCompra = document.querySelector("#lista-compra tbody");
      const { id, nombre, precio, img, cantidad } = prod;
      if (listaCompra) {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
        listaCompra.appendChild(row);
      }
    });
    totalProceso.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }
  
   function enviarCompra(e){
     e.preventDefault()
     const cliente = document.querySelector('#cliente').value
     const email = document.querySelector('#correo').value
  
     if(email === '' || cliente == ''){
       Swal.fire({
         title: "¡Debes completar tu email y nombre!",
         text: "Rellena el formulario",
         icon: "error",
         confirmButtonText: "Aceptar",
     })
   } else {
  
    const btn = document.getElementById('button');
  
  // document.getElementById('procesar-pago')
  //  .addEventListener('submit', function(event) {
  //    event.preventDefault();
  
     btn.value = 'Enviando...';
  
     const serviceID = 'default_service';
     const templateID = 'template_qxwi0jn';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Finalizar compra';
        alert('Correo enviado!');
      }, (err) => {
        btn.value = 'Finalizar compra';
        alert(JSON.stringify(err));
      });
      
     const spinner = document.querySelector('#spinner')
     spinner.classList.add('d-flex')
     spinner.classList.remove('d-none')
  
     setTimeout(() => {
       spinner.classList.remove('d-flex')
       spinner.classList.add('d-none')
       formulario.reset()
  
       const alertExito = document.createElement('p')
       alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
       alertExito.textContent = 'Compra realizada correctamente'
       formulario.appendChild(alertExito)
  
       setTimeout(() => {
         alertExito.remove()
       }, 3000)
  
  
     }, 3000)
   }
   localStorage.clear()
  
   }