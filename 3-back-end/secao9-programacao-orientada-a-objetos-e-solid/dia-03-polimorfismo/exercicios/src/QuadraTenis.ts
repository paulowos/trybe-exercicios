import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import crypto from 'node:crypto';
import normas from './normas/normasDeUso';
import ITenis from './interfaces/ITenis';

export default class QuadraTenis extends Quadra {
  private regras: ITenis = normas.tenis;
  reservar<ITenis>(data: Date): IAgenda<ITenis> {
    return {
      protocolo: crypto.randomBytes(16).toString('hex'),
      data,
      regras: this.regras as unknown as ITenis,
    };
  }
}
