function namePrompt(pos,defName){
	$("#nameForm").remove();
	$("body").append("<form id='nameForm' class = 'well' style = 'height:90px ;width:200px ;position:relative ;'>");
	$("#nameForm").append("<input id='textField' type='text' class='span3' placeholder=" + defName + ">");
	$("#nameForm").append("<button id='textSubmit' type='submit' class='btn'>Submit</button>");
	$("#nameForm").css({left:pos.x,top:pos.y});
	$("#textSubmit").click(function(event){
		if($("#textField").val()==""){
			var nodeName = defName;
		}
		else{
			var nodeName = $("#textField").val();
		}
		$("#nameForm").remove();
		return nodeName;
	});
}
