alert ("Bienvenido a tu onda")

do{
    showMenu();
    let option = showMenu();
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