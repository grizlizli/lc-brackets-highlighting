import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

const WARNING_MESSAGE =
  '[EditTextComponent] Issue with focusing element. Every time value is changed, focus is set to the first character of the input string.';

@Component({
  selector: 'lc-text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextEditComponent {
  private _value: string = '';
  @Input()
  public set value(value: string) {
    if (value !== this.value) {
      this.edited.emit(value);
    }
    this._value = value;
  }
  public get value() {
    return this._value;
  }

  @Output()
  public edited: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.logWarning();
  }

  public handleInputChange(event: Event) {
    this.value = (event.target as HTMLDivElement).innerText as string;

    // Issue with focusing element. Every time value is changed,
    // Focus is set to the first element of the input string.
    this.logWarning();
  }

  private logWarning() {
    console.warn(WARNING_MESSAGE);
  }
}
