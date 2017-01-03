import { MultiselectBasicComponent } from './basic/basic.multiselect';
import { MultiselectActiveModeComponent } from './active-mode/active-mode.multiselect';

export const DEMO_DIRECTIVES = [MultiselectBasicComponent, MultiselectActiveModeComponent];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs?lang=typescript!./basic/basic.multiselect'),
    markup: require('!!prismjs?lang=markup!./basic/basic.multiselect.html')
  },
  activeMode: {
    code: require('!!prismjs?lang=typescript!./active-mode/active-mode.multiselect'),
    markup: require('!!prismjs?lang=markup!./active-mode/active-mode.multiselect.html')
  }
};
