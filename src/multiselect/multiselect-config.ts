import {Injectable} from '@angular/core';

/**
 * Configuration service for the NgbSlider component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the sliders used in the application.
 */
@Injectable()
export class NgbMultiselectConfig {
  titleText = '';
  submitText = 'Choose';
  cancelText = 'Cancel';
  openText = 'Select'
}
