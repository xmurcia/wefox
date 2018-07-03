import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from '../../components/card/card.component';

@NgModule({
    imports: [SharedModule],
    declarations: [PostsComponent, CardComponent],
    exports: [],
    providers: [PostsService]
})
export class PostsModule { }
