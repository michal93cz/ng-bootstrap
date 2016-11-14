import {Injectable} from '@angular/core';

/**
 * Configuration service for the NgbAccordiontable component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
@Injectable()
export class NgbAccordiontableConfig {
  multi = false;
  content: JSON;
  numberOfInfos = 12;
  enumeration = false;
  enumerationText = '#';
  infosText = 'Info';
}
