import { Restaurante } from '../restaurantes/restaurante.model';
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'restauranteFilter',
    pure: false
})
export class RestauranteFilterPipe implements PipeTransform {

    transform(items: Restaurante[], filter: Restaurante) : Restaurante[] {

        if (!items || !filter) {
            return items;
          }
          // filter items array, items which match and return true will be kept, false will be filtered out
          return items.filter((item: Restaurante) => this.applyFilter(item, filter));
    }

    applyFilter(item: Restaurante, filter: Restaurante) : boolean {
        for (let field in filter) {
            if (filter[field]) {
              if (typeof filter[field] === 'string') {
                if (item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                  return false;
                }
              } else if (typeof filter[field] === 'number') {
                if (item[field] !== filter[field]) {
                  return false;
                }
              }
            }
          }
          return true;
    }
}