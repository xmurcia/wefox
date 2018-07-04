import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from '../../components/card/card.component';
import { CustomModalModule } from '../../components/modal/modal.module';

@NgModule({
    imports: [SharedModule, CustomModalModule],
    declarations: [PostsComponent, CardComponent],
    exports: [],
    providers: [PostsService]
})
export class PostsModule { }
