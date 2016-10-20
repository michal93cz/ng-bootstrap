import {NgModule, ModuleWithProviders} from '@angular/core';
import {NGB_ACCORDIONTABLE_DIRECTIVES} from './accordiontable';

@NgModule({declarations: NGB_ACCORDIONTABLE_DIRECTIVES, exports: NGB_ACCORDIONTABLE_DIRECTIVES})
export class NgbAccordiontableModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbAccordiontableModule, providers: []}; }
}
