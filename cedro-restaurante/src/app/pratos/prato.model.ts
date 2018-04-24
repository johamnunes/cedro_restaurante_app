import { Base } from './../base.model';
import { Restaurante } from '../restaurantes/restaurante.model';

export interface Prato extends Base {
    restauranteId: string,
    restaurante: Restaurante,
    descricao: string,
    valor: number
}