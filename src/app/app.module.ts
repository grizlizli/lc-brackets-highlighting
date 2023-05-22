import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextEditComponent } from './components/text-edit/text-edit.component';
import { HighlightBracketsPipe } from './pipes/highlight-brackets.pipe';

@NgModule({
  declarations: [AppComponent, TextEditComponent, HighlightBracketsPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
