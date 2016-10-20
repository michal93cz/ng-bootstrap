import {NgModule, ModuleWithProviders} from '@angular/core';
import {NGB_MULTISELECT_DIRECTIVES} from './multiselect';

@NgModule({declarations: NGB_MULTISELECT_DIRECTIVES, exports: NGB_MULTISELECT_DIRECTIVES})
export class NgbMultiselectModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbMultiselectModule, providers: []}; }
}
