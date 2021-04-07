import {get} from "lodash";
const user = {
  name: 'Lusine'
}
console.log('hi, npm && parcel lesson');
console.log(user);

console.log(get(user, 'name'));
//console.log(get(user, '10', 'not found'));//Uncaught SyntaxError: Cannot use import statement outside a module
