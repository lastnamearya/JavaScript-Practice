function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}

function logA() {
  console.log("A");
}

function logB() {
  console.log("B");
}

function logCAndThrowError() {
  console.log("C");

  throw new Error();
}

function catchError() {
  console.log("Error");
}

getPromise()
  .then(logA)
  .then(logB)
  .then(logCAndThrowError)
  .catch(catchError);
