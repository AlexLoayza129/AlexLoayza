// Funcion para que cargue el documento abra la ventana emergente
function Cargar(url,titulo,ancho,alto){
    //Declaramos variables para capturar el ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    //Declaramos variables para ubicar la ventana emergente en el centro
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"width=" + ancho +", height="+ alto+ ", left="+x+",top="+y+",scrollbars=NO, locationbar=no, rezisable=no");
    window.open("pagina4.html","UnNombre","menubar=no, width=250, height=200, resizable=no, scrollbars=no, toolbar=no, locationbar=no, tittlebar=no, status=yes");

}

window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);