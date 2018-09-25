import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
describe('NoteListItem', function() {

  it ('should render title and time stamp', function() {
  const title = 'My title here';
  const updatedAt = 1537810614119;
  const wrapper = mount(<NoteListItem note={{ title, updatedAt }} /> );

  expect(wrapper.find('h5').text()).toBe(title);
  expect(wrapper.find('p').text()).toBe('09/24/18');
  });

});
}
