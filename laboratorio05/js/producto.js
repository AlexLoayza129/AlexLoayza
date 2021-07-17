// creamos un vector para el producto

//registrar combobox -> Select
//categoria: Entretenimiento, tecnologia, linea blanca
var producto=[];

function Registrar(nomproducto,preproducto,catproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    registro.push(NuevoProducto);
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
}

function Mostrar(){
    return producto;
    ValidandoDatos(); 
}