// Event Bubbling and Capturing, tracked by the help of Closure.

var items = document.getElementsByClassName('item');

for (var i = 0; i < items.length; i++) {
  (function() {
    var y = i;
    items[i].addEventListener(
      'click',
      function(event) {
        if (y === 2) {
          // Hook in the Event Cycle
          event.preventDefault();
        }
        // alert(y);
        console.log(items[y], event);
      },
      true // false is default for the Event Bubbling, for Event Capturing make it true.
    );
  })();
}
