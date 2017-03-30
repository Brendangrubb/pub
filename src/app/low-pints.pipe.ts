import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'lowPints',
  pure: false
})
export class LowPintsPipe implements PipeTransform {

  transform(input: Keg[], option: string): Keg[] {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (option === 'all' || input[i].pintsRemaining < 10) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
