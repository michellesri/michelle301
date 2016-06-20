(function(module) {
  var aboutController = {};

  // TODO DONE: Write this function to hide all main section elements,
  //       then show only the #about section.
  aboutController.index = function() {
    $('#articles').hide();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
