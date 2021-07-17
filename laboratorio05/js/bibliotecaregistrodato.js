//Crear variables para los controles
var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistro=document.getElementById("btnRegistro");
var btnActualizar=document.getElementById("btnActualizar");



//Llamamos a la funcion registrar del firebase
// function writeUserData(nm, ap, co){
//     firebase.database().ref('registro/').set({
//     nombre: nm,
//     apellido: ap,
//     correo : co
//     });
// }

//Creamos un procedimiento para buscar datos
function Buscar(codigo){
    //Seleccionamos la tabla
    var tb=database.ref().child("registro");

    tb.once("value").then(function (snapshot){
        snapshot.forEach(function(data){
            //Declaramos una variable para el codigo de la tabla

            var key=data.key;

            //Evaluamos que key de la tabla sea igual al codigo buscado

            if(key==codigo){
                var cod=key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;

                //Enviamos los datos a los controles
                txtCod.value=cod;
                txtNom.value=nom;
                txtApe.value=ape;
                txtCor.value=cor;
            }
        })
    })
}



//Funciona para limpiar

function Limpiar(){
    txtNom.value="";
    txtCor.value="";
    txtApe.value="";
    txtNom.focus();
}

//Creamos un procedimiento para mostrar el registro

function Mostrar(){
    var i=0;

    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //Se selecciona la tabla
    var db=database.ref().child("registro");
    db.once("value").then(function(snapshot){
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                //Capturamos los valores
                var cod=data.key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;

                var fila=tbody.insertRow(i);
                //declaramos variables para los titulos
                var titulonombre=fila.insertCell(0);
                var tituloapellido=fila.insertCell(1);
                var titulocorreo=fila.insertCell(2);
                var tituloact=fila.insertCell(3);
                var titulocor=fila.insertCell(4);
                //agregamos valores
                titulonombre.innerHTML=nom;
                tituloapellido.innerHTML=ape;
                titulocorreo.innerHTML=cor;
                tituloact.innerHTML="<a href='#' onclick=Buscar('"+ cod +"')>Seleccionar</a>";
                titulocor.innerHTML="<a href='#'onclick=Eliminar('"+ cod +"')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            })
        }
    })

}


// Llamamos la funcion cuando cargue la pagina
document.onload=Mostrar;
//Procedimiento para registrar

function Registrar(){
    if(txtNom.value==""||txtNom.value==null){
        alert("Ingrese su nombre");
        txtNom.focus();
    }else if(txtApe.value==""||txtApe.value==null){
        alert("Ingrese su apellido");
        txtApe.focus();
    }else if(txtCor.value==""||txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else{
        //Creamos las variables para guardar los datos
        var cor=txtCor.value;
        var nom=txtNom.value;
        var ape=txtApe.value;

        //Creamos las variables para crear la tabla en la base de datos
        var db = firebase.database().ref('registro');
        //Asignamos los valores a la tabla que ha sido creada
        var registros = db.push();
        //Los valores se debaran 
        registros.set({
            'nombre':nom,
            'apellido':ape,
            'correo':cor
        });
        var path = registros.toString();

        alert("Se registró al usuario");
        Limpiar();
        Mostrar();
    }
}

//Creamos el procedimiento para actualizar
function Actualizar(){
    //capturando valores
    var cod=txtCod.value;
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //Seleccionamos la tabla que vamos a actualiza con su codigo correspondiente
    var db=database.ref("registro/"+ cod);

    //Le pasamos los datos que vamos a actualizar
    db.update(
        {
            nombre: nom,
            apellido: ape,
            correo: cor
        }
    );
    alert("Se actualizo el dato");
    Limpiar();
    //Luego llamamos al procedimiento mostrar
    Mostrar();
}

//Agregamos un procedimiento para eliminar datos de la base de datos
function Eliminar(codigo){
    //Preguntamos si desea eliminar el dato
    var result=confirm("¡¿Estas seguro que quieres eliminar el dato?!");

    //Evaluamos la respuesta
    if(result){
        //Pasamos el codigo que se va a eliminar
        var cod = codigo;
        //Seleccionamos la tabla en el codigo correspondiente para eliminarla
        var db = database.ref("registro/" + cod).remove();

        alert("Se eliminó el dato.");
        Limpiar();
        Mostrar();
    }
}
// Agregamos el evento para el boton de Registro
btnRegistro.addEventListener("click",Registrar);
btnActualizar.addEventListener("click",Actualizar);