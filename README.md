# LcBracketsHighlighting

## Task description

Implement an editable text block where words wrapped in square brackets are highlighted in blue, and words wrapped in curly brackets are highlighted in green.
Overlapping patterns should be ignored, they shouldn't be highlighted.
The component should be implemented in a separate module of Angular application.
The application should be published on GitHub in a public repository.

For example:
[Hello/Hi/Greetings] {Name}, how are you? // [Hello/Hi/Greetings] and {Name} are correct patterns
[Hello {Surname}/Hi/Greetings] {Name [...] Surname}, how are you? // These patterns are incorrect

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
