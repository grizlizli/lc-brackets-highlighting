import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditComponent } from './text-edit.component';
import { HighlightBracketsPipe } from '../../pipes/highlight-brackets/highlight-brackets.pipe';

describe('TextEditComponent', () => {
  let component: TextEditComponent;
  let fixture: ComponentFixture<TextEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextEditComponent, HighlightBracketsPipe],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditComponent);

    component = fixture.componentInstance;
    component.value = 'Test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input value should be "Test"', () => {
    expect(component.value).toBe('Test');
  });
});
