import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NouisliderModule} from 'ng2-nouislider';

import {NGB_SLIDER_DIRECTIVES} from './slider';
import {NgbSliderConfig} from './slider-config';

export {NgbSliderConfig} from './slider-config';

@NgModule({
  declarations: NGB_SLIDER_DIRECTIVES,
  exports: NGB_SLIDER_DIRECTIVES,
  imports: [
    CommonModule,
    NouisliderModule,
    BrowserModule,
    FormsModule]})
export class NgbSliderModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbSliderModule, providers: [NgbSliderConfig]}; }
}
