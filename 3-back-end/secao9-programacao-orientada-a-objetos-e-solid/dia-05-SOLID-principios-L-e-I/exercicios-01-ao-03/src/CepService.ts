import FooCepAPI from './FooCepAPI';
import { IApi } from './Interfaces';

class CepService {
  private readonly cepApi: IApi;

  constructor(api: IApi) {
    this.cepApi = api;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
