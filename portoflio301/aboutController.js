(function(module){
  var aboutController = {};

  aboutController.index = function() {
    $('#projectsHandle').hide();
    $('#home').hide();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
