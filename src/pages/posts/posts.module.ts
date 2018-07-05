import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { SharedModule } from '../../shared/shared.module';
import { CustomModalModule } from '../../components/modal/modal.module';
import { CardModule } from '../../components/card/card.module';

@NgModule({
    imports: [SharedModule, CustomModalModule, CardModule],
    declarations: [PostsComponent],
    exports: [],
    providers: [PostsService]
})
export class PostsModule { }
