# Notes
* Bootstrap used, mostly for convenience/speed. 
* Updated User model. I used number for id since ERD or preferred type wasn't available.  GUIDs may be preferred depending on use-case, client & team preference.
* Typically I use _variableName for private variables, but I changed to follow your lower camelCase convention. Does Modus have an internal style guide?
* Redux used for state.  This may be overkill without knowing the intended scale of the application, but since the intent of this application is to assess ability, thought it may be relevant.
* For task 3, the redux actions should really call an auth service, but since there is no authentication logic or tokens etc, the auth.service.ts is just a placeholder for now.  


## TODO
*  The HOME page currently has two components, 'app-header' and 'app-content'.
   User can login from each of the two components but the state in these components are not synced.
   I.e. if the user logs in/logs out from the app-header, the app-content doesn't get notified.
   Go to {{link}} and implement the logic to notify the \'app-header'\n component
   and the \'app-content\' component when the user logs in and logs out of the app from either of the two components.

* Tests for each service and component method should pass

* do all methods have relevant usage metadata?

* align style

Bonus
* Redux state


# NgExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



