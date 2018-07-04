import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class CustomModalComponent {

    constructor(public bsModalRef: BsModalRef,
    ) { }

    close() {
        this.bsModalRef.hide();
    }

}
