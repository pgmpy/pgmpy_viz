/*
drawMode = 10,
addNOdes = 11,
addEdges = 12,
postModel = 13,
analysisMode = 20,
*/
var currentState = null;
var nodesArray = new Array();
var edgesArray = new Array();

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
        <button type='button' id='addEdgesMode'> Start Adding Edges </button> \
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
	var nodeName = namePrompt(pos, 'node'+nodesArray.length);
        var nodeId = 'node' + String(nodesArray.length);
        cy.add([
            {group: "nodes", data: {id: nodeId, name: "default"},
            renderedPosition: pos},
            ]);
//TODO: reaplace this shitty promt with a kickass box for entering nodename.        
        cy.elements("node#"+nodeId).data('name', nodeName);
        nodesArray.push(nodeName);
    }
    else if (currentState == 12) {
        //Code to add edges
    }
});
