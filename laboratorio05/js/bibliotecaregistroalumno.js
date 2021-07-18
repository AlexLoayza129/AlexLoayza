//Declarando variables para los controles
var cboDistrito=document.getElementById("cboDistrito");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var txtFec=document.getElementById("txtFec");
var txtDir=document.getElementById("txtDir");
var txtTel=document.getElementById("txtTel");
var txtCel=document.getElementById("txtCel");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");
var genero=document.getElementsByClassName("sexo");

//Validar Datos
function Validar(){
    if(txtNom.value==""||txtNom.value==null){
        alert("AVISO:Ingrese sus nombres en el campo");
        txtNom.focus();
    }else if(txtApe.value==""||txtApe.value==null){
        alert("AVISO:Ingrese sus apellidos en el campo");
        txtApe.focus();
    }else if(txtDni.value==""||txtDni.value==null){
        alert("AVISO:Ingrese su dni en el campo");
        txtDni.focus();
    }else if(txtFec.value==""||txtFec.value==null){
        alert("AVISO:Ingrese su fecha de nacimiento");
        txtFec.focus();
    }else if(txtDir.value==""||txtDir.value==null){
        alert("AVISO:Ingrese su dirección de domicilio");
        txtDir.focus();
    }else if(cboDistrito.value==0){
        alert("AVISO:Ingrese su distrito.")
    }else if(txtTel.value==""||txtTel.value==null){
        alert("AVISO:Ingrese su teléfono");
        txtTel.focus();
    }else if(txtCel.value==""||txtCel.value==null){
        alert("AVISO:Ingrese su  número celular");
        txtCel.focus();
    }else if(txtCor.value==""||txtCor.value==null){
        alert("AVISO:Ingrese su correo en el campo");
        txtCor.focus();
    }else if(rbMas.chekked==false&&rbFem.chekked==false&&rbOtr.chekked==false){
        alert("AVISO:Ingrese su género.");
    }else if(chkEst.chekked==false){
        alert("AVISO:Ingrese su estado");
    }else{
        //Creamos las variables para guardar los datos
        var nom=txtNom.value;
        var ape=txtApe.value;
        var dni=txtDni.value;
        var fec=txtFec.value;
        var dir=txtDir.value;
        var tel=txtTel.value;
        var cel=txtCel.value;
        var cor=txtCor.value; 
        var gen=rbMas==true||rbFem==true||rbOtr==true;
        var est=chkEst.chekked==true;
        //Creamos las variables para crear la tabla en la base de datos
        var db = firebase.database().ref('registro');
        //Asignamos los valores a la tabla que ha sido creada
        var registros = db.push();
        //Los valores se debaran 
        registros.set({
            'nombre':nom,
            'apellido':ape,
            'dni':dni,
            'fecha nacimiento':fec,
            'direccion':dir,
            'telefono': tel,
            'celular':cel,
            'correo':cor,
            'genero':gen,
            'estado':est
        });
        var path = registros.toString();

        alert("Se registró al usuario");
        Limpiar();
        Mostrar();
    }
}
//Limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtDni.value="";
    txtFec.value="";
    txtDir.value="";
    txtTel.value="";
    txtCel.value="";
    txtCor.value="";
    rbMas.chekked=false;
    rbFem.chekked=false;
    rbOtr.chekked=false;
    chkEst.chekked=false;
}
//Mostrar
function Mostrar(){
    var i=0;

    tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //Se selecciona la tabla
    var db=database.ref().child("registro");
    db.once("value").then(function(snapshot){
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                //Capturamos los valores
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var dni=data.val().dni;
                var fec=data.val().fecha;
                var dir=data.val().direccion;
                var tel=data.val().telefono;
                var cel=data.val().celular;
                var cor=data.val().correo;
                var gen=data.val().género;
                var est=data.val().estado;

                var fila=tbody.insertRow(i);
                //declaramos variables para los titulos
                var titulonombre=fila.insertCell(0);
                var tituloapellido=fila.insertCell(1);
                var titulodni=fila.insertCell(2);
                var titulofec=fila.insertCell(3);
                var titulodistrito=fila.insertCell(4)
                var titulodir=fila.insertCell(5);
                var titulotel=fila.insertCell(6);
                var titulocel=fila.insertCell(7);
                var titulocor=fila.insertCell(8);
                var titulogen=fila.insertCell(9);
                var tituloest=fila.insertCell(10);
                //agregamos valores
                titulonombre.innerHTML=nom;
                tituloapellido.innerHTML=ape;
                titulodni.innerHTML=dni;
                titulofec.innerHTML=fec;
                titulodistrito.innerHTML=dis
                titulodir.innerHTML=dir;
                titulotel.innerHTML=tel;
                titulocel.innerHTML=cel;
                titulocor.innerHTML=cor;
                titulogen.innerHTML=gen;
                tituloest.innerHTML=est;
                tbody.appendChild(fila);
                i++;
            })
        }
    })

}
//Creamos un procedimiento para cargar el combo

function CargarDistrito(){
    var i=0;

    options=document.querySelector("#cboDistrito");
    options.innerHTML="";
    //Se selecciona la tabla
    var db=database.ref().child("distrito");
    db.once("value").then(function(snapshot){
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                //Capturamos los valores
                var cod=data.key;
                var nom=data.val().nombre;

                //Creamos un option
                var options=document.createElement("option");
                //Agregamos el nombre y el codigo al option

                options.text= nom;
                options.value=cod;
                //Agregamos lo options al combo
                cboDistrito.add(options);
                i++;
            })
        }
    })
}

//Llamamos al procedimiento cuando cargue la pagina.
window.onload=CargarDistrito;
btnRegistrar.addEventListener("click",Validar);