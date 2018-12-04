// Generator ~ A function that returns multiple values and can be paused and stopped anytime for the infinite time so you can pass information to at the later point of time.

// function listPeople() {
//   console.log('wes');
//   console.log('Kait');
//   console.log('Snickers');
// }

// listPeople();

// A generator function is identified by the asterick sign with function keyword

function* listPeople() {
  // yield keyword ~ returns multiple values

  yield 'Wes';
  yield 'Kait';
  yield 'Snickers';
}

// It'll return an object that have a vaue equals to function return value and a done property that has a boolen value shows whether the genertor is done or not. In the final when you got done: true then value at that time is undefined.

const people = listPeople();

// To call people use .next() by saving it's refernce in a seprate variable otherwise if we do listPeople().next() then it keeps on returning the same first value.

// A generator function keeps its variable in memory cache until its finished.

function* generator() {
  let i = 0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
}

const i = generator();

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Planck', year: 1858 }
];

function* loop(arr) {
  // Only console.log for the first time
  console.log(inventors);
  for (const item of arr) {
    yield item;
  }
}

const inventorGen = loop(inventors);
