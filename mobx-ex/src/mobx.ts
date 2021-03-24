//@ts-nocheck

// Simple example, how mobx works under the hood

const person = {
  firstName: 'Max',
  lastName: 'Ro',
};

let reaction;

const mobxCourse = {
  // Register a reaction for our object and then call it
  autorun: function (cb) {
    reaction = cb;
    cb();
    reaction = null;
  },
  observable: function (obj) {
    // Our stack of the reactions we will store in the Set
    const reactions = new Set();
    // We need to change getters and setters for Proxy
    const handler = {
      get: function (obj, prop) {
        // Add reaction to the stack
        if (reaction) {
          reactions.add(reaction);
        }
        // Just return the prop
        return obj[prop];
      },

      set: function (obj, prop, value) {
        obj[prop] = value;
        // Here we call all the reactions from the stack when we change the oject
        for (reaction of reactions) {
          reaction();
        }
        // We need to return the result (true or false) from the setter
        return true;
      },
    };

    // wrap our object with Proxy (Proxy will handle all the get and set actions)
    return new Proxy(obj, handler);
  },
};

const ourPerson = mobxCourse.observable(person);

mobxCourse.autorun(() => {
  console.log(`Our Person: ${ourPerson.firstName} ${ourPerson.lastName}`);
});

ourPerson.firstName = 'New name';
ourPerson.lastName = 'New LastName';

export { mobxCourse };
