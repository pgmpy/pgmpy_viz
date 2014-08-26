function checkEdge(sourceId,targetId){
    var targets = cy.elements('edge[source="'+sourceId+'"]').target();
    if (targets==null)
        var n = 0;
    else
        var n = targets.length;
    for(var i=0;i<targets.length;i++){
        if (targetId==targets[i].data("id"))
            return false;
    }
    return true;
}

function checkName(val){
    var allNodes = cy.nodes();
    for(var i = 0;i<cy.nodes().length;i++)
        if(val==allNodes[i].data("name"))
            return false;
    return true;
}

function checkLoop(source,target){
    if (source==target)
        return false;
    else{
        var children = cy.elements('edge[source="'+target+'"]').target();
        if (children!=null){
            for (var i=0;i<children.length;i++){
                if(checkLoop(source,children[i].data("id"))==false)
                    return false;
            }
        }
    }
    return true;
}
