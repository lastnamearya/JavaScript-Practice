// Event Bubbling and Capturing, tracked by the help of Closure.

var items = document.getElementsByClassName('item');

for (var i = 0; i < items.length; i++) {
  (function() {
    var y = i;
    items[i].addEventListener(
      'click',
      function(event) {
        console.log(items[y], event);
      },
      false // false is default for the Event Bubbling, for Event Capturing make it true.
    );
  })();
}
