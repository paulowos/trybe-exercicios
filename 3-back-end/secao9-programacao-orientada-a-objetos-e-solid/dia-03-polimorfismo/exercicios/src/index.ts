import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const clube = new Clube();

const quadraFutebol = new QuadraFutebol();
clube.adicionarQuadra(quadraFutebol);

const quadraTenis = new QuadraTenis();
clube.adicionarQuadra(quadraTenis);

const result = quadraFutebol.reservar(new Date());
console.log(result);

console.log(clube.buscarTodasQuadras());
