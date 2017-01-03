import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-slider-not-connect',
  templateUrl: './not-connect.slider.html'
})
export class SliderNotConnectComponent {
  public items = [
      {
          label: '1 Dozen',
          range: [0, 11]
      },
      {
          label: '2 Dozen',
          range: [12, 23]
      },
      {
          label: '3 Dozen',
          range: [24, 35]
      },
      {
          label: '4 Dozen',
          range: [36, 47]
      },
      {
          label: '5 Dozen',
          range: [48, 60]
      }
    ];

    public sliderValue = [10];
}
