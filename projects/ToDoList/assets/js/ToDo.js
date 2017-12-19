var deleteTodo = "<span><i class='fal fa-trash-alt'></i></span>";

$("ul").on("click", "li", function() {
	$(this).toggleClass("complete");
});

$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li>" + deleteTodo + todoText + "</li>");
	}
});

$("h1 span").on("click", function() {
	$("input[type='text']").slideToggle();
});