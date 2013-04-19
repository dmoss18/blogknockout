$(document).ready(function() {
  function BaseViewModel(tName) {
  	this.templateName = tName;
  }
  //Base class for all viewmodels
  //Handles switching of template on page
  BaseViewModel.prototype = {
  	updateViewModel : function(templateName, options) {
  		ko.applyBindings(new this.viewModels[templateName](options));//viewModels is a container attached to the prototype (this)
  	}
  };
  
  //Initialize viewModels container
  BaseViewModel.prototype.viewModels = { "Home" : HomeViewModel, "Posts" : PostsViewModel, "Post" : PostViewModel};

  ko.applyBindings(new HomeViewModel());
});

  function PostsViewModel() {
  	var self = this;
  	BaseViewModel.call(self, "Posts");
  	
  }
  PostsViewModel.prototype = Object.create(BaseViewModel.prototype);

  function PostViewModel(post) {
  	var self = this;
  	BaseViewModel.call(self, "Post");
  	self.post = new Post();
  }
  PostViewModel.prototype = Object.create(BaseViewModel.prototype);

  function HomeViewModel() {
  	var self = this;
  	BaseViewModel.call(self, "Home");
  }
  HomeViewModel.prototype = Object.create(BaseViewModel.prototype);

function Post(post) {
	var self = this;
	this.id = post.id;
}
