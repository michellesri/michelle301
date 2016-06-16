
var projects = [];

var articleView = {};

function Project(activity) {
  this.name = activity.name;
  this.location = activity.location;
  this.experience = activity.experience;
  this.gear = activity.gear;
}

Project.prototype.toHtml = function(){
  var $newProject = $('.projects').clone().attr('data-experience', this.experience).attr('data-location', this.location).attr('class', 'projectClass');
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

articleView.handleExperienceFilter = function() {
  $('#filter1').on('change', function() {

    if ($(this).val()) {
      var thisVal = $(this).val();
      var experienceData = $('[data-experience="' + thisVal + '"]');
      $('.projectClass').not(experienceData).hide();
      experienceData.show();
    }
    // else {
    //   $('article').fadeIn();
    //   $('article.template').hide();
    // }
    // not sure why this else statement is here (it came with blog code)
    $('#filter2').val('');
  });
};
$('.projects').hide();

articleView.handleLocationFilter = function(){
  $('#filter2').on('change', function() {

    if ($(this).val()) {
      var thisVal = $(this).val();
      var locationData = $('[data-location="' + thisVal + '"]');
      $('.projectClass').not(locationData).hide();
      locationData.show();
    }
    $('#filter1').val('');
  });
};

$(function(){
  articleView.populateFilters();
  articleView.handleLocationFilter();
  articleView.handleExperienceFilter();
});
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
