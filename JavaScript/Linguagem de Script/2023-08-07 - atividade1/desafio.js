// Constantes
const pa = 1013; //hpa
// 1hpa == 914,4cm == 9,14m

// Variaveis
var altura, distancia; // metros

// Entrada
var pressao = 925, // hpa
  aeronave = {
    // latitude: -6.782159,
    // longitude: -38.238874,
    latitude: -6.779977,
    longitude: -38.231087,
    // latitude: 23.510138,
    // longitude: 46.642472,
  },
  alvo = {
    // latitude: -6.787979,
    // longitude: -38.229785,
    latitude: -6.778336,
    longitude: -38.227257,
    // latitude: 23.508313,
    // longitude: 46.631391,
  };

// start code

altura = (pa - pressao) * 9.144; // m

/**
 * @param {number} coord
 */
function transform(coord) {
  let grau, min, seg;
  grau = parseInt(coord);
  min = Math.abs(coord - grau) * 60;
  seg = (min - parseInt(min)) * 60;

  return {
    grau: grau,
    min: parseInt(min),
    seg: parseFloat(seg.toFixed(2)),
  };
}
/**
 *
 * @param {{grau: number, min: number, seg: number}} coord
 * @param {{grau: number, min: number, seg: number}} coord2
 */
function sbtr(coord, coord2) {
  let g, m, s, dist;
  if (coord.seg < coord2.seg) {
    coord.seg += 60;
    coord.min--;
  }
  s = coord.seg - coord2.seg;
  if (coord.min < coord2.min) {
    coord.min += 60;
    coord.grau--;
  }
  m = coord.min - coord2.min;
  g = coord.grau - coord2.grau;

  dist = g * 60 + m + s / 60;

  return {
    string: `${g}° ${m}' ${s.toFixed(2)}"`,
    dist: dist * 1.852 * 1000,
  };
}

var cdnAero = {
  latitude: transform(aeronave.latitude),
  longitude: transform(aeronave.longitude),
};

var cdnAlvo = {
  latitude: transform(alvo.latitude),
  longitude: transform(alvo.longitude),
};

var Blat = sbtr(cdnAero.latitude, cdnAlvo.latitude).dist;
var Blon = sbtr(cdnAero.longitude, cdnAlvo.longitude).dist;

distancia = Math.sqrt(Blat ** 2 + Blon ** 2);

// end code

// Saida

console.log(`Altura (m): ${altura.toFixed(2)}`);
console.log(`Distância (m): ${distancia.toFixed(2)}`);
console.log(`Distância (km): ${(distancia / 1000).toFixed(2)}`);
