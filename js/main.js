// El código va aquí -> 
let btnAgregar=document.getElementById("btnAgrega");
let btnClear=document.getElementById("btnClear");

let txtNombre=document.getElementsById("Name");
let txtNumber=document.getElementsById("Number");

let alertValidaciones=document.getElementsById("alertValidaciones");
let alertValidacionesTexto=document.getElementsById("alertValidacionesTexto");

function validarCantidad(){
    if (txtNumber.value.length==0) {
        return false;
    }//if length
    return true;
}//validarCantidad

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";
    if (txtNombre.value.length<3) {
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
    }//length<3
    if(! validarCantidad()){
        alertValidacionesTexto.innerHTML+="El <strong>Numero</strong> no es correcto";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
    }//!validarCantidad


})

btnClear.addEventListener("click", function(event){
    event.preventDefault();

    txtNombre.value="",
    txtNumber.value="",

})