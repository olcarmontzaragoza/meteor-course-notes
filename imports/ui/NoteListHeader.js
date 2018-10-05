import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

export const NoteListHeader = (props) => {

return (
<div>
<button className="note-list__header"
  onClick={() => { props.meteorCall('notes.insert', (err, res) => {
if (res) {
props.Session.set('selectedNoteId', res);
}
});
}}>Create Note</button>
</div>
)
};

NoteListHeader.propTypes = {
meteorCall: PropTypes.func.isRequired,
Session: PropTypes.object.isRequired
}

export default createContainer(() => {
return {
meteorCall: Meteor.call
}
}, NoteListHeader);
