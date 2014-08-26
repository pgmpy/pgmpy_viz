function initAddNodesMode() {
    if (currentState == 11) {
        currentState = 10;
        $("#addNodesMode").text("Start Adding Nodes");
        customAlert("Nodes are added.");
    }
    else if (currentState == 10) {
        currentState = 11;
        $("#addNodesMode").text("Stop Adding Nodes");
    }
    else if (currentState == 12) {
        currentState = 11;
        $("#addEdgesMode").text("Start Adding Edges");
        customAlert("Edges are added.");
        $("#addNodesMode").text("Stop Adding Nodes");
    }
    return;
}

