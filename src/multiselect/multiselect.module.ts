import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NGB_MULTISELECT_DIRECTIVES} from './multiselect';
import {NgbMultiselectConfig} from './multiselect-config';

export {NgbMultiselectConfig} from './multiselect-config';

@NgModule({
  declarations: [NGB_MULTISELECT_DIRECTIVES],
  exports: NGB_MULTISELECT_DIRECTIVES,
  imports: [CommonModule]
})
export class NgbMultiselectModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbMultiselectModule, providers: [NgbMultiselectConfig]}; }
}
