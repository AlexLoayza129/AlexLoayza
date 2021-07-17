//Declarando variables para los controles
var cboDistrito=document.getElementById("cboDistrito");
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