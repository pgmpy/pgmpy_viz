function initAddEdgesMode() {
    if (currentState == 12) {
        currentState = 10;
        $("#addEdgesMode").text("Start Adding Edges");
        customAlert("Edges are added.");
    }
    else if (currentState ==10) {
        currentState = 12;
        $("#addEdgesMode").text("Stop Adding Edges");
    }
    else if (currentState == 11) {
        currentState = 12;
        $("#addNodesMode").text("Start Adding Nodes");
        customAlert("Nodes are added.");
        $("#addEdgesMode").text("Stop Adding Edges");
    }
    return;
}

