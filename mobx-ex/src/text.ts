import { observable, makeObservable, action, autorun, runInAction } from 'mobx';

/** Creation observable via function */

// const person = observable({
//   firstName: 'Lena',
//   lastName: 'Ro',
// });

const fakePromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(true), 1000);
});

/** Creation observable via class and decorator */

class Person {
  @observable
  firstName: string;

  @observable
  lastName: string;

  constructor(name: string, lastName: string) {
    // In MobX 6 you need to add this line:
    makeObservable(this);

    this.firstName = name;
    this.lastName = lastName;
  }

  // Action (option 1)
  @action
  updateFirstName(name: string) {
    this.firstName = name;
  }

  @action
  updateLastName(name: string) {
    this.lastName = name;
  }

  // changing of several observables in 1 action triggers only 1 update
  @action
  updateFulName(name: string, lastName: string) {
    this.firstName = name;
    this.lastName = lastName;
  }
}

const newPerson = new Person('Max', 'Ro');

// Runs every time we change person
autorun(() => {
  console.log('Name is ' + newPerson.firstName + ' ' + newPerson.lastName);
});

// Action (option 2)
runInAction(() => {
  newPerson.firstName = 'From running action';
});

// Action (option 3)
const updater = action(() => {
  newPerson.firstName = 'from action function';
});

updater();

newPerson.updateFirstName('Maxim');
newPerson.updateLastName('Romanov');

newPerson.updateFulName('Lena', 'Golikova');

runInAction(async () => {
  newPerson.firstName = 'Async';
  await fakePromise;
  newPerson.lastName = 'Example';
});

const some = {};

export default some;
