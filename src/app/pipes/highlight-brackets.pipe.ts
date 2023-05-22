import { Pipe, PipeTransform } from '@angular/core';

// Honestly, I googled for these patterns. :)
// const SQUARE_BRACKET_PATTERN = /\[([^[\]{}]*)\]/g;
// const CURLY_BRACKET_PATTERN = /{([^[\]{}]*)}/g;

@Pipe({
  name: 'highlightBrackets',
})
export class HighlightBracketsPipe implements PipeTransform {
  private readonly SQUARE_BRACKET_PATTERN = /\[([^[\]{}]*)\]/g;
  private readonly CURLY_BRACKET_PATTERN = /{([^[\]{}]*)}/g;

  transform(value: string): string {
    return this.highlightPatterns(value);
  }

  private highlightPatterns(text: string): string {
    let highlightedText = text.replace(
      this.SQUARE_BRACKET_PATTERN,
      '<span class="text-highlight blue">[$1]</span>'
    );
    highlightedText = highlightedText.replace(
      this.CURLY_BRACKET_PATTERN,
      '<span class="text-highlight green">{$1}</span>'
    );

    return highlightedText;
  }
}
