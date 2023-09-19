import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import IFutebol from './interfaces/IFutebol';
import crypto from 'node:crypto';
import normas from './normas/normasDeUso';

export default class QuadraFutebol extends Quadra {
  private regras: IFutebol = normas.futebol;
  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    return {
      protocolo: crypto.randomBytes(16).toString('hex'),
      data,
      regras: this.regras as unknown as IFutebol,
    };
  }
}
