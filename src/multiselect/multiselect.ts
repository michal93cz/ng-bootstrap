import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgbModal} from '../modal/modal.module';
import {NgbMultiselectConfig} from './multiselect-config';

/**
 * multiSelect directive that will take care of visualising a star accordionTable bar.
 */

@Component({
  selector: 'ngb-multiselect',
  template: `
  <template #content let-c="close" let-d="dismiss">
    <template ngbModalContainer></template>
    <div *ngIf="titleText" class="modal-header">
      <h4 class="modal-title">{{ titleText }}</h4>
    </div>
    <div class="modal-body" style="max-height: 60vh; overflow-y: auto">
      <ul class="list-group">
        <li *ngFor="let item of tempItems"
            (click)="setActive(item)"
            [ngClass]="{'active': item.active}"
            class="list-group-item list-group-item-action"
            style="cursor: pointer">
            <p class="list-group-item-heading">
              {{ item.label }}
            </p>
            <p *ngIf="item.description" class="list-group-item-text">
              {{ item.description }}
            </p>
        </li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" style="float:left" (click)="c()">{{ cancelText }}</button>
      <!--<button type="button" class="btn btn-primary" (click)="save()">{{ submitText }}</button>-->
    </div>
  </template>

  <button class="btn btn-lg btn-outline-primary" (click)="open(content)">{{ openText }}</button>
  `
})
export class NgbMultiselect implements OnInit {
  modalRef: any;
  tempItems: any;

  /**
   * The json with content to display in modal body.
   */
  @Input() items: any;

  /**
   * The text to display in button which open modal.
   */
  @Input() openText: String;

  /**
   * The text to display in modal title (if this is empty modal apear without title space).
   */
  @Input() titleText: String;

  /**
   * The text to display in button which submit choice.
   */
  @Input() submitText: String;

  /**
   * The text to display in button which cancel choice.
   */
  @Input() cancelText: String;

  ngOnInit() {
    this.tempItems = this.items;
  }

  constructor(private modalService: NgbModal, config: NgbMultiselectConfig) {
    this.openText = config.openText;
    this.titleText = config.titleText;
    this.submitText = config.submitText;
    this.cancelText = config.cancelText;
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
  }

  save() {
    this.modalRef.close();
    this.items = this.tempItems;
  }

  setActive(item) {
    item.active = !item.active;
  }
}

export const NGB_MULTISELECT_DIRECTIVES = [NgbMultiselect];
