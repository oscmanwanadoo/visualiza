function Punto3D(x, y, z)
{
    this.X = x;
    this.Y = y;
    this.Z = z;
    this.distancia = function (Punto2)
    {
        var vectorDistancia = new Vector(this, Punto2);
        return vectorDistancia.MODULO;
    };
}

// funcion VECTOR
// Argumentos: (punto de origen,  punto final)

function Vector(P_Origen, P_Fin)
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
    this.MODULO = Math.sqrt((this.VX * this.VX) + (this.VY * this.VY) + (this.VZ * this.VZ));

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

    this.suma = function (Vector2)
    {
        var P_Inicio = this.Origen;
        var P_Final = new Punto(this.VX + Vector2.VX, this.VY + Vector2.VY, this.VZ + Vector2.VZ);
        var VectorSuma = new Vector(P_Inicio, P_Final);
        return VectorSuma;
    };
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

 
function sumaVectores (V1, V2)
	{

	var PuntoOrigen = new Punto3D (V1.Origen.X, V1.Origen.Y, V1.Origen.Z);
	var PuntoFinal = new Punto3D (	V1.Origen.X + V1.VX + V2.VX, 
									V1.Origen.Y + V1.VY + V2.VY, 
									V1.Origen.Z + V1.VZ + V2.VZ);

	var VectorSuma = new Vector (PuntoOrigen, PuntoFinal);
	return VectorSuma; 
	}


function restaVectores (V1, V2)
	{
	var PuntoOrigen = new Punto3D (	V1.Origen.X, 
									V1.Origen.Y, 
									V1.Origen.Z);

	var PuntoFinal = new Punto3D (	V1.Origen.X + V1.VX - V2.VX, 
									V1.Origen.Y + V1.VY - V2.VY, 
									V1.Origen.Z + V1.VZ - V2.VZ);

	var VectorDiferencia = new Vector (PuntoOrigen, PuntoFinal);
	return VectorDiferencia; 
	}


function productoK (k, Vector1)
	{
	var PuntoOrigen = new Punto3D (	Vector1.Origen.X, 
									Vector1.Origen.Y, 
									Vector1.Origen.Z);

	var PuntoFinal = new Punto3D (	Vector1.Origen.X + (k * Vector1.VX), 
									Vector1.Origen.Y + (k * Vector1.VY), 
									Vector1.Origen.Z + (k * Vector1.VZ));

	var VectorProductoK = new Vector (PuntoOrigen, PuntoFinal);
	return VectorProductoK; 
	}


function productoEscalar (Vector1, Vector2)
	{
	var productoEs = (Vector1.VX * Vector2.VX) + (Vector1.VY * Vector2.VY) + (Vector1.VZ * Vector2.VZ);
	return productoEs;
	}


function productoVectorial (Vector1, Vector2)
	{
	var PtoOrigen = new Punto3D(Vector1.Origen.X, Vector1.Origen.Y, Vector1.Origen.Z);

	var PtoFinal = new Punto3D();

	PtoFinal.X = Vector1.Origen.X + (Vector1.VY * Vector2.VZ) - (Vector1.VZ * Vector2.VY);
	PtoFinal.Y = Vector1.Origen.Y - (Vector1.VX * Vector2.VZ) + (Vector1.VZ * Vector2.VX);
	PtoFinal.Z = Vector1.Origen.Z + (Vector1.VX * Vector2.VY) - (Vector1.VY * Vector2.VX);

	var productoVector = new Vector(PtoOrigen, PtoFinal);	
	return productoVector;
	}

//
// Proyeccion de Punto sobre vector
// mediante producto escalar
//

function proyeccion(Punto, Vector2)
{
    var vectorPunto = new Vector(Vector2.Origen, Punto);

    proyeccionVector = productoEscalar(productoPunto(Vector2, vectorPunto) / (Vector2.MODULO * Vector2.MODULO), Vector2);
    return proyeccionVector;
}

