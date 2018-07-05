import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  public rotate: Boolean = false;

  @Input('item') item: any;
  @Output() deleteItem = new EventEmitter();
  @Output() editItem = new EventEmitter();

  constructor() { }

  delete(item) {
    this.deleteItem.emit(item);
  }

  edit(item) {
    this.editItem.emit(item);
  }

  rotateCard() {
    this.rotate = !this.rotate;
  }

}
