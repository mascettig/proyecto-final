const isStock = (quantity,stock) =>{
    if(quantity > stock){
        alert:("No tenemos suficiente stock, el stock disponible es ${stock}");
        return false;
    }
    else return true;
}

/*const addioCart = (option, quantity) => {
    switch(option){
        case 1:
            if(isStock(quantity,remeraStock)){
                cart += (quantity * remeraPrecio);
                remeraStock -= quantity;
                alert( "remera agregada a la cuenta");
            }
            break;
        
        case 2:
            if(isStock(quantity,buzoStock)){
                cart+= (quantity * buzoPrecio);
                buzoStock -= quantity;
                alert ("Buzo agregado a la cuenta");
            }
            break;
            
        case 3:
            if(isStock(quantity, camperaStock)){
                cart += (quantity * camperaPrecio);
                camperaStock -= quantity;
                alert ("Campera agregada a la cuenta")
            }
            break

        case 4:
            if (isStock(quantity,pantalonesStock)){
                cart += (quantity * pantalonesStock);
                pantalonesStock -= quantity;
                alert ("Pantalones agregado a la cuenta");
            }    
            break
          
         case 5:
             if(isStock(quantity,zapatillasStock)){
                 cart += (quantity * zapatillasPrecio);
                 zapatillasStock -= quantity;
                 alert ("Zapatillas agregado a la cuenta");
             }   
             break

        default:
            alert ("Opcion no valida")     
    }
    return true;
}*/

const Carrito =(option, quantity) =>{
    const found = productos.find((productos)=>{productos.id === option});


    if(isStock(quantity,found.stock)){
        cart += (quantity * found.precio);
        productos[option-1].stock -=quantity;
        alert(`${found.name} fue agregado a la cuenta`);
    }
}
const showMenu = () =>{
    const menu ="Elija un producto: \n"
    productos.forEach((productos)=>{
        menu += productos.id + " " + productos.nombre + "\n";
    }); 
    menu += (productos.length + 1) + ".-Salir";
    let test = parseInt (prompt(menu));
    console.log(test);
    return test
};


const menu = `Escoge un producto:
1.-Remera
2.-Buzo
3.-Campera
4.-Pantalones
5.-Zapatillas
6.-Salir`;