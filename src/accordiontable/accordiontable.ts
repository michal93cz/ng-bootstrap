import {Component, Input, Directive, TemplateRef} from '@angular/core';
import {NgbAccordiontableConfig} from './accordiontable-config';

interface Row {
  cells: Array<String>;
  infos: Array<String>;
}

interface Content {
  columns: Array<String>;
  rows: Array<Row>;
}

/**
 * accordionTable directive that will take care of visualising a star accordionTable bar.
 */
@Component({
  selector: 'ngb-accordiontable',
  template: `
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
            <td>
              <button *ngIf="multi" type="button" class="btn btn-outline-primary" (click)="row.isNotCollapsed = !row.isNotCollapsed">
                More
              </button>
              <button *ngIf="!multi" type="button" class="btn btn-outline-primary" (click)="chooseItem(row)">
                More
              </button>
            </td>
          </tr>
          <tr *ngIf="multi" class="row" [ngClass]="{'collapse': !row.isNotCollapsed}">
            <td colspan="100%">
              <div *ngFor="let info of row.infos" class="col-xs-{{ infoSize }}">{{ info }}</div>
            </td>
          </tr>
          <tr *ngIf="!multi" class="row" [ngClass]="{'collapse': row != chosenItem}">
            <td colspan="100%">
              <div *ngFor="let info of row.infos" class="col-xs-{{ infoSize }}">{{ info }}</div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  `
})
export class NgbAccordiontable {
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
  @Input()
  set numberOfInfos(numberOfInfos: number) {
    this.infoSize = Math.floor(12 / numberOfInfos);
  };

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

  constructor(config: NgbAccordiontableConfig) {
    this.multi = config.multi;
    this.content = config.content;
    this.numberOfInfos = config.numberOfInfos;
    this.enumeration = config.enumeration;
    this.enumerationText = config.enumerationText;
    this.infosText = config.infosText;
  }

  chooseItem(item) {
    this.chosenItem = (this.chosenItem !== item) ? item : null;
  }
}

export const NGB_ACCORDIONTABLE_DIRECTIVES = [NgbAccordiontable];
