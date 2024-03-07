/**
 * Requesitos? modif test 2024 v3
 *  - verificar cuales son los condimentos que tenemos
 *      - puede ser con pollo o carne
 *      - si no hay condimentos entonces podemos usar un cubo de caldo
 *  - verificar si es posible o no preparar la sopa
 * 
 * info?
 *  - ingrendientes son:
 *      - Necesarios: verdura y agua
 *      - Opcionales: pollo, carne, condimentos y cubo de caldo
 * 
 */

/* let tenemosVerdura = confirm("Hay verdura disponible?");
let tenemosAgua = confirm("Hay agua disponible?");

let tenemosPollo = confirm("Hay pollo disponible?");
let tenemosCarne = confirm("Hay carne disponible?");

let tenemosCondimentos = confirm("Hay condimentos disponible?");
let tenemosCuboCaldo = confirm("Hay cubo de calo disponible?"); */
const inputIngrediente1 = document.querySelector("#conf-ingrediente-1");
const inputIngrediente2 = document.querySelector("#conf-ingrediente-2");
const inputIngrediente3 = document.querySelector("#conf-ingrediente-3");
const inputIngrediente4 = document.querySelector("#conf-ingrediente-4");
const inputIngrediente5 = document.querySelector("#conf-ingrediente-5");
const inputIngrediente6 = document.querySelector("#conf-ingrediente-6");
const pResultado = document.querySelector("#resultado");

pResultado.style.color = "violet";


function confirmacionIngredientes(){
    let ingrediente1 = inputIngrediente1.value;
    let ingrediente2 = inputIngrediente2.value;
    let ingrediente3 = inputIngrediente3.value;
    let ingrediente4 = inputIngrediente4.value;
    let ingrediente5 = inputIngrediente5.value;
    let ingrediente6 = inputIngrediente6.value;
    
    /* console.log(ingrediente1);
    console.log(ingrediente2);
    console.log(ingrediente3);
    console.log(ingrediente4);
    console.log(ingrediente5);
    console.log(ingrediente6); */
    
    if( ((ingrediente1 == "Y" && ingrediente2 == "Y") && (ingrediente3 == "Y" || ingrediente4 == "Y")) && (ingrediente5 == "Y" || ingrediente6 == "Y")){
        /* document.write("Preparando sopa!"); */
        pResultado.style.color = "green";
        pResultado.innerHTML = "Preparando sopa!";
    }else{
        /* document.write("No hay ingredientes necesarios para preparar la sopa!"); */
        pResultado.style.color = "red";
        pResultado.innerHTML = "No hay ingredientes necesarios para preparar la sopa! o ingreso invalido!";
    }
}

