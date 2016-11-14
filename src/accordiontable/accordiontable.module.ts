import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NGB_ACCORDIONTABLE_DIRECTIVES} from './accordiontable';
import {NgbAccordiontableConfig} from './accordiontable-config';

export {NgbAccordiontableConfig} from './accordiontable-config';

@NgModule(
    {declarations: NGB_ACCORDIONTABLE_DIRECTIVES, exports: NGB_ACCORDIONTABLE_DIRECTIVES, imports: [CommonModule]})
export class NgbAccordiontableModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgbAccordiontableModule, providers: [NgbAccordiontableConfig]};
  }
}
