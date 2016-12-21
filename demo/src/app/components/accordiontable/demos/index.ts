import { AccordiontableBasicComponent } from './basic/basic.accordiontable';
import { AccordiontableGenericComponent } from './generic/generic.accordiontable';
import { AccordiontableEnumerationComponent } from './enumeration/enumeration.accordiontable';

export const DEMO_DIRECTIVES = [
  AccordiontableBasicComponent,
  AccordiontableGenericComponent,
  AccordiontableEnumerationComponent
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
    markup: require('!!prismjs?lang=markup!./enumeration/enumeration.accordiontable.html')}
};
