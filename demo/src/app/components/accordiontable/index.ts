export * from './accordiontable.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbdSharedModule} from '../../shared';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdAccordiontable} from './accordiontable.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdSharedModule, NgbdComponentsSharedModule],
  exports: [NgbdAccordiontable],
  declarations: [NgbdAccordiontable, ...DEMO_DIRECTIVES]
})
export class NgbdAccordiontableModule {}
