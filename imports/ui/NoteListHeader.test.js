import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import NoteListHeader from './NoteListHeader';

if (Meteor.isClient) {

describe('NoteListHeader', function() {
let meteorCall;
let Session;

beforeEach() {
meteorCall = expect.createSpy();
Session = {
set: expect.createSpy();
}
}

it('should call meteorCall on click', function() {
const wrapper = mount( <NoteListHeader meteorCall={meteorCall} Session={Session}/> );

wrapper.find('button').simulate('click');
meteorCall.calls[0].arguments[1]({}, undefined);

expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert');
expect(Session.set).toNotHaveBeenCalled('selectedNoteId', notes[0]._id);
});

});
}
