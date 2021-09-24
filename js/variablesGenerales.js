//const menu = `Escoge un producto:
//1.-Remera
//2.-Buzo
//3.-Campera
//4.-Pantalones
//5.-Zapatillas
//6.-Salir`;/

const SelectedQty = "Indicanos la cantidad que deseas";

let productos = [
    {id: 1, nombre: "Remera", precio: 2500, stock:15},
    {id: 2, nombre: "Buzo", precio: 3500, stock:20},
    {id: 3, nombre: "Campera", precio: 5000, stock:40},
    {id: 4, nombre: "Pantalon", precio: 4000, stock:25},
    {id: 5, nombre: "Zapatillas", precio: 7000, stock:10},   
];

//const remeraPrecio = 2500;
//const buzoPrecio = 3500;
//const camperaPrecio = 5000;
//const pantalonesPrecio = 4000;
//const zapatillasPrecio = 7000;

//let remeraStock = 15;
//let buzoStock = 20;
//let camperaStock = 40;
//let pantalonesStock = 25;
//let zapatillasStock = 10;

let cart = 0;

let resp = "S";
