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
              <button type="button" class="btn btn-outline-primary" (click)="row.isNotCollapsed = !row.isNotCollapsed">
                More
              </button>
            </td>
          </tr>
          <tr class="row" [ngClass]="{'collapse': !row.isNotCollapsed}">
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
  infoSize = 1;

  /**
   * A flag indicating if want to be multi selected or not.
   */
  @Input() multi: boolean;

  /**
   * The json with content to display in table.
   */
  @Input() content: JSON;

  /**
   * The max number of columns to display in table.
   */
  @Input() maxColumns: number;

  /**
   * The max number of rows to display in table.
   */
  @Input() maxRows: number;

  /**
   * The max number of info fields to display in one row.
   */
  @Input()
  set maxInfos(maxInfos: number) {
    this.infoSize = maxInfos ? Math.floor(12 / maxInfos) : this.infoSize;
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
    this.maxColumns = config.maxColumns;
    this.maxRows = config.maxRows;
    this.maxInfos = config.maxInfos;
    this.enumeration = config.enumeration;
    this.enumerationText = config.enumerationText;
    this.infosText = config.infosText;
  }
}

export const NGB_ACCORDIONTABLE_DIRECTIVES = [NgbAccordiontable];
