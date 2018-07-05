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
    public post = {};
    public postToEdit: any;

    constructor(public bsModalRef: BsModalRef,
    ) {}

    ngOnInit() {
        console.log('Posttooedit ', this.postToEdit);
        if (this.postToEdit) {
            this.post = this.postToEdit;
        }
    }

    close() {
        this.bsModalRef.hide();
    }

    onSubmit() {
        console.log('Post in submit ', this.post);
        this.action(this.post);
        this.close();
    }

}
