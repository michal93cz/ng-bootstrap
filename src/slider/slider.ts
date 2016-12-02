import { NouisliderModule } from 'ng2-nouislider';
import {Component, Input, Output, Directive, TemplateRef, ContentChild, EventEmitter, OnInit} from '@angular/core';
import {NgbSliderConfig} from './slider-config';

/**
 * accordionTable directive that will take care of visualising a star accordionTable bar.
 */
@Component({
  selector: 'ngb-slider',
  template: `
    <div class="noUi-pips noUi-pips-horizontal" style="position: relative; height: 44px">
      <div *ngFor="let item of items"
            (click)="setRange(item.range)"
            class="noUi-value noUi-value-horizontal noUi-value-large"
            [ngStyle]="{'left': getLeftSpace(mainRange, item.range)}"
            style="cursor: pointer">{{ item.label }}</div>
    </div>
    <nouislider [config]="rangeConfig" [(ngModel)]="value" style="margin-bottom: 50px"></nouislider>
  `
})
export class NgbSlider implements OnInit {
  public mainRange: number[];
  public rangeConfig: any;

  /**
   * A flag indicating if want to be multi selected or not.
   */
  @Input() items: any;

  /**
   * The json with content to display in table.
   */
  @Input() min: number;

  /**
   * The json with content to display in table.
   */
  @Input() max: number;

  /**
   * The json with content to display in table.
   */
  @Input() step: number;

  /**
   * The json with content to display in table.
   */
  @Input() connect: boolean;

  /**
   * The json with content to display in table.
   */
  @Input() value: any;

  /**
   *  An event fired when the page is changed.
   *  Event's payload equals the current page.
   */
  @Output() pageChange = new EventEmitter();

  ngOnInit() {
    this.setMainRange();

    this.rangeConfig = {
      connect: this.connect,
      step: this.step,
      range: {
      	'min': this.mainRange[0],
      	'max': this.mainRange[1]
      },
      pips: {
        mode: 'values',
        values: this.getScaleValues()
      }
    };
  }

  constructor(config: NgbSliderConfig) {
    this.min = config.min;
    this.max = config.max;
    this.connect = config.connect;
    this.step = config.step;
  }

  getLeftSpace(mainRange, itemRange) {
    let denominator = (2 * (mainRange[1] - mainRange[0])), nominator;

    if (itemRange[1] == mainRange[1]) {
      nominator = itemRange[0] + itemRange[1] - 2 * mainRange[0];
    } else {
      nominator = itemRange[0] + itemRange[1] + 1 - 2 * mainRange[0];
    }

    return nominator / denominator * 100 + '%';
  }

  getScaleValues() {
    let valuesArray = [];

    for (let item of this.items) {
      valuesArray.push(item.range[0]);
    }

    valuesArray.push(this.items[this.items.length-1].range[1]);

    return valuesArray;
  }

  setMainRange() {
    this.mainRange = [this.items[0].range[0], this.items[this.items.length-1].range[1]];
  }

  setRange(range) {
    this.value = range;
  }
}

export const NGB_SLIDER_DIRECTIVES = [NgbSlider];
