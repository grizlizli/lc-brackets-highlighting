import { Component } from '@angular/core';

const TASK_DESCRIPTION =
  "Implement an editable text block where words wrapped in square brackets are highlighted in blue, and words wrapped in curly brackets are highlighted in green. Overlapping patterns should be ignored, they shouldn't be highlighted. The component should be implemented in a separate module of Angular application. The application should be published on GitHub in a public repository. ";

const TASK_EXAMPLES =
  'For example: [Hello/Hi/Greetings] {Name}, how are you? // [Hello/Hi/Greetings] and {Name} are correct patterns [Hello {Surname}/Hi/Greetings] {Name [...] Surname}, how are you? // These patterns are incorrect';

@Component({
  selector: 'lc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Launch Control Brackets Highlighting';

  taskDescription = TASK_DESCRIPTION;
  taskExamples = TASK_EXAMPLES;
}
