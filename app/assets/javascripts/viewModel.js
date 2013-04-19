$(document).ready(function() {
  var BaseViewModel = Object.extend({
    init: function() {
      var self = this;
      self.updateViewModel = function(name) {
        ko.applyBindings(eval('new ' + name + 'ViewModel()'));
      }
    }
  });

  var HomeViewModel = BaseViewModel.extend({
    init: function() {
      var self = this;
      self.templateName = 'home';
    }
  });
  /*function HomeViewModel() {
    var self = this;
    self.templateName = 'home';
  }*/

  window.blogApp = {};
  window.blogApp.viewModel = new HomeViewModel();
  ko.applyBindings(window.blogApp.viewModel);

  window.blogApp.updateViewModel = function(name) {
    var viewModel = eval('new ' + name + 'ViewModel()');
    window.blogApp.viewModel = viewModel;
    ko.applyBindings(window.blogApp.viewModel);
  };

  function PostsViewModel() {
    var self = this;
    self.templateName = 'posts';
  }
});

/*function PostsViewModel() {
  var self = this;
  self.templateName = 'posts';
}*/
