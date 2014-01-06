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
        </button>" 
/*        <button type='button' id='addEdgesMode' onclick='initAddEdgesMode();'> \
            Start Adding Edges \
        </button> \
        <button type='button' id='postModel' onclick='postModel();'> \
            Post Model \
        </button>"*/
    $('#modeButtons').html (buttons);
});

/*
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
});
*/

$(loadCy=function() {
    options ={
        ready:function() {
            cy = this;
        }
    };
    $("#cy").cytoscape(options);
});

//var node_id = "0";
/*$("#harry").click(function(event) {
    console.log("choot");});
    
$("#charry").click(function(event) {
    console.log("bhoot");});
*/
/*User will click on #cy, a node will be added with a default name "defaultName". A box will pop up and will show "node i" default name. i is the current arr length+2 of node array. The name entered will be the div id of the node and the entry of array. */

$("#cy").click(function(event) {
    if (currentState == 10) {
        pos = getMousePos(this, event);
        var nodeId = "default"
        cy.add([
            {group: "nodes", data: {id: "default"}, renderedPosition: pos},
            ]);
        nodeId = prompt("node ka naam daal","node " + nodes.length);
        console.log(nodeId);
        nodes.push(nodeId);
        //cy.nodes = "default").attr("id", nodeId);
        //$("#default").attr("id", nodeId );
        console.log(nodes);
        //$("#def").attr("div", nodeId);
        //nodeId = prompt("Please enter your name","harry");
        //node_id = (parseInt(node_id)+1).toString();
        //console.log("node_id " + node_id);
        //console.log(nodeId);
    }
    }
);
