import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './card.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        CardComponent
    ]
})
export class CustomModalModule {
}
