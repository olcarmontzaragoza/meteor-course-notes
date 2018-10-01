import { Meteor } from 'meteor/meteor';
import React from 'react';

import Signup from '../ui/Signup';
import NotFound from '../ui/NotFound';
import Dashboard from '../ui/Dashboard';
import Login from '../ui/Login';
import { Session } from 'meteor/session';

import { Router, Route, browserHistory, Switch, Redirect } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

const onEnterPublicPage = (Component) => {
    if (Meteor.userId()) {
        return <Redirect to="/dashboard" />;
    } else {
        return <Component />;
    }
};

const onEnterPrivatePage = (Component) => {
    if (!Meteor.userId()) {
        return <Redirect to="/" />;
    } else {
        return <Component />;
    }
};

// const onEnterNotePage = (nextState) => {
//   Session.set('selectedNoteId', nextState.params.id);
// };

const onEnterNotePage = (nextState) => {
	  if (!Meteor.userId()) {
	    browserHistory.replace('/');
	  } else {
	    Session.set('selectedNoteId', nextState.params.id);
	  }
	};

// const onEnterNotePage = (nextState) => {
//   if (!Meteor.userId()) {
//     browserHistory.replace('/');
//   } else {
//     // Session.set('selectedNoteId', nextState.params.id);
//   }
// }

export const onAuthChange = (isAuthenticated) => {
const pathname = browserHistory.location.pathname;
const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
const isAuthenticatedPage = authenticatedPages.includes(pathname);

if (isAuthenticated && isUnauthenticatedPage) {
browserHistory.replace('/dashboard');
}
else if (!isAuthenticated && isAuthenticatedPage) {
browserHistory.replace('/');
}
};

export const routes = (
    <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" render={() => onEnterPublicPage(Login)} />
          <Route path="/signup" render={() => onEnterPublicPage(Signup)}  />
          <Route path="/dashboard"  render={() => onEnterPrivatePage(Dashboard)}  />
          <Route path="/dashboard/:id" render={() => onEnterNotePage(Dashboard)} />
          <Route path="*" component={NotFound}  />
        </Switch>
    </Router>
);
