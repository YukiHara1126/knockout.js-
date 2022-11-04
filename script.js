function ViewModel() {
  var self = this;
  self.pureComputedExecutions = 0;
  self.computedExecutions = 0;
  self.numberOfClicks = ko.observable(0);

  self.pureComputedFullName = ko.pureComputed(function() {
    console.log("purecomputed")
    self.pureComputedExecutions++;
  });

  self.computedFullName = ko.computed(function() {
    console.log("computed")
    self.computedExecutions++;
  });

  // viewmodel内で関数を作成する方法は？
  function incrementClickCounter() {
    var previousCount = self.numberOfClicks();
    self.numberOfClicks(previousCount + 1);
  }
};


var viewModel = new ViewModel();
ko.applyBindings(viewModel);

alert('Pure computed executions: ' + viewModel.pureComputedExecutions);
alert('Computed executions: ' + viewModel.computedExecutions);