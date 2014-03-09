function initAddEdgesMode() {
    if (currentState == 12) {
        currentState = 10;
        $("#addEdgesMode").text("Start Adding Edges");
    }
    else if (currentState ==10) {
        currentState = 12;
        $("#addEdgesMode").text("Stop Adding Edges");
    }
    return;
}