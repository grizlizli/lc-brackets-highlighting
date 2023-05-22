import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditComponent } from './components/text-edit/text-edit.component';
import { HighlightBracketsPipe } from './pipes/highlight-brackets/highlight-brackets.pipe';

@NgModule({
  declarations: [TextEditComponent, HighlightBracketsPipe],
  imports: [CommonModule],
  exports: [TextEditComponent, HighlightBracketsPipe],
})
export class SharedModule {}
