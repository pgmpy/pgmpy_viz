var curr_node;
var xy=0;
function Table (nodeID,parentIDs,possibleStates,rowValues)
{
	this.nodeID=nodeID;
	this.parentIDs=parentIDs;
	this.headStates=null;
	this.subHeadStates=null;
	this.possibleStates=null;
	this.rowValues=null;
	this.add=function(){
			$('#tableMain').append('<tr>');
			var i=headStates.length * subHeadStates.length;
			while (i>0)
			{
				$('#tableMain').append('<td><input type="text" value="test"></td>');
				i--;
			}
			$('#tableMain').append('</tr>');
	}
}
var allTables=null;
var done=false;
console.log(xy);
$('#cy').click(function(event){
	if(!CREATE_NODE_STATE&&!CREATE_EDGE_STATE)
	{
	  curr_node=cy.elements(":selected");
	  if (curr_node.length == 1){
	            done=false;
	            $('#cy').dblclick(function(){
	               if (curr_node.length == 1&&done==false)
	               	{
	               		$('#table').show();
	               		done=true;
	               	}
	            });
	        }
	}
});
$('#add').click(function(){
   $('#table').append('<tr><td><input type="text" value="test"></td><td><input type="text" value="test"></td><td><input type="text" value="test"></td><td><input type="text" value="test"></td></tr>');
});