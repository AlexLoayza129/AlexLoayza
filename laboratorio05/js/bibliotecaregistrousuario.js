//Creamos variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
//Creamos un procedimiento para limpiar
function Limpiar(){
    txtCor.value=="";
    txtCon.value=="";
    txtCor.focus();
}

//Creamos un procedimiento para registrar 
function Registrar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value==""|| txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        //Capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        //Llamando el codigo de Firebase para Registrar
        auth.createUserWithEmailAndPassword(cor, con)
        .then((userCredential) => {
        alert("Se Registró el Usuario");
        Limpiar();
        })
        .catch((error) => {
        alert("No se registró el usuario");
        Limpiar();
        });
    }
}

//Asignamos el procedimiento al boton
btnRegistrar.addEventListener("click", Registrar);