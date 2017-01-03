import { SliderBasicComponent } from './basic/basic.slider';
import { SliderNotConnectComponent } from './not-connect/not-connect.slider';

export const DEMO_DIRECTIVES = [SliderBasicComponent, SliderNotConnectComponent];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs?lang=typescript!./basic/basic.slider'),
    markup: require('!!prismjs?lang=markup!./basic/basic.slider.html')},
  notConnect: {
    code: require('!!prismjs?lang=typescript!./not-connect/not-connect.slider'),
    markup: require('!!prismjs?lang=markup!./not-connect/not-connect.slider.html')}
};
