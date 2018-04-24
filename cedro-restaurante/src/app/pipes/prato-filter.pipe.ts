import { Prato } from './../pratos/prato.model';
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'pratoFilter',
    pure: false
})
export class PratoFilterPipe implements PipeTransform {

    transform(items: Prato[], filter: Prato) : Prato[] {

        if (!items || !filter) {
            return items;
          }
          // filter items array, items which match and return true will be kept, false will be filtered out
          return items.filter((item: Prato) => this.applyFilter(item, filter));
    }

    applyFilter(item: Prato, filter: Prato) : boolean {
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