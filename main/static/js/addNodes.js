function initAddNodesMode() {
    if (currentState == 11) {
        currentState = 10;
        $("#addNodesMode").text("Start Adding Nodes");
    }
    else if (currentState == 10) {
        currentState = 11;
        $("#addNodesMode").text("Stop Adding Nodes");
    }
    return;
}