import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

@NgModule({
    imports: [],
    declarations: [PostsComponent],
    exports: [],
    providers: [PostsService]
})
export class PostsModule { }
