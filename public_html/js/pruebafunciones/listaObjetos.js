function objeto3D (listavertices, listaaristas)
{
this.Vertice = listavertices;
this.Arista = listaaristas;
}

var vertice = new Array();
vertice = [
[0,0,0],
[1,0,0],
[1,1,0],
[0,1,0],
[0,0,1],
[1,0,1],
[1,1,1],
[0,1,1]];
var arista = new Array();
arista = [
[0,1],
[1,2],
[2,3],
[3,0],
[4,5],
[5,6],
[6,7],
[7,4],
[0,4],
[1,5],
[2,6],
[3,7]];

var ObjetoCubo = new objeto3D(vertice, arista);


vertice = [
[0,0,2],
[2,0,2],
[2,2,2],
[0,2,2],
[1,1,4]];

arista = [
[0,1],
[1,2],
[2,3],
[3,0],
[0,4],
[1,4],
[2,4],
[3,4]];

var ObjetoPiramide = new objeto3D(vertice, arista);

var vertice = new Array();
vertice = [
[0,0,0],
[2,0,0],
[2,2,0],
[0,2,0],
[0,0,2],
[1,0,2],
[1,1,2],
[0,1,2]];
var arista = new Array();
arista = [
[0,1],
[1,2],
[2,3],
[3,0],
[4,5],
[5,6],
[6,7],
[7,4],
[0,4],
[1,5],
[2,6],
[3,7]];

var ObjetoPrisma = new objeto3D(vertice, arista);


var vertice = new Array();

vertice = [
[0,0,0],
[1,0,0],
[0,1,0],
[0,0,1]];

/*
vertice[0] = [0,0,0];
vertice[1] = [1,0,0];
vertice[2] = [0,1,0];
vertice[3] = [0,0,1];
*/

var arista = new Array();
arista = [
[0,1,'#FF0000'],
[0,2,'#00FF00'],
[0,3,'#0000FF']];

var ObjetoEjesCoordenadas = new objeto3D(vertice, arista);

var ListaObjetos = [ObjetoEjesCoordenadas, ObjetoCubo, ObjetoPiramide, ObjetoPrisma];

document.write ("objetos cargados <br> listaobjetos.js cargado <br>");

/*
document.write ("ObjetoEjesCoordenadas vertices: <br>"); 
for (var ver = 0; ver<4; ver++)
{
document.write (
"( " + ObjetoEjesCoordenadas.Vertice[ver][0] + ", "  + ObjetoEjesCoordenadas.Vertice[ver][1] + ", " + ObjetoEjesCoordenadas.Vertice[ver][2] + " ) <br>");
}

document.write ("ObjetoEjesCoordenadas Aristas: <br>");
for (var numArist = 0; numArist<3; numArist++)
{
document.write (
"( " + ObjetoEjesCoordenadas.Arista[numArist][0] + ", "  + ObjetoEjesCoordenadas.Arista[numArist][1] + ", " + ObjetoEjesCoordenadas.Arista[numArist][2] + " ) <br>");
}
*/

/*
// acceso a punto de objeto

objeto.listaVertices[n][p]; // vertice n coordenada p (x,y,x)
objeto.listaVertices [listaAristas[N][P]][W] // vertice P (0 ó 1) de arista N coordenada W (x,y ó z)
*/
