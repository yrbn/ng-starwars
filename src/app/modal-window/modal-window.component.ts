import { Component, ViewChild } from '@angular/core'
import { Ng2Bs3ModalModule, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { CookieService } from '../cookie.service';

@Component({
    selector: 'ng-modal-window',
    template: `
      <modal #modal>
        <modal-header [show-close]="true">
          <h3 class="modal-title text-center">StarWarsApp Instruction</h3>
        </modal-header>
        <modal-body>
          You can get details of every hero from the Star Wars universe by clicking arrows.
        </modal-body>
        <modal-footer>
          <button type="button" class="btn btn-primary" (click)="modal.close()">Close</button>
        </modal-footer>
      </modal>
    `,
    styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
    constructor(private cookieService: CookieService) {
    }

    ngOnInit() {
      if(!this.cookieService.checkCookie('autoinstruction')) {
        this.modal.open();
        this.cookieService.setCookie('autoinstruction', 'off', 3)
      }
    }

    @ViewChild('modal')
    modal: ModalWindowComponent;
    open(){
      this.modal.open();
    }
   
}