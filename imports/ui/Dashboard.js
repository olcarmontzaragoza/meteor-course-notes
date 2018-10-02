import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

// componentWillReceiveProps() {
//   if (!Meteor.userId() && this.props.match.params.id) {
//     this.props.history.replace('/login');
//   }
// }

export default () => {
    return (
        <div>
        <PrivateHeader title="Dashboard"/>
        <div className="page-content">
        <NoteList/>
        <Editor/>
        </div>
        </div>
    );
};
