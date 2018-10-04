import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import { Notes } from '../api/notes';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';

export class Editor extends React.Component {
constructor(props) {
super(props);
this.state = {
title: ''
body: ''
};
}
handleTitleChange(e) {
const title = e.target.value;
this.setState({ title});
this.props.call('notes.update', this.props.note._id, { title });
}
handleBodyChange(e) {
const body = e.target.value;
this.setState({ body });
this.props.call('notes.update', this.props.note._id, { body });
}
componentDidUpdate() {
const currentNoteId = this.props.note ? this.props.note._id : undefined;
const prevNoteId = prevProps.note ? prevProps.note._id : undefined;

if (currentNoteId && currentNoteId !== prevNoteId) {
this.setState({
title: this.props.state.title,
body: this.props.state.body
}
}
handleRemoval() {
this.props.call('note.remove', this.state.props.note._id);
this.props.browserHistory.push('/dashboard');
}
render() {
  if (this.props.note) {
  return (
  <div className="editor">
  <input value={this.state.title} placeholder='Untitled Note' onChange={this.handleTitleChange.bind(this)}/>
  <textarea value={this.state.body} placeholder='Your Note Here' onChange={this.handleBodyChange.bind(this)}></textarea>
  <button onClick={() => { Meteor.call('note.remove'); }}>Delete Note</button>
  </div>
  );
} else {
  return (
  <div className="editor">
  <p>{ this.props.selectedNoteId ? 'Note not found.' : 'Pick or create a note to get started.'}</p>
  </div>
  );
  }
}
};

Editor.propTypes = {
note: PropTypes.object,
selectedNoteId: PropTypes.string
call: PropTypes.func.isRequried,
browserHistory: PropTypes.object.isRequired
}

export default createContainer(() => {
const selectedNoteId = Session.get('selectedNoteId');

return {
selectedNoteId,
note: Notes.findOne(selectedNoteId),
call: Meteor.call,
browserHistory
};
}, Editor);
