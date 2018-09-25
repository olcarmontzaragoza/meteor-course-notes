import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { validateNewUser } from './users';


if (Meteor.isServer) {
describe ('users', function () {

  it ('should allow valid email address', function () {
    const testUser = {
        emails: [
            {
                address: 'Test@example.com'
            }
        ]
    };
    const res = validateNewUser(testUser);

    expect(res).toBe(true);
  });

  it ('should reject invalid email', function
      expect(() => {

   const testUser = {
          emails: [
              {
                  address: 'test.example@com'
              }
          ]

      };

      validateNewUser(testUser);
      }).toThrow();
  });



});
}





// const add = (a,b) => {
// if (typeof b !== 'number') {
//   return a + a;
// }
//
// return a + b;
// };
//
// const square = (a) => a * a;
//
// describe('add', fucntion() {
// it('should add two numbers', function() {
// const res = add(11, 9);
//
// expect(res).toBe(20);
// });
//
// it ('should double a single number', function () {
// const res = add(44);
//
//
// });
// });
//
// describe('square', fucntion() {
//
// });
//
// it('it should square a number', function () {
// const res = square(4);
//
// expect(res).toBe(16);
// });
