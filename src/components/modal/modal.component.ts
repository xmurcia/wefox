import { Component, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class CustomModalComponent {

    @ViewChild('form') form: any;
    public action: any;
    public post = {};

    constructor(public bsModalRef: BsModalRef,
    ) { }

    close() {
        this.bsModalRef.hide();
    }

    onSubmit() {
        this.action(this.post);
        this.form.reset();
        this.close();
    }

}
