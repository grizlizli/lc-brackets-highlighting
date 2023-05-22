import { HighlightBracketsPipe } from './highlight-brackets.pipe';

describe('HighlightBracketsPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightBracketsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform "[brackets]" to "<span class="text-highlight blue">[brackets]</span>"', () => {
    const pipe = new HighlightBracketsPipe();
    expect(pipe.transform('[brackets]')).toBe(
      '<span class="text-highlight blue">[brackets]</span>'
    );
  });

  it('should transform "[Hello/Hi/Greetings] {Name}, how are you?" to "<span class="text-highlight blue">[Hello/Hi/Greetings]</span> <span class="text-highlight blue">{Name}</span>, how are you?"', () => {
    const pipe = new HighlightBracketsPipe();
    expect(pipe.transform('[Hello/Hi/Greetings] {Name}, how are you?')).toBe(
      '<span class="text-highlight blue">[Hello/Hi/Greetings]</span> <span class="text-highlight green">{Name}</span>, how are you?'
    );
  });

  it('should transform "[Hello/Hi/Greetings] and {Name}" to "<span class="text-highlight blue">[Hello/Hi/Greetings]</span> and <span class="text-highlight green">{Name}</span>"', () => {
    const pipe = new HighlightBracketsPipe();
    expect(pipe.transform('[Hello/Hi/Greetings] and {Name}')).toBe(
      '<span class="text-highlight blue">[Hello/Hi/Greetings]</span> and <span class="text-highlight green">{Name}</span>'
    );
  });
});
