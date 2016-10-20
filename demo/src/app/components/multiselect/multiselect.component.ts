import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-multiselect',
  templateUrl: './multiselect.component.html'
})
export class NgbdMultiselect {
  snippets = DEMO_SNIPPETS;
}
