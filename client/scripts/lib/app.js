// In this file we will initialize all the modules we need and load our module-helpers, so any time we create a module-helper it should be loaded here right after.

// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';

// Meteor

const App = 'Whatsapp';

// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);


// Startup
if (Meteor.isCordova) {
  Angular.elemet(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}
