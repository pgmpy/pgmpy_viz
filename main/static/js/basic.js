var currentState = null;

/*
drawMode = 10,
addNOdes = 11,
addEdges = 12,
postModel = 13,
analysisMode = 20,
*/

var nodes = new Array();
var edges = new Array();

$("#drawMode").click(function(event) {
    currentState = 10;
    var buttons = 
        "<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> \
            Start Adding Nodes \
        </button> \
        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'> \
            Start Adding Edges \
        </button> \
        <button type='button' id='postModel' onclick='postModel();'> \
            Post Model \
        </button>"
    $('#modeButtons').html (buttons);
});

$("#analysisMode").click(function(event) {
    //console.log("lund")
    currentState = 20;
    var buttons =
        "<button type='button' id='addNodesMode' onclick='initAddNodesMode();'> \
            loda mera \
        </button> \
        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'> \
            loda tera \
        </button> \
        <button type='button' id='postModel' onclick='postModel();'> \
            loda apna \
        </button>"
    $('#modeButtons').html(buttons);
});

/*$("#cy").click(function(event) {
    console.log("lund");});
*/
function getMousePos(canvas, event) {

  var mouseX = event.pageX - canvas.offsetLeft;
  var mouseY = event.pageY - canvas.offsetTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

/*
function functions() {
$("#cy").click(function(event) {
console.log("Hello");
    }


$(document).ready(function(event) {
    //console.log("bhag");
    //cy = this;
});*/

$(loadCy=function() {
    options ={
        ready:function() {
            cy=this;
        }
    };
    $("#cy").cytoscape(options);
});

$("#cy").click(function(event) {
    if (currentState == 10) {
        pos = getMousePos(this, event);
        nodeId = "defaultId";        
        cy.add([
            {group: "nodes", data: {id: nodeId}, renderedPosition: pos},
            ]);
        $("#defaultId").click(function(event) {
        console.log("chut");})
    }
});
