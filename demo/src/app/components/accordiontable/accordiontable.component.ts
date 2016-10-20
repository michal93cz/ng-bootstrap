import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-accordiontable',
  templateUrl: './accordiontable.component.html'
})
export class NgbdAccordiontable {
  snippets = DEMO_SNIPPETS;
}
