import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { CustomModalComponent } from '../components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CommonModule, HttpClientModule, ModalModule, ReactiveFormsModule, FormsModule],
  entryComponents: [CustomModalComponent],
  declarations: [],
  providers: [BsModalRef]
})
export class SharedModule {}
