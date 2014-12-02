
function Punto2D (x,y)
	{
	this.X = x;
	this.Y = y;

//document.write ("funcion Punto2D creado: Punto.X: " + this.X +" , Punto.Y: " + this.Y + "<br>");


	}


function proyeccionIsometrica (Punto3D)
	{
	// representacion isometrica
	// valores X e Y referecniados al punto origen coordenadas
	// 

	var punto2DIsoX = 0.866 * (Punto3D.X - Punto3D.Y);
	var punto2DIsoY = Punto3D.Z - 0.5 * (Punto3D.X + Punto3D.Y);

	var punto2DIso = new Punto2D (punto2DIsoX, punto2DIsoY);

//document.write ("funcion Punto2DIso creado: punto2DIsoX: " + punto2DIsoX +" , punto2DIsoY: " + punto2DIsoY + "<br>");
	
	return punto2DIso;

	}


function dibujaListaObjetos (listaObjetos, contexto)
	{ 
	for (var nObject = 0; nObject<listaObjetos.length; nObject++)
		{
		dibujaObjeto (listaObjetos[nObject], 1, contexto);
		}
	}

function dibujaObjeto (Objeto, escala, contexto, corrector)
	{ 
	var numAristas = Objeto.Arista.length;
/*
//document.write ("dibuja objeto: objeto arista length: "+numAristas+"<br>");
//var ObjetoEjesCoordenadas = Objeto;
//document.write ("dibuja objeto: ObjetoEjesCoordenadas vertices: <br>"); 
//for (var ver = 0; ver<4; ver++)
//{
//document.write (
"( " + ObjetoEjesCoordenadas.Vertice[ver][0] + ", "  + ObjetoEjesCoordenadas.Vertice[ver][1] + ", " + ObjetoEjesCoordenadas.Vertice[ver][2] + " ) <br>");
//}

//document.write ("dibuja objeto ObjetoEjesCoordenadas Aristas: <br>");
//for (var numArist = 0; numArist<3; numArist++)
//{
//document.write (
"( " + ObjetoEjesCoordenadas.Arista[numArist][0] + ", "  + ObjetoEjesCoordenadas.Arista[numArist][1] + ", " + ObjetoEjesCoordenadas.Arista[numArist][2] + " ) <br>");
//}
*/


	for (var nArista=0; nArista< numAristas; nArista++)
		{
		// var nVini = Objeto.Arista[nArista][0];
		// var nVfin = Objeto.Arista[nArista][1];
		
// en objetos importados el primer punto es 1 en lugar de 0
//
		var nVini = Objeto.Arista[nArista][0] - corrector;
		var nVfin = Objeto.Arista[nArista][1] - corrector;
		
		var colorArista='#cc0000';
		// if (Objeto.Arista[nArista].length = 3)
		//	{ colorArista = Objeto.Arista[nArista][2];}
		
		var P0_X = Objeto.Vertice[nVini][0];
		var P0_Y = Objeto.Vertice[nVini][1];
		var P0_Z = Objeto.Vertice[nVini][2];

		var P1_X = Objeto.Vertice[nVfin][0];
		var P1_Y = Objeto.Vertice[nVfin][1];
		var P1_Z = Objeto.Vertice[nVfin][2];
//document.write("Arista: " + nArista + ": "+ P0_X + "," + P0_Y + "," + P0_Z + " -- " +P1_X + "," + P1_Y + "," + P1_Z + "<br>"); 
		var P0 = new Punto3D(escala * P0_X, escala * P0_Y, escala * P0_Z);
		var P1 = new Punto3D(escala * P1_X, escala * P1_Y, escala * P1_Z);
		dibujaArista (P0, P1, colorArista, contexto);
		}
	}


	function dibujaArista (Punto0, Punto1, colorArista, contexto)
	{
	// calcular proyecciones de puntos3D a puntos 2D
	// 
	
	var proyP0 = proyeccionIsometrica (Punto0);
	var proyP1 = proyeccionIsometrica (Punto1);
	
	// origen coordenadss en panatalla
	// por defecto 200,200


	// eje z
			var OX=200, OY=200;
			contexto.strokeStyle = '#0000cc';
			contexto.beginPath();
			contexto.moveTo(OX,OY-10);
			contexto.lineTo(OX,OY-60);
			contexto.stroke();
	
	contexto.strokeStyle = colorArista;
	contexto.beginPath();
	contexto.moveTo(200 + proyP0.X,200 - proyP0.Y);
	contexto.lineTo(200 + proyP1.X,200 - proyP1.Y);
	contexto.stroke();
	}
//
// FUNCION dibujaLinea para probar paso de contexto entre funciones
// solo para pruebas
//
//
 
function dibujaLinea (P1X, P1Y, P2X, P2Y, colorLinea, contexto)
	{


	// eje z
			var OX=200, OY=200;
			contexto.strokeStyle = '#0000cc';
			contexto.beginPath();
			contexto.moveTo(OX,OY-10);
			contexto.lineTo(OX,OY-60);
			contexto.stroke();
	
	contexto.strokeStyle = colorLinea;
	contexto.beginPath();
	contexto.moveTo(200 + P1X,200 + P1Y);
	contexto.lineTo(200 + P2X,200 + P2Y);
	contexto.stroke();
	}

//document.write ("representacion2DISo CARGADA...<br>");
