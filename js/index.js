console.dir(document.body)
alert ("Bienvenido a tu onda")

do{
    showMenu();
    console.log(option);
    if (option === productos.length + 1) break;
    let qty = parseInt(prompt(selctedQty))

    Carrito(option, qty);

    respuesta = prompt("¿Desea agregar m as productos a la cuenta? S/N");

}while(resp ==="S");

if(cart > 0){
    alert("Su compra tiene un total de $${cart}");   
}

alert("gracias, vuelva pronto")


let boton = document.getElementById("boton");
boton.addEventListener ("click", respuesta);

function respuesta(){
    console.log("Respuesta de boton");
}

let miFormulario = document.getElementById("miFormulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDeFault();
    let miFormulario = e.target
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
    console.log(formulario.children[2].value);
    console.log(formulario.children[3].value);
    console.log(formulario.children[4].value);
    console.log(formulario.children[5].value);
    console.log(formulario.children[6].value);
}
const productos = [ { id: 1, nombre: "Zapatillas", precio: 12500},
{ id: 2, nombre:"Zapatillas claras", precio: 14500},
{ id: 3, nombre: "Zapatillas azules", precio: 12000 },
{ id: 4, nombre: "Zapatillas marrones", precio: 8500},
{ id: 5, nombre: "Pantalo", precio: 4500},
{ id: 6, nombre: "Pantalon jeans", precio: 5000},
{ id: 7, nombre: "Pantalon jeans clasico", precio: 4500},
{ id: 8, nombre: "Pantalon jeans mas claro", precio: 5500},
{ id: 9, nombre: "Remera", precio: 1500},
{ id: 10, nombre: "Remera de colores", precio: 2000},
{ id: 11, nombre: "Remera blanco y negro", precio: 2500},
{ id: 12, nombre: "Remera rayo", precio: 2000},
{ id: 13, nombre: "Buzo", precio: 3500},
{ id: 14, nombre: "Buzo de color gris", precio: 4000},
{ id: 15, nombre: "buzo de color rosa", precio: 4000},
{ id: 16, nombre: "Buzo de color celeste", precio: 4000},
{ id: 17, nombre: "Campera", precio: 7500},
{ id: 18, nombre: "Campera de jeans", precio: 8500},
{ id: 19, nombre: "Campera de Cuero", precio: 9000},
{ id: 20, nombre: "Campera Negra", precio: 6000}];

for (const producto of productos)(
  $("#app"). append(`<div><h3> ID: ${productos.id}</h3>
  <p> Pdoductos: ${productos.nombre}</p>
  <b> $ ${productos.precio} </b><div>`)

const URLGET =
  "https://jsonplacerholder.typicode.com/posts"
  $("body").prepend(`<button id="btn1">GET>/button>`);
  $("#btn1").click( () => {
    $.get(URLGET, function (respuesta, estado) {
      if(estado === "success"){
        let misDatos = respuestas;
        for (const dato of misDatos) {
          $("body").prepend (`<div>
                              <h3> $(dato.title)</h3>
                              <p>$(dato.body)</p>
                              </div>`);
        }
      }
    })
  });