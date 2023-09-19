import Quadra from './Quadra';

export default class Clube {
  private _quadras: Quadra[] = [];

  public adicionarQuadra(quadra: Quadra) {
    this._quadras.push(quadra);
  }

  public buscarQuadra(index: number): Quadra {
    return this._quadras[index];
  }

  public buscarTodasQuadras(): Quadra[] {
    return this._quadras;
  }
}
