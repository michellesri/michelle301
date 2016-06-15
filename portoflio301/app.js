
var projects = [];

var articleView = {};

function Project(name, location, experience, gear) {
  this.name = name;
  this.location = location;
  this.experience = experience;
  this.gear = gear;
}

Project.prototype.toHtml = function(){
  var $newProject = $('.projects').clone();
  $newProject.removeClass('projects');
  $newProject.find('h2').text(this.name);
  $newProject.find('#one').text(this.location);
  $newProject.find('#two').text(this.experience);
  $newProject.find('#three').text(this.gear);
  return $newProject;

};

projectData.forEach(function(ele){
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projectDiv').append(a.toHtml());
  console.log(a.toHtml());
});

// $('.projects').remove();

// trying to create a new project and have it appear on the page, but it is not working
var swimming = new Project('swim','pool','5 years','swimsuit');
console.log(swimming);
projectData.push(swimming);

articleView.populateFilters = function() {
  for (var i = 0; i < projectData.length; i++){
    var experience = projectData[i].experience;
    var experienceTag = '<option value="' + experience + '" >' + experience + '</option>';
    if ($('#filter1 option[value="' + experience + '"]').length === 0){
      $('#filter1').append(experienceTag);
    }

    var location = projectData[i].location;
    var locationTag = '<option value="' + location + '" >' + location + '</option>';
    if ($('#filter2 option[value="' + location + '"]').length === 0){
      $('#filter2').append(locationTag);
    }
  };
};

articleView.populateFilters();

articleView.handleAuthorFilter = function() {
  $('#filter1').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};
//
// function handleMainNav() {
//   $('.main-nav').on('click', '.tab', function(e){
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn();
//   });
//   $('.main-nav .tab:first').click();
//
// }
//
// handleMainNav();
