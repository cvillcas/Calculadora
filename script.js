
// Esta funcion agrega todos los numeros  seleccionados a  la pantalla
function agregar(valor){

    document.getElementById('pantalla').value += valor
}

// Borramos todos, los numeros de la pantalla

function borrar(){
    document.getElementById('pantalla').value  = ''

}


function calcular(){
    // eval agarra un string y calcula matematicamene como enteros. 
    
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval( valorPantalla)
    document.getElementById('pantalla').value = resultado;

}
























