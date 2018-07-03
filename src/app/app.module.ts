import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true}),
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


