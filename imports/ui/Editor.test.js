import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

if (Meteor.isClient) {
describe('Editor', function() {
let browserHistory;
let call;

beforeEach(function () {
call = expect.createSpy();
browserHistory = {
push: expect.createSpy();
}
});

it('should render pick note message', function() {
const wrapper = mount(<Editor browserHistory={browserHistory} call={call}/>);
expect(wrapper.find('p').text()).toBe('Pick or create a note to get started');
});

it('should render not found message', function() {
const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={note[0].id}/>);
expect(wrapper.find('p').text()).toBe('Note not found.');
});

it('should remove note', function() {
const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={note[0].id} note={notes[0]}/>);

wrapper.find('button').simulate('click');

expect(browserHistory.push).toHaveBeenCalledWith('/');
expect(call).toHaveBeenCalledWith('notes.remove', notes[0]._id);
});

it('should update the note body on text area change', function() {
const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={note[0].id}/>);

const newBody = 'This is my new body text';
wrapper.find('textarea').simulate('change', {
target {
value: newBody
}
});

expect(wrapper.state('body')).toBe(newBody);
expect(call).toHaveBeenCalledWith('notes.update', notes[0]._id, { body: newBody });
});

it('should update the note title on text input change', function() {
const wrapper = mount(<Editor browserHistory={browserHistory} call={call} selectedNoteId={note[0].id}/>);

const newTitle = 'This is my new title text';
wrapper.find('input').simulate('change', {
target {
value: newTitle
}
});

expect(wrapper.state('title')).toBe(newTitle);
expect(call).toHaveBeenCalledWith('notes.update', notes[0]._id, { title: newTitle });
});

it('should not set state if note prop not provided', function() {
const wrapper = mount(<Editor browserHistory={browserHistory} call={call}/>);

wrapper.setProps({
selectedNoteId: notes[0]._id
}

expect(wrapper.state(title)).toBe('');
expect(wrapper.state(body)).toBe('');
});

});
}
