import {
  observable,
  makeObservable,
  action,
  autorun,
  runInAction,
  when,
  reaction,
  computed,
} from 'mobx';

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

  @observable
  age: number = 15;

  @observable
  isAlive: boolean = true;

  @observable
  dollars: number = 10;

  constructor(name: string, lastName: string) {
    // In MobX 6 you need to add this line:
    makeObservable(this);

    this.firstName = name;
    this.lastName = lastName;

    when(
      () => this.age > 99,
      () => this.bury()
    );
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

  @action
  setAge(age: number) {
    this.age = age;
  }

  @action
  bury() {
    this.isAlive = false;
  }

  @computed
  get euros() {
    console.log('Calculating euros!');
    return this.dollars * 2;
  }

  @action
  spentMoney() {
    this.dollars = this.dollars - 1;
  }
}

const newPerson = new Person('Max', 'Ro');

// Runs every time we change person (Autorun reaction)
autorun(() => {
  console.log(`Person:
    firstName: ${newPerson.firstName},
    lastName: ${newPerson.lastName},
    age: ${newPerson.age},
    money: ${newPerson.euros},
    isAlive: ${newPerson.isAlive}
  `);
});

// Reaction (returns disposer - always call the disposer to clean up)
const disposer = reaction(
  () => newPerson.isAlive === false,
  () => console.log('RIP')
);

// Action (option 2)
runInAction(() => {
  newPerson.firstName = 'From running action';
});

// Action (option 3)
const updater = action(() => {
  newPerson.firstName = 'from action function';
});

updater();

newPerson.spentMoney();
newPerson.spentMoney();

newPerson.updateFirstName('Maxim');
newPerson.updateLastName('Romanov');

newPerson.updateFulName('Lena', 'Golikova');

runInAction(async () => {
  newPerson.firstName = 'Async';
  await fakePromise;
  newPerson.lastName = 'Example';
});

newPerson.setAge(100);

disposer();

const some = {};

export default some;
