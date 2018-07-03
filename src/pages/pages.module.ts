import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [LandingModule, PostsModule],
  declarations: [],
  providers: []
})
export class PagesModule {}
