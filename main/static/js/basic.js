/*
drawMode = 10,
addNodes = 11,
addEdges = 12,
postModel = 13,
analysisMode = 20,
hideDrawMode = 15,
show analysisModeState = 1,
hide analysisModeState = 2,
deleteNode_start = 3 
deleteNode_stop = 4
*/
var deleteNode = 3;
var currentState = null;
var edgeSource = null;
var edgeTarget = null;
var analysisModeState = null;
// Initialize cytoscape.js
$(loadCy=function() {
    options ={
        showOverlay : false,
        ready:function() {
            cy = this;
        }
    };
    $("#cy").cytoscape(options);
});

function getMousePos(canvas, event) {
  var mouseX = event.pageX - canvas.offsetLeft;
  var mouseY = event.pageY - canvas.offsetTop;
  return {
    x: mouseX,
    y: mouseY
  };
}
var buttons1 = 
        "<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> Start Adding Nodes </button> \
        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'> Start Adding Edges </button> \
        <button type='button' id='postModel'> Post Model </button> \
        <button type='button' id='deleteElement' onclick='initdeleteElementMode();'>Delete Element</button>";
var buttons2 =
		"<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> button 1 </button> \
        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'>  button 2 </button> \
        <button type='button' id='postModel' onclick='postModel();'> button 3 </button>";

$("#drawMode").click(function(event) {
	if(currentState== null && analysisModeState!=1)
	{
    currentState = 10;
    $('#modeButtons').html(buttons1);
}
else if(currentState== null && analysisModeState==1)
	{
    currentState = 10;
    analysisModeState = 2;
    $('#analysisModeButtons').hide();
    $('#modeButtons').html(buttons1);
}
else if(currentState == 10)
{
	currentState = 15;
	$('#modeButtons').hide();
}
else if(currentState == 15 && analysisModeState!=1)
{
	currentState = 10;
	$('#modeButtons').show();
}
else if(currentState == 15 && analysisModeState == 1)
{
	analysisModeState = 2;
	currentState = 10;
	$('#analysisModeButtons').hide();
	$('#modeButtons').show();
}	
});
$("#analysisMode").click(function(event) {
	if(analysisModeState == null && currentState!=10)
	{
    analysisModeState = 1;
    $('#analysisModeButtons').html(buttons2);
}
else if(analysisModeState == null && currentState == 10)
{
	analysisModeState = 1;
	$('#modeButtons').hide();
	currentState = 15;
    $('#analysisModeButtons').html(buttons2);
}	
else if(analysisModeState == 1)
{
	analysisModeState = 2;
	$('#analysisModeButtons').hide();
}
else if(analysisModeState == 2 && currentState == 10)
{
	analysisModeState = 1;
	currentState = 15;
	$('#modeButtons').hide();
	$('#analysisModeButtons').show();
}
else if(analysisModeState == 2 && currentState!=10)
{
	analysisModeState = 1;
	$('#modeButtons').hide();
	$('#analysisModeButtons').show();
}
});

$('#postModel').click(function(event) {
    currentState == 13;
    //if (graphcheck()) {
        //postgraph();
    //}
    //else 
        //graph is incorrect.
});

$("#cy").click(function(event) {
    if (currentState == 11) {
        pos = getMousePos(this, event);
        var defName = 'node '+ ( cy.nodes().length + 1 ) ;
        $("#nameForm").remove();
        $("body").append("<div id='nameForm' class = 'well input-append' style = 'width:220px; position:relative ;'>");
        $("#nameForm").append("<input id='textField' type='text' class='span2' style='width:120px;' placeholder='" + defName + "'>");
        $("#nameForm").append("<button id='textSubmit' type='submit' class='btn'>Save</button>");
        $("#nameForm").css({left:pos.x,top:pos.y});
        $("#textField").focus();
        if(checkName(defName)==false){
            $("#nameForm").append("<span id='notifSpan' class='help-inline' style='color:red;'>Default name is being used.</span>");
            $("#textSubmit").removeClass().addClass('btn btn-warning');
            $("#textSubmit").prop('disabled',true);
        }
        $("#textField").on("change keyup paste",function(event){
            $("#notifSpan").remove();
            $("#textSubmit").prop('disabled',false);
            if($("#textField").val()==""){
                $("#textSubmit").removeClass().addClass('btn');
                if(checkName(defName)==false){
                    $("#nameForm").append("<span id='notifSpan' class='help-inline' style='color:red;'>Default name is being used.</span>");
                    $("#textSubmit").removeClass().addClass('btn btn-warning');
                    $("#textSubmit").prop('disabled',true);
                }
            }
            else{
                if(checkName($("#textField").val())){
                    $("#textSubmit").removeClass().addClass('btn btn-success');
                }
                else{
                    $("#nameForm").append("<span id='notifSpan' class='help-inline' style='color:red;'>Node name is being used.</span>");
                    $("#textSubmit").removeClass().addClass('btn btn-danger');
                    $("#textSubmit").prop('disabled',true);
                }
            }
            if(event.keyCode==13)
                $("#textSubmit").click();
        });
        $("#textSubmit").click(function(event){
            if($("#textField").val()=="")
                var nodeName = defName;
            else
                var nodeName = $("#textField").val();     
            $("#nameForm").remove();
            cy.add([
                {group: "nodes", data: {id: 'node'+cy.nodes().length, name: nodeName},renderedPosition: pos},
                ]); 
            cy.nodes().unselect();
            return false;
        });
    }
    else if (currentState == 12) {
        if(cy.$("node:selected").data() == null){
            cy.nodes().unselect();
            cy.style().resetToDefault().update();
        }
        else{
            if(edgeSource == null){
                edgeSource = cy.$("node:selected").data("id");
                cy.$("node:selected").css("background-color", "#67F8A6");
            }
            else if (edgeSource !=null && edgeTarget == null){
                edgeTarget = cy.$("node:selected").data("id");
                if(checkEdge(edgeSource,edgeTarget) && checkLoop(edgeSource,edgeTarget)){
                    cy.add([
                        {group:"edges", data : {id:'edge'+cy.edges().length, source:edgeSource, target:edgeTarget}},
                    ]);
                }
                edgeTarget = null;
                edgeSource = null;
                cy.style().selector('node').resetToDefault().update();
                cy.style().selector('edge').css('target-arrow-shape','triangle').update();
            }
        }	
        return false;
    }
});
