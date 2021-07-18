// creamos un vector para el producto

//registrar combobox -> Select
//categoria: Entretenimiento, tecnologia, linea blanca
// var producto=[];

// function Registrar(nomproducto,preproducto,catproducto,canproducto){
//     var NuevoProducto={
//         nombre:nomproducto,
//         precio:preproducto,
//         categoria:catproducto,
//         cantidad:canproducto
//     };
//     registro.push(NuevoProducto);
// }
var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var cboCate=document.getElementById("cboCategoria");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");
var registro=[];

// Creamos un procedimiento para registrar

function Registrar(nombre,preciopro,cate,can){
    var NuevoRegistro={
        nombre:nombre,
        precio:preciopro,
        categoria:cate,
        cantidad:can

    };
    registro.push(NuevoRegistro);
}

//Creamos una funcion para obtener los valores del registro

function Mostrar(){
    return registro;
}

function Mostrartabla(){
        var listaregistro=Mostrar();

        //Selecciono el "tbody" de la tabla donde voy a guardar mis datos
        tbody=document.querySelector("#tabla1 tbody");
        tbody.innerHTML="";
        // Agregamos las columnas que se registren
        for(var i=0; i<listaregistro.length;i++){
        //declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloprecio=fila.insertCell(1);
        var titulocate=fila.insertCell(2);
        var titulocan=fila.insertCell(3);
        //agregamos valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloprecio.innerHTML=listaregistro[i].precio;
        titulocate.innerHTML=listaregistro[i].categoria;
        titulocan.innerHTML=listaregistro[i].cantidad;
        tbody.appendChild(fila);
        }
}

function ValidandoDatos(){
    if(txtNom.value=="" || txtNom.value==null){
    alert("Por favor ingrese sus nombres");
    }else if(txtPre.value=="" || txtPre.value==null){
    alert("Por favor ingrese el precio del producto");
    }else if(cboCate.value==0){
    alert("Por favor seleccione una categoria");
    }else if(txtCan.value=="" || txtCan.value==null){
    alert("Por favor seleccione la cantidad del producto");
    }else{
        var nom=txtNom.value;
        var pre=txtPre.value;
        var cate=cboCate.value;
        var can=txtCan.value;

        //Llamamos al procedimiento registrar
        Registrar(nom,pre,cate,can);
        Mostrartabla();

        alert("Se han registrado los datos");
    }
}
btnRegistrar.addEventListener("click",ValidandoDatos);

