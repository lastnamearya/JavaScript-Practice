const trial = {
  tryOne: function() {
    console.log(this);

    var self = this;

    function tryTwo() {
      console.log(this);
    }
    tryTwo.call(self);
  }
};

trial.tryOne();
