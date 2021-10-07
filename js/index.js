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
