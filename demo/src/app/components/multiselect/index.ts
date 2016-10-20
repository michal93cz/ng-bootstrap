export * from './multiselect.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbdSharedModule} from '../../shared';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdMultiselect} from './multiselect.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdSharedModule, NgbdComponentsSharedModule],
  exports: [NgbdMultiselect],
  declarations: [NgbdMultiselect, ...DEMO_DIRECTIVES]
})
export class NgbdMultiselectModule {}
