$(function(){
//starting with anonymous function
$('#js-shopping-list-form').submit(function(event){
//targeting the <form> element and watching for any submissions of information
	event.preventDefault();
	//preventing the default behaviour of form submission that looks for server
	const storeItem = $('#shopping-list-entry').val();
	//creating a variable storeItem for any text that is submitted through the form. .val() takes the value of whatever is submitted

$('#shopping-list-entry').val('');

	$('.shopping-list').append(
		`<li>
			<span class="shopping-item">${storeItem}</span>
			<div class="shopping-item-controls">
				<button class="shopping-item-toggle">
					<span class="button-label">check</span>
				</button>
				<button class="shopping-item-delete">
					<span class="button-label">delete</span>
				</button>
			</div>
		</li>`);
	//adds the above HTML code using .append()
});

$('.shopping-list').on('click', '.shopping-item-delete', function(event){
	//event looking for a click on .shopping-item-delete buttons
	$(this).closest('li').remove();
	//.closest targets the closest li element and .remove() deletes it!
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
	//event looking for a click on .shoppin-item-toggle buttons
	$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	//.closest targets the closest li element, .find() targets .shopping-item which is the class of the span with text
	//toggleClass() adds the class .shopping-item__checked which is referenced in the CSS to add a strikethrough effect

});


});