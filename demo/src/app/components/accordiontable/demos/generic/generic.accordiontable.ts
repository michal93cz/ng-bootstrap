import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-accordiontable-generic',
  templateUrl: './generic.accordiontable.html'
})
export class AccordiontableGenericComponent {
  content = {
    columns: ['First column', 'Second column', 'Third column'],
    rows: [
      {
        cells: ['fwfg', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['ef', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['wd', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['wefw', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      },
      {
        cells: ['wfwef', 'three', 'four'],
        infos: ['wwe', 'dfw', 'cos']
      }
    ]
  };
}
