
var maquinas=[];
var mecanicos=[];

mecanicos.push("Ricardo");
mecanicos.push("Pablo");
mecanicos.push("Gustavo");


maquinas.push(303);
maquinas.push(208);
maquinas.push(190);

function esVacia (arreglo)
/*
 * Tomo un arreglo con parametro de entrada
 *  Devuelve si el arreglo es vacio (true) o no (false)
 */
	
{ if (arreglo.length==0)
	 return true; 
else 
	return false;
	

}


function asignar()

{	var nroMaquina=maquinas.shift();
	var nombreMecanico=mecanicos.pop();
	document.write(nroMaquina+"-"+nombreMecanico);
	document.write("<br>");
	

}

while(!esVacia(maquinas) && !esVacia(mecanicos))
{
asignar();
}