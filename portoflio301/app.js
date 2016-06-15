
var projects = [];

var articleView = {};

function Project(activity) {
  this.name = activity.name;
  this.location = activity.location;
  this.experience = activity.experience;
  this.gear = activity.gear;
}

Project.prototype.toHtml = function(){
  var $newProject = $('div.projects').clone();
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
  console.log(a.toHtml().html());
});

$('.projects').remove();

articleView.populateFilters = function() {
  for (var i = 0; i < projectData.length; i++){
    var experience = projectData[i].experience;
    var experienceTag = '<option value="' + experience + '" >' + experience + '</option>';
    if ($('#filter1 option[value="' + experience + '"]').length === 0){
      $('#filter1').append(experienceTag);
    }
  }
};


articleView.populateFilters();
// trying to create a new project and have it appear on the page, but it is not working
var swimming = new Project('water','pool','5 years','swimsuit');
projectData.push(swimming);

function handleMainNav() {
  $('.main-nav').on('click', '.tab', function(e){
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();

}

handleMainNav();
