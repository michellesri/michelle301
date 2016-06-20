(function(module) {
  var articlesController = {};

  // TODO DONE: Create the `articles` table when the controller first loads, with
  //       code that was previously in index.html.
  Article.createTable();

  // TODO DONE: Make the function below fetch and render the articles. It should look
  //       very similiar to code you wrote before.
  // TODO DONE: Hide the main section elements; reveal the #articles section:
  articlesController.index = function() {
    Article.fetchAll(articleView.initIndexPage);
    $('#articles').show();
    $('#about').hide();

  };

  module.articlesController = articlesController;
})(window);

  // article controller stuff that we got from index.html
  // Article.createTable();
  // Article.fetchAll(articleView.initIndexPage);
