/**
 * Requesitos?
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

let tenemosVerdura = confirm("Hay verdura disponible?");
let tenemosAgua = confirm("Hay agua disponible?");

let tenemosPollo = confirm("Hay pollo disponible?");
let tenemosCarne = confirm("Hay carne disponible?");

let tenemosCondimentos = confirm("Hay condimentos disponible?");
let tenemosCuboCaldo = confirm("Hay cubo de calo disponible?");


if( ((tenemosVerdura && tenemosAgua) && (tenemosPollo || tenemosCarne)) && (tenemosCondimentos || tenemosCuboCaldo)){
    document.write("Preparando sopa!");
}else{
    document.write("No hay ingredientes necesarios para preparar la sopa!");
}