// async function always return a promise, if we're returning a value then it's going to wrap that value in a function.

async function add(x, y) {
  return x + y;
}

add(1, 2).then(result => console.log(result));
