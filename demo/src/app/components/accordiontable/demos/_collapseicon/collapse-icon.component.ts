import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapse-icon',
  template: `
    <i (click)="isNotCollapsed=!isNotCollapsed" [ngClass]="{'fa-chevron-up': isNotCollapsed, 'fa-chevron-down': !isNotCollapsed}" class="fa fa-fw"></i>
  `
})
export class CollapseIconComponent {
  @Input()
  isNotCollapsed: boolean;
}
