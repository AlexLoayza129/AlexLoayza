    var txtNom=document.getElementById("txtNom");
    var txtApe=document.getElementById("txtApe");
    var txtCor=document.getElementById("txtCor");
    var txtNom=document.getElementById("txtNom");
    var txtApe=document.getElementById("txtApe");
    var rbMas=document.getElementById("rbMas");
    var rbFem=document.getElementById("rbFem");
    var rbOtr=document.getElementById("rbOtr");
    var chkEst=document.getElementById("chkEst");

function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+m+'</li>';
}
// function ValidarNombre(){
//     if(txtNom.value == "" || txtNom.value == null){
//             error.style.display='block';
//             error.innerHTML+='<li>Por favor ingrese su nombre</li>';
//     }else{
//         error.style.display ='none';
//     }
// }

// function ValidarApe(){
//     if(txtApe.value == "" || txtApe.value == null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor ingrese sus apellidos</li>';
//     }else{
//     error.style.display ='none';
//     }
// }

// function ValidarCorreo(){
//     if(txtCor.value == "" || txtCor.value == null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor ingrese sus Correo</li>';
//     }else{
//     error.style.display ='none';
//     }
// }

// function ValidarSexo(){
//     if(genero.value== "" || genero.value == null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor seleccione su sexo</li>';
//     }else{
//         error.style.display = 'none';
//     }
// }

// function ValidarEstado(){
//     if(chkEst.checked==false){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor seleccione el Estado</li>';
//     }else{
//         error.style.display = 'none';
//     }
// }

function Validar(){
    //reiniciamos el error para que se carge sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese sus nombres");
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false &&rbOtr.checked==false){
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor seleccione su estado");
        chkEst.focus();
    }else{
        error.style.display='none';
    }
}
