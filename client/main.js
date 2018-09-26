import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes.js';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
const isAuthenticated = !!Meteor.userId();
onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {

});

Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  ReactDOM.render(routes, document.getElementById('app'));
});
