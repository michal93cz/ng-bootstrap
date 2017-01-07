import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-accordiontable-basic',
  templateUrl: './basic.accordiontable.html'
})
export class AccordiontableBasicComponent {
  content = {
    columns: ['First column', 'Second column', 'Third column'],
    rows: [
      {
        cells: ['first cell', 'second cell', 'third cell'],
        infos: ['first info', 'second info', 'third info']
      },
      {
        cells: ['first cell', 'second cell', 'third cell'],
        infos: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
      },
      {
        cells: ['first cell', 'second cell', 'third cell'],
        infos: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
      },
      {
        cells: ['first cell', 'second cell', 'third cell'],
        infos: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
      },
      {
        cells: ['first cell', 'second cell', 'third cell'],
        infos: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
      },
    ]
  };
}
