//declarando variables para los controles

var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");


//Creamos un procedimiento para mostrar

function MostrarRegistro(){
    
    // Declaramos las variables para guardar los datos del ingreso

    var listaregistro=Mostrar();

    //Selecciono el "tbody" de la tabla donde voy a guardar mis datos
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // Agregamos las columnas que se registren
    for(var i=0; i<listaregistro.length;i++){
        //declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloapellido=fila.insertCell(1);
        var titulocorreo=fila.insertCell(2);
        //agregamos valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloapellido.innerHTML=listaregistro[i].apellido;
        titulocorreo.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}

s

// creamos un procedimiento para registrar los datos

function RegistrarDatos(){
    //Capturando valores 
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;

    //Llamamos al procedimiento registrar
    Registrar(nom,ape,cor);
    MostrarRegistro();
}


//agregamos un evento al boton

// btnRegistrar.addEventListener("click",function(){
//     alert("Hola");
// });

// function Mensaje(){
//     alert("Hola")
// }

// btnRegistrar.addEventListener("click",Mensaje);

btnRegistrar.addEventListener("click",RegistrarDatos);