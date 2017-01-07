import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbModal} from '../modal/modal.module';
import {NgbMultiselectConfig} from './multiselect-config';

/**
 * multiSelect directive that will take care of choice values from available on list.
 */

@Component({
  selector: 'ngb-multiselect',
  template: `
    <template #content
              let-c="close"
              let-d="dismiss">
      <template ngbModalContainer>
      </template>
      <div *ngIf="titleText"
           class="modal-header">
        <h4 class="modal-title">
          {{ titleText }}
        </h4>
      </div>
      <div class="modal-body"
           style="max-height: 60vh; overflow-y: auto">
        <ul class="list-group">
          <li *ngFor="let item of items"
              (click)="toggleItem(item)"
              [ngClass]="{'active': isActive(item)}"
              class="list-group-item list-group-item-action"
              style="cursor: pointer">
            <p class="list-group-item-heading">
              {{ item.label }}
            </p>
            <p *ngIf="item.description"
               class="list-group-item-text">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button"
                class="btn btn-secondary"
                style="float:left"
                (click)="c()">
          {{ closeText }}
        </button>
        <button type="button"
                class="btn btn-primary"
                (click)="cancelSelected()">
          {{ clearText }}
        </button>
      </div>
    </template>

    <button class="btn btn-lg btn-outline-primary"
            (click)="open(content)">
      {{ openText }}
    </button>
  `
})

export class NgbMultiselect {
  modalRef: any;

  /**
   * The array with content to display in modal body.
   */
  @Input() items: any;

  /**
   * The json with content to display in modal body.
   */
  @Input() selectedItems: any;

  /**
   * The json with content to display in modal body.
   */
  @Input() activeMode: boolean;

  /**
   * The text to display in button which open modal.
   */
  @Input() openText: String;

  /**
   * The text to display in modal title (if this is empty modal apear without title space).
   */
  @Input() titleText: String;

  /**
   * The text to display in button which delete choice.
   */
  @Input() clearText: String;

  /**
   * The text to display in button which cancel choice.
   */
  @Input() closeText: String;

  /**
   *  An event fired when the selectedItems is changed.
   *  Event's payload equals the current selectedItems.
   */
  @Output() selectedItemsChange = new EventEmitter();

  constructor(private modalService: NgbModal, config: NgbMultiselectConfig) {
    this.openText = config.openText;
    this.titleText = config.titleText;
    this.clearText = config.clearText;
    this.closeText = config.closeText;
    this.activeMode = config.activeMode;
  }

  open(content) {
    this.modalRef = this.modalService.open(content, {
            backdrop: 'static',
            keyboard: false
        });
  }

  toggleItem(item) {
    this.activeMode ? this.setActive(item) : this.setItem(item);
  }

  setActive(item) {
    item.active = !item.active;
  }

  setItem(item) {
    if(this.isSelectedItem(item)) {
      this.deselectItem(item);
    } else {
      this.selectItem(item);
    }
  }

  selectItem(item) {
    this.selectedItems.push(item);
  }

  deselectItem(item) {
    this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
  }

  isActive(item) {
    return this.activeMode ? item.active : this.isSelectedItem(item);
  }

  isSelectedItem(item) {
    return this.selectedItems.indexOf(item) == -1 ? false : true;
  }

  cancelSelected() {
    this.activeMode ? this.clearActiveItems() : this.clearSelectedItems();
  }

  clearSelectedItems() {
    this.selectedItems = [];
    this.changeEmit();
  }

  clearActiveItems() {
    for (let item of this.items) {
      item.active = false;
    }
  }

  changeEmit() {
    this.selectedItemsChange.emit(this.selectedItems);
  }
}

export const NGB_MULTISELECT_DIRECTIVES = [NgbMultiselect];
