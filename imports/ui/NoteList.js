import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import { Notes } from '../api/notes';
import { NoteListHeader } from './NoteListHeader';
import NoteListItem from './NoteListItem';

export const NoteList = (props) => {
return (
<div>
NoteList { props.notes.length }
<NoteListHeader/>
{ props.notes.length === 0 ? <NoteListEmptyItem/> : undefined }
</div>
);
};

export default createContainer(() => {
Meteor.subscribe('notes');
return {
notes: Notes.find().fetch()
}
}, NoteList);

NoteList.propTypes ={
notes: PropTypes.array.isRequired
}
