import {NgModule, ModuleWithProviders} from '@angular/core';
import {NGB_SLIDER_DIRECTIVES} from './slider';

@NgModule({declarations: NGB_SLIDER_DIRECTIVES, exports: NGB_SLIDER_DIRECTIVES})
export class NgbSliderModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbSliderModule, providers: []}; }
}
