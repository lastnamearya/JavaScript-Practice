var i = 0;

for (var i; i < 10; i++) {
  // Now the Garbage collector won't remove the values of currentValue on every execution
  (function() {
    var currentValue = i;
    setTimeout(function() {
      console.log(currentValue);
    }, 1000);
  })();
}
