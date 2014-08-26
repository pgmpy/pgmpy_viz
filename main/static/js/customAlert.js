function customAlert(toShow){
	$("#customDialog").text(toShow);
	$("#customDialog").dialog({
        modal:true,
		height:300,
		width:300,
		open: function(event, ui){
			setTimeout("$('#customDialog').dialog('close')",500);
		}
    });
	return;
}