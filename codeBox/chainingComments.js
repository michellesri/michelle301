$('li[id!="one"]').hide().delay(500).fadeIn(1400); // semi-colon indicates end of chaining - can be writen on separate lines
// selects all the list items except for the list item with id 'one'. hides all of them, waits 500 miliseconds and then fades in in 1400 miliseconds
$('li:first-child').addClass('next');
// this is seleting the first-child of the list item and gives it a class of class='next'
$('li.priority').addClass('highlight');
//selects the list item with class priority and add a class called highlight? not entirely sure because i couldn't find a priority class in the list item already. also not sure how the class highlight can be added on top of an exisiting class? this makes me realize that i might not be reading li.priority correctly. but i thought that .priority meant looking for a class item called priority.
