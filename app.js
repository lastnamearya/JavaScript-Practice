function createPerson() {
  var firstName = 'Jigyasu';
  var lastName = 'Arya';
  var returnObj = {
    getFirstname: function() {
      return firstName;
    },
    setFirstName: function(firstName) {
      firstName = firstName;
    },
    setLastName: function(lastName) {
      lastName = lastName;
    },
    getLastName: function() {
      return lastName;
    }
  };
  return returnObj;
}

var person = createPerson();

console.log(person.getFirstname());
console.log(person.getLastName());
