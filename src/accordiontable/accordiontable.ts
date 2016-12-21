import {Component, Input, Directive, TemplateRef, ContentChild, OnInit} from '@angular/core';
import {NgbAccordiontableConfig} from './accordiontable-config';

export interface CollapseTemplateContext {}

/**
 * accordionTable directive that will take care of visualising a star accordionTable bar.
 */
@Component({
  selector: 'ngb-accordiontable',
  template: `
    <template #t>
      <button type="button" class="btn btn-outline-primary">
        More
      </button>
    </template>
    <table class="table">
      <thead>
        <tr class="row">
          <th *ngIf="enumeration">{{ enumerationText }}</th>
          <th *ngFor="let column of content.columns">{{ column }}</th>
          <th>{{ infosText }}</th>
        </tr>
      </thead>
      <tbody>
        <template ngFor let-row [ngForOf]="content.rows" let-index="index">
          <tr>
            <th *ngIf="enumeration" scope="row">{{ index+1 }}</th>
            <td *ngFor="let cell of row.cells">{{ cell }}</td>
            <td (click)="toggleInfos(row)" width="1%">
              <template [ngTemplateOutlet]="collapseTemplate || t"></template>
            </td>
          </tr>
          <tr class="row" [ngClass]="{'collapse': isCollapsed(row)}">
            <td colspan="100%">
              <div *ngFor="let info of row.infos" class="col-xs-{{ infoSize }}">{{ info }}</div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  `
})
export class NgbAccordiontable implements OnInit {
  infoSize: number;
  chosenItem = null;

  /**
   * A flag indicating if want to be multi selected or not.
   */
  @Input() multi: boolean;

  /**
   * The json with content to display in table.
   */
  @Input() content: JSON;

  /**
   * The number of infos fields to display in one row (max 12).
   */
  @Input() numberOfInfos: number;

  /**
   * The element which open a collapse row.
   */
  @Input() @ContentChild(TemplateRef) collapseTemplate: TemplateRef<CollapseTemplateContext>;

  /**
   * A flag indicating if want to have enumeration or not.
   */
  @Input() enumeration: boolean;

  /**
   * A text of enumeration column name.
   */
  @Input() enumerationText: String;

  /**
   * A text of info button column name.
   */
  @Input() infosText: String;

  ngOnInit() {
    this.setInfoSize();
  }

  constructor(config: NgbAccordiontableConfig) {
    this.multi = config.multi;
    this.content = config.content;
    this.numberOfInfos = config.numberOfInfos;
    this.enumeration = config.enumeration;
    this.enumerationText = config.enumerationText;
    this.infosText = config.infosText;
  }

  chooseItem(item) { this.chosenItem = (this.chosenItem !== item) ? item : null; }

  toggleInfos(item) {
    if (this.multi) {
      item.isNotCollapsed = !item.isNotCollapsed;
    } else {
      this.chosenItem = (this.chosenItem !== item) ? item : null;
    }
  }

  isCollapsed(item) {
    if (this.multi) {
      return !item.isNotCollapsed;
    } else {
      return item !== this.chosenItem;
    }
  }

  setInfoSize() {
    this.infoSize = Math.floor(12 / this.numberOfInfos);
  }
}

export const NGB_ACCORDIONTABLE_DIRECTIVES = [NgbAccordiontable];
