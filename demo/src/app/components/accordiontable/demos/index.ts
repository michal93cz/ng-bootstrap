import { AccordiontableBasicComponent } from './basic/basic.accordiontable';
import { AccordiontableGenericComponent } from './generic/generic.accordiontable';
import { AccordiontableEnumerationComponent } from './enumeration/enumeration.accordiontable';
import { AccordiontableMultiComponent } from './multi/multi.accordiontable';
import { AccordiontableMultilevelNestingComponent } from './multilevel-nesting/multilevel-nesting.accordiontable';
import { CollapseIconComponent } from './_collapseicon/collapse-icon.component';

export const DEMO_DIRECTIVES = [
  AccordiontableBasicComponent,
  AccordiontableGenericComponent,
  AccordiontableEnumerationComponent,
  AccordiontableMultiComponent,
  AccordiontableMultilevelNestingComponent,
  CollapseIconComponent
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs?lang=typescript!./basic/basic.accordiontable'),
    markup: require('!!prismjs?lang=markup!./basic/basic.accordiontable.html')},
  generic: {
    code: require('!!prismjs?lang=typescript!./generic/generic.accordiontable'),
    markup: require('!!prismjs?lang=markup!./generic/generic.accordiontable.html')},
  enumeration: {
    code: require('!!prismjs?lang=typescript!./enumeration/enumeration.accordiontable'),
    markup: require('!!prismjs?lang=markup!./enumeration/enumeration.accordiontable.html')},
  multi: {
    code: require('!!prismjs?lang=typescript!./multi/multi.accordiontable'),
    markup: require('!!prismjs?lang=markup!./multi/multi.accordiontable.html')},
  multilevelNesting: {
    code: require('!!prismjs?lang=typescript!./multilevel-nesting/multilevel-nesting.accordiontable'),
    markup: require('!!prismjs?lang=markup!./multilevel-nesting/multilevel-nesting.accordiontable.html')}
};
