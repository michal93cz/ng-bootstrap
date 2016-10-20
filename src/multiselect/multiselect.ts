import {Directive, Input} from '@angular/core';

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
@Directive({
  selector: 'ngb-multiselect',
  exportAs: 'ngb-multiselect',
  host: {'[class.collapse]': 'true', '[class.in]': '!collapsed', '[attr.aria-expanded]': '!collapsed'}
})
export class NgbMultiselect {
  /**
   * A flag indicating collapsed (true) or open (false) state.
   */
  @Input('ngbMultiselect') collapsed = false;
}

export const NGB_MULTISELECT_DIRECTIVES = [NgbMultiselect];
