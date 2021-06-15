addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ref=document.getElementById('formulario');
  ref.addEventListener('submit',enviarDatos,false);
}

function enviarDatos(e)
{
  e.preventDefault();
  enviarFormulario();
}

var conexion1;

function enviarFormulario(){
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange =  procesarEventos;
    var cateto1 = document.getElementById('catetoA').value;
    var cateto2 = document.getElementById('catetoB').value;
    conexion1.open('GET', 'pagina11.php?numero='+cateto1+'& numero2='+cateto2, true);
        conexion1.send();
}

function procesarEventos(){
    var resultados = document.getElementById("resultados");
    if(conexion1.readyState == 4)
    {
      resultados.innerHTML = conexion1.responseText;
    } 
    else
      if (conexion1.readyState==1 || conexion1.readyState==2 || conexion1.readyState==3)
      {
        resultados.innerHTML = 'Procesando...';
      }
}