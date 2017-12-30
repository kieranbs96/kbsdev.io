// $("p").css("background", "pink");
// $(".select p").css(styles);
// $("#selectme p").css({
// 	fontSize: "10px",
// 	margin: "5px",
// 	padding: "5px"
// });
// $("div a");

// var styles = {
// 	backgroundColor: "pink", 
// 	fontWeight: "bold"
// };

$("div").css("backgroundColor", "purple");
$("div.highlight").css("width", "200px");
$("div#third").css("border", "1px solid orange");
$("div:first-of-type").css("color", "pink");

$("ul > li:first-of-type").text("Replaced by JS");
$("ul > li:last-of-type").html("<b>Ignore</b>");


$("img").css({
	width: "auto",
	height: "auto",
	maxWidth: "300px"
});
$("img:first-of-type").attr("src", "../img/pup2.jpg");

$("input").attr("type", "color");
$("input").attr("type", "input");
$("input").val("");

$("img").last().attr("src", "../img/pup2.jpg");

$("img:first-of-type").click(function() {
	$(this).attr("src", "../img/pup.jpg");
	var text = $(this).attr("src");
	console.log(text + " clicked.")
	$(this).fadeOut();
});

$("li:first-of-type").addClass("done");
$("li").addClass("wrong");
$("li").last().addClass("correct");
$("li").last().removeClass("wrong");
$("li").toggleClass("done");

$("input").keypress(function() {
	console.log(event.which);
	if(event.which === 118) {
		alert("You pressed the button!!!!");
	}
});

$("input").on("dblclick", function() {
	console.log("Double Clicked")
});

$("h1").on("click", function() {
	$(this).css("color", "purple");
});

$("select").on("mouseover", function() {
	$(this).css("float", "right");
});

$("img").last().on("mouseenter", function() {
	$(this).fadeToggle("slow", function() {
		$(this).slideToggle();
	});
});