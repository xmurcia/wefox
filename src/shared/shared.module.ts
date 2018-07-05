import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalRef, AlertModule } from 'ngx-bootstrap';
import { CustomModalComponent } from '../components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmV6uw0-C6_5m4TpZNeZrrQs40FFa0qCQ'
    })
  ],
  exports: [CommonModule, HttpClientModule, ModalModule, ReactiveFormsModule, FormsModule, AgmCoreModule, AlertModule],
  entryComponents: [CustomModalComponent],
  declarations: [],
  providers: [BsModalRef]
})
export class SharedModule {}
