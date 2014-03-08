/*
drawMode = 10,
addNOdes = 11,
addEdges = 12,
postModel = 13,
analysisMode = 20,
*/
var currentState = null;
var edgeSource = null;
var edgeTarget = null;

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

$("#drawMode").click(function(event) {
    currentState = 10;
    var buttons = 
        "<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> Start Adding Nodes </button> \
        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'> Start Adding Edges </button> \
        <button type='button' id='postModel'> Post Model </button>";
    $('#modeButtons').html (buttons);
});

$("#analysisMode").click(function(event) {
    currentState = 20;
    var buttons =
        "<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> loda mera </button> \
        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'>  loda tera </button> \
        <button type='button' id='postModel' onclick='postModel();'> loda apna </button>";
    $('#modeButtons').html(buttons);
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
		var defName = 'node'+cy.nodes().length;
		$("#nameForm").remove();
		$("body").append("<form id='nameForm' class = 'well' style = 'height:90px ;width:200px ;position:relative ;'>");
		$("#nameForm").append("<input id='textField' type='text' class='span3' placeholder=" + defName + ">");
		$("#nameForm").append("<button id='textSubmit' type='submit' class='btn'>Submit</button>");
		$("#nameForm").css({left:pos.x,top:pos.y});
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
		if(cy.$("node:selected").data() ==null){
			cy.nodes().unselect();
		}
		else{
			if(edgeSource == null){
				edgeSource = cy.$("node:selected").data("id");
			}
			else if (edgeSource !=null && edgeTarget == null){
				edgeTarget = cy.$("node:selected").data("id");
				if(edgeTarget != edgeSource && checkEdge(edgeSource,edgeTarget)){
					cy.add([
						{group:"edges", data : {id:'edge'+cy.edges().length, source:edgeSource, target:edgeTarget}},
					]);
					cy.style()
					.selector('edge').css('target-arrow-shape','triangle')
					.update()
					}
				edgeTarget = null;
				edgeSource = null;
			}
		}
		return false;
    }
});

function checkEdge(sourceId,targetId){
	var targets = cy.elements('edge[source="'+sourceId+'"]').target();
	if (targets==null)
		var n = 0;
	else
		var n = targets.length;
	for(var i=0;i<n;i++){
		if (targetId==targets[i].data("id"))
			return false;
	}
	return true;
}