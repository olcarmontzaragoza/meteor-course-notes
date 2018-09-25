import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const NoteListHeader = (props) => {

return (
<div>
<button onClick={() => { Meteor.call('notes.insert')}}>Create Note</button>
</div>
)
};

NoteListHeader.propTypes = {
meteorCall: PropTypes.func.isRequired
}

export default createContainer(() => {
return {
meteorCall: Meteor.call
}
}, NoteListHeader);
