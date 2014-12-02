// SistemaCoordLocal (typeof: SistemaCoordenadas) => sistema de coordenadas desplazado y girado
// PtoCoordLocal (typeof: Punto3D) => coordenadas locales del punto
function PtoCoordenadasGlobales(PtoCoordLocal, SistemaCoordLocal)
{
    var SCL_PO = SistemaCoordLocal.Origen;
    var VL_X = SistemaCoordLocal.VectorX;
    var VL_Y = SistemaCoordLocal.VectorY;
    var VL_Z = SistemaCoordLocal.VectorZ;

    var G_X = SCL_PO.X + (VL_X.X * PtoCoordLocal.X) + (VL_Y.X * PtoCoordLocal.Y) + (VL_Z.X * PtoCoordLocal.Z);
    var G_Y = SCL_PO.Y + (VL_X.Y * PtoCoordLocal.X) + (VL_Y.Y * PtoCoordLocal.Y) + (VL_Z.Y * PtoCoordLocal.Z);
    var G_Z = SCL_PO.Z + (VL_X.Z * PtoCoordLocal.X) + (VL_Y.Z * PtoCoordLocal.Y) + (VL_Z.Z * PtoCoordLocal.Z);

    var PtoCoordGlob = new Punto3D(G_X, G_Y, G_Z);
    return PtoCoordGlob;

}



function dibujaObjetoDesplazado(Objeto, SistCoord, escala, contexto, corrector)
{
    var numAristas = Objeto.Arista.length;

    for (var nArista = 0; nArista < numAristas; nArista++)
    {
        // var nVini = Objeto.Arista[nArista][0];
        // var nVfin = Objeto.Arista[nArista][1];

        // en objetos importados el primer punto es 1 en lugar de 0
        // corrector = 0 si primer vertice = 0
        // corrector = 1 si primer vertice = 1

        var nVini = Objeto.Arista[nArista][0] - corrector;
        var nVfin = Objeto.Arista[nArista][1] - corrector;

        var colorArista = '#cc0000';

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

        var PG0 = PtoCoordenadasGlobales(PL0, SistCoord);
        var PG1 = PtoCoordenadasGlobales(PL1, SistCoord);

        dibujaArista(PG0, PG1, colorArista, contexto);
    }
}