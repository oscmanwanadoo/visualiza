/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function giraSistCoord(alfa, SistCoord)
{
    var sist = new SistemaCoordenadas();
    sist.Origen;
    sist.VectorX;

    var PXX = SistCoord.VectorX.X;
    var PXY = SistCoord.VectorX.Y;
    var PXZ = SistCoord.VectorX.Z;

    var PYX = SistCoord.VectorY.X;
    var PYY = SistCoord.VectorY.Y;
    var PYZ = SistCoord.VectorY.Z;

var GPXX = PXX * Math.cos (alfa);
var GPXY = PXY * Math.sin (alfa);


}

function giraVector(alfa, Vector) {
    var P0 = Vector.Origen;

    var P1X = Vector.X;
    var P1Y = Vector.Y;
    var P1Z = Vector.Z;

    var P1 = new Punto3D(P1X, P1Y, P1Z);
    var P1G = giraPunto(alfa, P1);

    var VG = new Vector(P0, P1G);
    return VG;

}

function giraPunto(alfa, Punto)
{
    var ang;
    if (Punto.Y === 0) {
        ang = Math.PI / 2;
    }
    else {
        ang = Math.atan(Punto.X / Punto.Y);
    }
    var dist = Math.sqrt((Punto.X * Punto.X) + (Punto.Y * Punto.Y));

    ang = ang + alfa;
    var X = dist * Math.sin(ang);
    var Y = dist * Math.cos(ang);
    var PuntoGirado = new Punto3D(X, Y, Punto.Z);
    return PuntoGirado;
}


function calcula_ejes_camara_Angulos(anguloAlfa, anguloBeta, dist)
{

    // eje X : P0 -> P2
    // eje Z : P0 -> (0,0,0)
    // eje Y : P0 -> P1

    var vector_ejes_X, vector_ejes_Y, vector_ejes_Z;
    var P0_X = dist * Math.sin(anguloAlfa) * Math.cos(anguloBeta);
    var P0_Y = dist * Math.cos(anguloAlfa) * Math.cos(anguloBeta);
    var P0_Z = dist * Math.sin(anguloBeta);

    // hZ : altura vector Z
    var P1X = P0_X - hZ * Math.sin(anguloAlfa) * Math.sin(anguloBeta);
    var P1Y = P0_Y - hZ * Math.cos(anguloAlfa) * Math.sin(anguloBeta);
    var P1Z = P0Z + hZ * Math.cos(anguloBeta);
    //

    var P2_X = P0_X + Math.cos(anguloAlfa);
    var P2_Y = P0_Y - Math.sin(anguloAlfa);
    var P2_Z = P0_Z;

    var P0 = new Punto(P0_X, P0_Y, P0_Z);
    var P1 = new Punto(P1_X, P1_Y, P1_Z);
    var P2 = new Punto(P2_X, P2_Y, P2_Z);

    var vector_ejes_Z = new Vector(P0, P0, new Punto(0, 0, 0));
    var vector_ejes_X = new Vector(P0, P0, P2);
    var vector_ejes_Y = new Vector(P0, P0, P1);

    // pendietne crear vector Z.
    // producto vectorial vectorX y vector Y.
    // var vector_ejes_Z = new ...

    var SistemaCoordenadasCamara = new SistemaCoordenadas(P0, vector_ejes_X, vector_ejes_Y, vector_ejes_Z);
    return SistemaCoordenadasCamara;

}