import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapse-icon',
  template: `
    <div (click)="isNotCollapsed=!isNotCollapsed"
         style="height: 25px; width: 35px;">
      <i [ngClass]="{'fa-chevron-up': isNotCollapsed, 'fa-chevron-down': !isNotCollapsed}"
         class="fa fa-fw">
      </i>
    </div>
  `
})

export class CollapseIconComponent {}
