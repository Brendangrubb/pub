# Pub

## Commands used:
* $ `apm install atom-typescript`
* $ `ng new pub`
* $ `ng g component keg-list`
* $ `ng g class keg`
* $ `ng lint`

npm install (reconstitute after clone)

npm list -g bower (check bower installation need 1.8.0)

bower init (defaults taken, add )

bower install bootstrap --save

(Add /bower_components under #dependancies in .gitignore)
(In angular-cli.json under apps:, styles add ,"../bower_components/bootstrap/dist/css/bootstrap.css")

ng g component header

ng g component keg-edit

ng g pipe low-pints


## Software to have on computer to develop and Run
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [https://www.npmjs.com/package/angular2-cli](https://www.npmjs.com/package/angular2-cli)
(gulp not used due to angular-cli asset packaging)

## Bring up this project
clone from GitHub
npm install
bower install
ng serve (localhost:4200)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
