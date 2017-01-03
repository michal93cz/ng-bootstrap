import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-multiselect-active-mode',
  templateUrl: './active-mode.multiselect.html'
})
export class MultiselectActiveModeComponent {
  public items = [
    {
      label: 'Dapibus ac facilisis'
    },
    {
      label: 'Morbi leo risus'
    },
    {
      label: 'Porta ac consectetur ac',
      description: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
    },
    {
      label: 'Vestibulum at eros'
    },
    {
      label: 'Vestibulum at eros'
    },
    {
      label: 'Porta ac consectetur ac',
      description: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
    },
    {
      label: 'Vestibulum at eros',
      description: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
    }
  ];
}
