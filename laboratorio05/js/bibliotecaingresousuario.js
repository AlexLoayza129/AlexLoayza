//Declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");

//Creamos un procedimiento para ingresar 
function Ingresar(){
    if(txtCor.value==""||txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if(txtCon.value==""||txtCon.value==null){
        alert("Ingrese su contraseña");
        txtCon.focus();
    }else{
        //Captando datos
        var cor=txtCor.value;
        var con=txtCon.value;
        //Llamando el codigo de Firebase para Registrar
        firebase.auth().signInWithEmailAndPassword(cor, con)
        .then((userCredential) => {
            alert("Bienvenidos al sistema");
            //nos dirigimos a la pagina 11
            window.location="pagina11.html";
        })
        .catch((error) => {
            alert("Usuario o clave incorrecta");
    });
    }
}


btnIngresar.addEventListener("click",Ingresar);