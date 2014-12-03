



// SistemaCoordLocal (typeof: SistemaCoordenadas) => sistema de coordenadas desplazado y girado
// PtoCoordLocal (typeof: Punto3D) => coordenadas locales del punto
function PtoCoordenadasGlobales (PtoCoordLocal, SistemaCoordLocal)
{
var SCL_PO = SistemaCoordLocal.Origen;
var VL_X = SistemaCoordLocal.VectorX;
var VL_Y = SistemaCoordLocal.VectorY;
var VL_Z = SistemaCoordLocal.VectorZ;

var G_X = SCL_PO.X + (VL_X.X * PtoCoordLocal.X) + (VL_Y.X * PtoCoordLocal.Y) + (VL_Z.X * PtoCoordLocal.Z) ;
var G_Y = SCL_PO.Y + (VL_X.Y * PtoCoordLocal.X) + (VL_Y.Y * PtoCoordLocal.Y) + (VL_Z.Y * PtoCoordLocal.Z) ;
var G_Z = SCL_PO.Z + (VL_X.Z * PtoCoordLocal.X) + (VL_Y.Z * PtoCoordLocal.Y) + (VL_Z.Z * PtoCoordLocal.Z) ;

var PtoCoordGlob = new Punto3D (G_X, G_Y, GZ);
return PtoCoordGlob;

}



function dibujaObjetoDesplazado (Objeto, SistCoord, escala, contexto, corrector)
	{ 
	var numAristas = Objeto.Arista.length;



	for (var nArista=0; nArista< numAristas; nArista++)
		{
		// var nVini = Objeto.Arista[nArista][0];
		// var nVfin = Objeto.Arista[nArista][1];
		
		// en objetos importados el primer punto es 1 en lugar de 0
		// corrector = 0 si primer vertice = 0
		// corrector = 1 si primer vertice = 1

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

		var PL0 = new Punto3D(escala * P0_X, escala * P0_Y, escala * P0_Z);
		var PL1 = new Punto3D(escala * P1_X, escala * P1_Y, escala * P1_Z);
		
		var PG0 = PtoCoordenadasGlobales (PL0, SistCoord);
		var PG1 = PtoCoordenadasGlobales (PL1, SistCoord);

		dibujaArista (PG0, PG1, colorArista, contexto);
		}
	}

function rotacionPuntoVector (Vector1, Punto1, anguloAlfa)
{
// __   __   __   __
// OP = ON + NQ + QP
//
// vector v -> unitario de ON
// P - punto a girar
// N - proyeccion de P en v
// Q - proyeccion en NP de P'
// __    __                  __   _    _                     _   __ 
// OP' = OP . cos (alpha) + (OP . v) . v . (1-cos(delta)) + (v x OP) . sen (alpha)
//

// calculo: OP.cos(alpha)
var PtoO = new Punto3D (Vector1.Origen.X, Vector1.Origen.Y, Vector1.Origen.Z);

var PtoUnit = new Punto3D (	Vector1.Origen.X + Vector1.X, 
							Vector1.Origen.Y + Vector1.Y, 
							Vector1.Origen.Z + Vector1.Z);

var Vector1Unitario = new Vector(PtoO, PtoUnit);
document.write("<br> calculo vector UNITARIO <br>")
Vector1Unitario.escribe();

document.write("<br> calculo vector OP <br>")
var PtoP = new Punto3D (	Punto1.X, 
							Punto1.Y,
							Punto1.Z);

var VectorOP = new Vector (PtoO, PtoP);
VectorOP.escribe();
document.write("<br> calculo vector ON <br>")
// ************************************************
// ************************************************
 // REVISAR Y COMPROBAR //
// VECTORon NO SE FORMA CORRECTAMENTE
// COMPROBAR FORMULAS
//
// ************************************************
// ************************************************

document.write ("Math.cos(anguloAlfa): "+Math.cos(anguloAlfa)+"<br>");
var VectorON = productoK (Math.cos(anguloAlfa), VectorOP);

VectorON.escribe();


// calculo: (OP . v) . v . (1-cos(delta))

document.write("<br> calculo vector NQ <br>")
var A = productoEscalar (VectorOP, Vector1Unitario);
//
// anguloZeta - revisar en caso de que A = 0;
//
var COSanguloZeta = A / (VectorOP.MODULO * Vector1Unitario.MODULO);
var B = 1 - COSanguloZeta;
//
//
//prueba con cos anguloALfa en lugar de Zeta
//
var B = 1 - Math.cos(anguloAlfa);

var VectorNQ = productoK ( (A*B), Vector1Unitario);

var VectorProducto = productoVectorial (Vector1Unitario, VectorOP);
var VectorQP = productoK (Math.sin(anguloAlfa), VectorProducto);

var VectorR1 = sumaVectores (VectorNQ, VectorQP);
var VectorResultado = sumaVectores (VectorON, VectorR1);

var PuntoGirado = new Punto3D (	VectorResultado.Origen.X + VectorResultado.VX,
									VectorResultado.Origen.Y + VectorResultado.VY,
									VectorResultado.Origen.Z + VectorResultado.VZ);

return PuntoGirado;

}




function rotacionSistemaCoordenadas (Vector1, SistCoord1, anguloAlfa)
{

var P0 = SistCoord1.Origen;

var P1 = new Punto3D (SistCoord1.Origen.X + SistCoord1.VectorX.X,
		SistCoord1.Origen.Y + SistCoord1.VectorX.Y,
		SistCoord1.Origen.Z + SistCoord1.VectorX.Z);

var P2 = new Punto3D (SistCoord1.Origen.Y + SistCoord1.VectorY.X,
		SistCoord1.Origen.Y + SistCoord1.VectorY.Y,
		SistCoord1.Origen.Z + SistCoord1.VectorY.Z);

var P3 = new Punto3D (SistCoord1.Origen.X + SistCoord1.VectorZ.X,
		SistCoord1.Origen.Y + SistCoord1.VectorZ.Y,
		SistCoord1.Origen.Z + SistCoord1.VectorZ.Z);

var P0R = rotacionPuntoVector (Vector1, P0, anguloAlfa);
var P1R = rotacionPuntoVector (Vector1, P1, anguloAlfa);
var P2R = rotacionPuntoVector (Vector1, P2, anguloAlfa);
var P3R = rotacionPuntoVector (Vector1, P3, anguloAlfa);

var V1R = new Vector(P0R,P1R);
var V2R = new Vector(P0R,P2R);
var V3R = new Vector(P0R,P3R);

var SCR = new SistemaCoordenadas(P0R, V1R, V2R, V3R);

return SCR;

}