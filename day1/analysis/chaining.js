$('li[id!="one"]').hide().delay(500).fadeIn(1400); //all list items except "one" are hidden for 500 milliseconds, after which it fades in over the course of 1400 milliseconds
$('li:first-child').addClass('next'); //adds class 'next' to the first li
$('li.priority').addClass('highlight'); //highlights li with class 'priority'
