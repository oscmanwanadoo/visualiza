var vertice = new Array();

vertice = [
[3.25000 , -2.48000 , 14.0000] , 
[3.25000 , -2.48000 , 9.01000] , 
[3.25000 , 2.48000 , 9.01000] , 
[3.25000 , 2.48000 , 14.0000] , 
[0.773000 , -2.48000 , 14.0000] , 
[0.773000 , -2.48000 , 9.01000] , 
[0.773000 , 2.48000 , 14.0000] , 
[0.773000 , 2.48000 , 9.01000] , 
[3.47000 , -1.29000 , 17.4000] , 
[3.47000 , -1.29000 , 15.0000] , 
[3.47000 , 1.19000 , 15.0000] , 
[3.47000 , 1.19000 , 17.4000] , 
[0.601000 , -1.29000 , 17.4000] , 
[0.601000 , -1.29000 , 15.0000] , 
[0.601000 , 1.19000 , 17.4000] , 
[0.601000 , 1.19000 , 15.0000] , 
[3.15000 , -2.47000 , 8.01000] , 
[3.15000 , -2.47000 , 3.05000] , 
[3.15000 , -0.486000 , 3.05000] , 
[3.15000 , -0.486000 , 8.01000] , 
[0.892000 , -2.47000 , 8.01000] , 
[0.892000 , -2.47000 , 3.05000] , 
[0.892000 , -0.486000 , 8.01000] , 
[0.892000 , -0.486000 , 3.05000] , 
[3.23000 , -3.96000 , 14.0000] , 
[3.23000 , -3.96000 , 9.01000] , 
[3.23000 , -2.48000 , 9.01000] , 
[3.23000 , -2.48000 , 14.0000] , 
[0.747000 , -3.96000 , 14.0000] , 
[0.747000 , -3.96000 , 9.01000] , 
[0.747000 , -2.48000 , 14.0000] , 
[0.747000 , -2.48000 , 9.01000] , 
[3.27000 , 2.46000 , 14.0000] , 
[3.27000 , 2.46000 , 9.01000] , 
[3.27000 , 3.95000 , 9.01000] , 
[3.27000 , 3.95000 , 14.0000] , 
[0.795000 , 2.46000 , 14.0000] , 
[0.795000 , 2.46000 , 9.01000] , 
[0.795000 , 3.95000 , 14.0000] , 
[0.795000 , 3.95000 , 9.01000] , 
[2.49000 , -0.498000 , 15.0000] , 
[2.49000 , -0.498000 , 14.0000] , 
[2.49000 , 0.493000 , 14.0000] , 
[2.49000 , 0.493000 , 15.0000] , 
[1.50000 , -0.498000 , 15.0000] , 
[1.50000 , -0.498000 , 14.0000] , 
[1.50000 , 0.493000 , 15.0000] , 
[1.50000 , 0.493000 , 14.0000] , 
[3.25000 , -2.50000 , 9.01000] , 
[3.25000 , -2.50000 , 8.01000] , 
[3.25000 , 2.45000 , 8.01000] , 
[3.25000 , 2.45000 , 9.01000] , 
[0.771000 , -2.50000 , 9.01000] , 
[0.771000 , -2.50000 , 8.01000] , 
[0.771000 , 2.45000 , 9.01000] , 
[0.771000 , 2.45000 , 8.01000] , 
[3.27000 , 0.465000 , 8.01000] , 
[3.27000 , 0.465000 , 3.05000] , 
[3.27000 , 2.45000 , 3.05000] , 
[3.27000 , 2.45000 , 8.01000] , 
[0.795000 , 0.465000 , 8.01000] , 
[0.795000 , 0.465000 , 3.05000] , 
[0.795000 , 2.45000 , 8.01000] , 
[0.795000 , 2.45000 , 3.05000]];
 
var arista = new Array();
arista = [
[1 , 2], [2 , 3], [3 , 4], [4 , 1], 
[5 , 6], [6 , 2], [2 , 1], [1 , 5], 
[7 , 8], [8 , 6], [6 , 5], [5 , 7], 
[4 , 3], [3 , 8], [8 , 7], [7 , 4], 
[7 , 5], [5 , 1], [1 , 4], [4 , 7], 
[2 , 6], [6 , 8], [8 , 3], [3 , 2], 
[9 , 10], [10 , 11], [11 , 12], [12 , 9], 
[13 , 14], [14 , 10], [10 , 9], [9 , 13], 
[15 , 16], [16 , 14], [14 , 13], [13 , 15], 
[12 , 11], [11 , 16], [16 , 15], [15 , 12], 
[15 , 13], [13 , 9], [9 , 12], [12 , 15], 
[10 , 14], [14 , 16], [16 , 11], [11 , 10], 
[17 , 18], [18 , 19], [19 , 20], [20 , 17], 
[21 , 22], [22 , 18], [18 , 17], [17 , 21], 
[23 , 24], [24 , 22], [22 , 21], [21 , 23], 
[20 , 19], [19 , 24], [24 , 23], [23 , 20], 
[23 , 21], [21 , 17], [17 , 20], [20 , 23], 
[18 , 22], [22 , 24], [24 , 19], [19 , 18], 
[25 , 26], [26 , 27], [27 , 28], [28 , 25], 
[29 , 30], [30 , 26], [26 , 25], [25 , 29], 
[31 , 32], [32 , 30], [30 , 29], [29 , 31], 
[28 , 27], [27 , 32], [32 , 31], [31 , 28], 
[31 , 29], [29 , 25], [25 , 28], [28 , 31], 
[26 , 30], [30 , 32], [32 , 27], [27 , 26], 
[33 , 34], [34 , 35], [35 , 36], [36 , 33], 
[37 , 38], [38 , 34], [34 , 33], [33 , 37], 
[39 , 40], [40 , 38], [38 , 37], [37 , 39], 
[36 , 35], [35 , 40], [40 , 39], [39 , 36], 
[39 , 37], [37 , 33], [33 , 36], [36 , 39], 
[34 , 38], [38 , 40], [40 , 35], [35 , 34], 
[41 , 42], [42 , 43], [43 , 44], [44 , 41], 
[45 , 46], [46 , 42], [42 , 41], [41 , 45], 
[47 , 48], [48 , 46], [46 , 45], [45 , 47], 
[44 , 43], [43 , 48], [48 , 47], [47 , 44], 
[47 , 45], [45 , 41], [41 , 44], [44 , 47], 
[42 , 46], [46 , 48], [48 , 43], [43 , 42], 
[49 , 50], [50 , 51], [51 , 52], [52 , 49], 
[53 , 54], [54 , 50], [50 , 49], [49 , 53], 
[55 , 56], [56 , 54], [54 , 53], [53 , 55], 
[52 , 51], [51 , 56], [56 , 55], [55 , 52], 
[55 , 53], [53 , 49], [49 , 52], [52 , 55], 
[50 , 54], [54 , 56], [56 , 51], [51 , 50], 
[57 , 58], [58 , 59], [59 , 60], [60 , 57], 
[61 , 62], [62 , 58], [58 , 57], [57 , 61], 
[63 , 64], [64 , 62], [62 , 61], [61 , 63], 
[60 , 59], [59 , 64], [64 , 63], [63 , 60], 
[63 , 61], [61 , 57], [57 , 60], [60 , 63], 
[58 , 62], [62 , 64], [64 , 59], [59 , 58]];

var ObjetoFace = new objeto3D(vertice, arista); 