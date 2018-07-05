import { Component, ViewChild, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class CustomModalComponent implements OnInit {

    @ViewChild('form') form: any;
    public action: any;
    public post: any = {};
    public postToEdit: any;
    public header: string;

    constructor(public bsModalRef: BsModalRef,
    ) {}

    ngOnInit() {
        if (this.postToEdit) {
            this.post = this.postToEdit;
        }
    }

    close() {
        this.bsModalRef.hide();
    }

    onSubmit() {
        this.action(this.post);
        this.close();
    }

}
