export * from './accordion';
export * from './alert';
export * from './buttons';
export * from './carousel';
export * from './collapse';
export * from './datepicker';
export * from './dropdown';
export * from './modal';
export * from './pagination';
export * from './popover';
export * from './progressbar';
export * from './rating';
export * from './tabset';
export * from './timepicker';
export * from './tooltip';
export * from './typeahead';
export * from './slider';
export * from './accordiontable';
export * from './multiselect';

import {NgModule} from '@angular/core';

import {NgbdSharedModule} from '../shared';

import {NgbdAccordionModule} from './accordion';
import {NgbdAlertModule} from './alert';
import {NgbdButtonsModule} from './buttons';
import {NgbdCarouselModule} from './carousel';
import {NgbdCollapseModule} from './collapse';
import {NgbdDatepickerModule} from './datepicker';
import {NgbdDropdownModule} from './dropdown';
import {NgbdModalModule} from './modal';
import {NgbdPaginationModule} from './pagination';
import {NgbdPopoverModule} from './popover';
import {NgbdProgressbarModule} from './progressbar';
import {NgbdRatingModule} from './rating';
import {NgbdTabsModule} from './tabset';
import {NgbdTimepickerModule} from './timepicker';
import {NgbdTooltipModule} from './tooltip';
import {NgbdTypeaheadModule} from './typeahead';
import {NgbdSliderModule} from './slider';
import {NgbdAccordiontableModule} from './accordiontable';
import {NgbdMultiselectModule} from './multiselect';

@NgModule({
  imports: [
    NgbdSharedModule,
    NgbdAccordionModule,
    NgbdAlertModule,
    NgbdButtonsModule,
    NgbdCarouselModule,
    NgbdCollapseModule,
    NgbdDatepickerModule,
    NgbdDropdownModule,
    NgbdModalModule,
    NgbdPaginationModule,
    NgbdPopoverModule,
    NgbdProgressbarModule,
    NgbdRatingModule,
    NgbdTabsModule,
    NgbdTimepickerModule,
    NgbdTooltipModule,
    NgbdTypeaheadModule,
    NgbdSliderModule,
    NgbdAccordiontableModule,
    NgbdMultiselectModule
  ],
  exports: [
    NgbdAccordionModule,
    NgbdAlertModule,
    NgbdButtonsModule,
    NgbdCarouselModule,
    NgbdCollapseModule,
    NgbdDatepickerModule,
    NgbdDropdownModule,
    NgbdModalModule,
    NgbdPaginationModule,
    NgbdPopoverModule,
    NgbdProgressbarModule,
    NgbdRatingModule,
    NgbdTabsModule,
    NgbdTimepickerModule,
    NgbdTooltipModule,
    NgbdTypeaheadModule,
    NgbdSliderModule,
    NgbdAccordiontableModule,
    NgbdMultiselectModule
  ]
})
export class NgbdDemoModule {}
