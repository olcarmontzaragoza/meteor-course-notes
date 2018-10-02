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

const onEnterNotePage = (Component) => {
Session.set('selectedNoteId', this.props.match.params.id);
};
const onLeaveNotePage = () => {
Session.set('selectedNoteId', undefined);
};
export const onAuthChange = (isAuthenticated, currentPagePrivacy) => {
const isUnauthenticatedPage = currentPagePrivacy === 'unauth';
const isAuthenticatedPage = currentPagePrivacy === 'auth';

if (isAuthenticated && isUnauthenticatedPage) {
browserHistory.replace('/dashboard');
}
else if (!isAuthenticated && isAuthenticatedPage) {
browserHistory.replace('/');
}
};
export const globalOnChange = (prevState, nextState) => {
globalOnEnter(nextState);
};
export const globalOnEnter = (nextState) => {
const lastRoute = nextState.routes[nextState.routes.length-1];
setState('currentPagePrivacy', lastRoute.privacy);
};
export const routes = (
    <Router history={browserHistory}>
          <div>
          <Route onEnter={globalOnEnter} onChange={globalOnChange}>
          <Route exact path="/" component={Login} privacy="unauth"  />
          <Route path="/signup" component={Signup} privacy="unauth"  />
          <Route path="/dashboard" component={Dashboard} privacy="auth"   />
          <Route path="/dashboard/:id" component={Dashboard} privacy="auth" onEnter={onEnterNotePage} onLeave={onLeaveNotePage} />
          <Route path="*" component={NotFound}  />
          </Route>
          </div>
    </Router>
);
