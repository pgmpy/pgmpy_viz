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

$(loadCy=function() {
    options ={
        showOverlay : false,
        ready:function() {
            cy = this;
        }
    };
    $("#cy").cytoscape(options);
});

/*User will click on #cy, a node will be added with a default name "defaultName". A box will pop up and will show "node i" as default name. i is node array length+1 . The name entered will be the div id of the node and the entry of array. */

$("#cy").click(function(event) {
    if (currentState == 10) {
        pos = getMousePos(this, event);
        var nodeId = "default";
        cy.add([
            {group: "nodes", data: {id: nodeId}, renderedPosition: pos},
            ]);
        nodeId = prompt("node ka naam daal","Node " + (1 + nodes.length));
//TODO: Nodes start from "Node 0" or "Node 1"??
//TODO: reaplace this shitty promt with a kickass box for entering nodename.
        nodes.push(nodeId);
        //write the code to access the nodes by id and change their id to nodeId.         
        //$("data(id)").attr("id", nodeId );
        console.log(nodes);
        //$("#def").attr("div", nodeId);
    }
});
