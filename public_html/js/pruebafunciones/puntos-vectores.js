
function Punto3D(x,y,z)
	{
	this.X=x;
	this.Y=y;
	this.Z=z;

// document.write ("funcion Punto3D creado: Punto.X: " + this.X +" , Punto.Y: " + this.Y + " , Punto.Z: " + this.Z + "<br>");

this.distancia = function(Punto2)
	{
var vectorDistancia = new Vector (this, Punto2);
return vectorDistancia.MODULO;
	}

}

// funcion VECTOR
// Argumentos: (punto de origen,  punto final)

function Vector (P_Origen, P_Fin)
	{
	// Vector de formato (Vector.VX, Vector.VY, Vector.VZ)
	// VALORES COMPONENTES VX, VY, VZ
	// VALORES X,Y,Z SE USAN PARA VALORES COMPONENTES DE VECTOR UNITARIO
	this.VX = P_Fin.X - P_Origen.X;
	this.VY = P_Fin.Y - P_Origen.Y;
	this.VZ = P_Fin.Z - P_Origen.Z;

	// VALORES PUNTO ORIGEN DE VECTOR
	this.Origen = P_Origen;
	
	// VALOR MODULO DE VECTOR
	this.MODULO = Math.sqrt ((this.VX*this.VX)+(this.VY*this.VY)+(this.VZ*this.VZ));

	// vector unitario formato (Vector.X, vector.Y, Vector.Z)
	// VALORES DE VECTOR UNITARIO
	this.X = this.VX / this.MODULO;
	this.Y = this.VY / this.MODULO;
	this.Z = this.VZ / this.MODULO;
	
	// AÑADIR FUNCIONES:
	// 1- FUNCION PROYECCION PUNTO EN VECTOR
	// SUMA VECTORES
	// 2- FUNCION PRODUCTO ESCALAR
	// 3- FUNCION PRODUCTO VECTORIAL
	// 4- FUNCION ANGULO ENTRE DOS VECTORES
	
	this.suma = function(Vector2)
		{
		var P_Inicio = this.Origen;
		var P_Final = new Punto (this.VX + Vector2.VX ,this.VY + Vector2.VY , this.VZ + Vector2.VZ);
		var VectorSuma = new Vector(P_Inicio, P_Final);
		return VectorSuma;		
		}

	this.escribe = function ()
		{
		document.write("Origen: (" + this.Origen.X + ", " + this.Origen.Y + ", " + this.Origen.Z + ") <br>");
		document.write("(VX, VY, VZ) : (" + this.VX + ", " + this.VY + ", " + this.VZ + ") <br>");
		document.write("(X, Y, Z) : (" + this.X + ", " + this.Y + ", " + this.Z + ") <br>");
		document.write("Modulo : " + this.MODULO + " <br>");
		}

	}

function SistemaCoordenadas(PtoOrigen, VectorX, VectorY, VectorZ)
{
this.Origen = PtoOrigen;
//
// VectorX, VectorY y VectorZ son los vectores pasados como argumento
// no se revisa si son unitarios
// como mejora añadir convertir a unitarios antes de pasar al sistema de coordenadas
//
this.VectorX = VectorX;
this.VectorY = VectorY;
this.VectorZ = VectorZ;

}





function productoEscalar (Constante, Vector2)
{
// producto escalar
// VECTOR DE COMPONENTE PRODUCTO CONSTANTE * VECTOR DE CALCULO
// origen del vector resultado = origen de vector de cálculo
//
var P_Origen = new Punto(0,0,0);
var P_Fin = new Punto(Constante * Vector2.VX, Constante * Vector2.VY,Constante * Vector2.VZ);
var VectorResultado = new Vector(P_Origen, P_Fin);
VectorResultado.Origen = Vector2.Origen;
return VectorResultado;
}


function productoPunto (Vector1, Vector2)
{
var producto = (Vector1.VX * Vector2.VX) + (Vector1.VY * Vector2.VY) + (Vector1.VZ * Vector2.VZ);
return producto;

}


function proyeccion (Punto, Vector2)
{
var vectorPunto = new Vector (Vector2.Origen, Punto);

proyeccionVector = productoEscalar (productoPunto(Vector2, vectorPunto)/(Vector2.MODULO * Vector2.MODULO),Vector2);
return proyeccionVector;
}

