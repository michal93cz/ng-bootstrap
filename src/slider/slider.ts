import {Directive, Input} from '@angular/core';

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
@Directive({
  selector: 'ngb-slider',
  exportAs: 'ngb-slider',
  host: {'[class.collapse]': 'true', '[class.in]': '!collapsed', '[attr.aria-expanded]': '!collapsed'}
})
export class NgbSlider {
  /**
   * A flag indicating collapsed (true) or open (false) state.
   */
  @Input('ngbSlider') collapsed = false;
}

export const NGB_SLIDER_DIRECTIVES = [NgbSlider];
