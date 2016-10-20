import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-slider',
  templateUrl: './slider.component.html'
})
export class NgbdSlider {
  snippets = DEMO_SNIPPETS;
}
