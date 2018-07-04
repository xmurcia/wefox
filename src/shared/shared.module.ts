import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { CustomModalComponent } from '../components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports: [CommonModule, HttpClientModule, ModalModule],
  entryComponents: [CustomModalComponent],
  declarations: [],
  providers: [BsModalRef]
})
export class SharedModule {}
