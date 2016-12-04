import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-slider-basic',
  templateUrl: './basic.slider.html'
})
export class SliderBasicComponent {
  public items = [
      {
          label: '< A1',
          range: [10, 21]
      },
      {
          label: 'A1',
          range: [22, 29]
      },
      {
          label: 'A2',
          range: [30, 35]
      },
      {
          label: 'A2+',
          range: [36, 42]
      },
      {
          label: 'B1',
          range: [43, 50]
      },
      {
          label: 'B1+',
          range: [51, 58]
      },
      {
          label: 'B2',
          range: [59, 66]
      },
      {
          label: 'B2+',
          range: [67, 75]
      },
      {
          label: 'C1',
          range: [76, 84]
      },
      {
          label: 'C2',
          range: [85, 90]
      }
    ];

    public sliderValue = [10, 90];
}
