//Check off specific todos by clicking
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	if($("li").length === 2) {
		$("#battery").html("<i style='color:white' class='fa fa-battery-half'></i>")
		} else if ($("li").length === 1) {
			$("#battery").html("<i style='color:red' class='fa fa-battery-quarter'></i>")
		} else if ($("li").length === 0) {
			$("#battery").html("<i style='color:red' class='fa fa-battery-empty'></i>")
		}
	});
	event.stopPropagation();
});

//Addin a new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		if($("li").length === 1) {
		$("#battery").html("<i style='color:red' class='fa fa-battery-quarter'></i>")
		} else if ($("li").length === 2) {
			$("#battery").html("<i style='color:white' class='fa fa-battery-half'></i>")
		} else if ($("li").length === 3) {
			$("#battery").html("<i class='fa fa-battery-full'></i>")
		}
	}
})

//Toggle todo input with plus icon
$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle(200);
})

//Delete all to-dos
$("button").click(function(){
	$("li").remove()
	$("#battery").html("<i style='color:red' class='fa fa-battery-empty'></i>")
});