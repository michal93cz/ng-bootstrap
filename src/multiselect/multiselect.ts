import {Component} from '@angular/core';
import {NgbModal, NgbModalOptions} from '../modal/modal.module';

/**
 * accordionTable directive that will take care of visualising a star accordionTable bar.
 */
@Component({
  selector: 'ngb-multiselect',
  template: `
  <template #content let-c="close" let-d="dismiss">
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Modal title</h4>
    </div>
    <div class="modal-body">
      <p>One fine body&hellip;</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
    </div>
  </template>

  <button class="btn btn-lg btn-outline-primary" (click)="open(content)">Launch demo modal</button>
  `
})
export class NgbMultiselect {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}

export const NGB_MULTISELECT_DIRECTIVES = [NgbMultiselect];
