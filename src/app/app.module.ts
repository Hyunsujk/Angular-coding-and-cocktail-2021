import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Route[] = [
  { path: 'trivia', component: TriviaComponent },
  { path: '', component: TriviaComponent },
];
@NgModule({
  declarations: [AppComponent, TriviaComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
