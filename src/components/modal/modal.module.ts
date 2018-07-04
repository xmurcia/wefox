import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { CustomModalComponent } from './modal.component';

@NgModule({
    imports: [
        SharedModule,
        ModalModule
    ],
    declarations: [
        CustomModalComponent
    ]
})
export class CustomModalModule {
}
