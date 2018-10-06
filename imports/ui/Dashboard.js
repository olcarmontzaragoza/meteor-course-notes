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
        <PrivateHeader title="Notes"/>
        <div className="page-content">
        <div className="page-content__sidebar"
        <NoteList/>
        </div>
        <div className="page-content__main">
        <Editor/>
        </div>
        </div>
        </div>
    );
};
