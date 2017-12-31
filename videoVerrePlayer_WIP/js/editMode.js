

function activateEditMode(videoID) {

    editModeActivated = true;
    recordActivated = true;

    jsonToExport.videoName = "myNewTest";
    jsonToExport.videoID = videoID;
    jsonToExport.descrition = "A completer";
    jsonToExport.actions = []

    console.log(jsonToExport);

};


$(document).keydown(function (event) {


    console.log(event.which);
    var keyCodePressed = event.which;

    /// Vérification de la class des objets cliqués
    /// Si une des classes listée dans le tableau "blockedDiv" est cliquée, on n'execute pas la suite de cette fonction


    if (editModeActivated == true) {
        keyPushedTime = player.getCurrentTime();

        var maPosDansLeTableauTemp;

        for (y = 0; y < tempKeyPressed.length; y++) {

            var keyCodeTableau = tempKeyPressed[y].keycode;

            if (keyCodeTableau == keyCodePressed) {
                maPosDansLeTableauTemp = y;
                break;
                console.log("on m a trouver");
            } else {
                maPosDansLeTableauTemp = null;
            }
        };

        if (maPosDansLeTableauTemp != null) {

            tempKeyPressed[maPosDansLeTableauTemp].pushed = keyPushedTime;

        } else {

            var nouvelEntree = {
                keycode: keyCodePressed,
                pushed: keyPushedTime
            };
            tempKeyPressed.push(nouvelEntree);
        };
    }
    console.log(tempKeyPressed);


});


$(document).keyup(function (event) {

    var keyCodeReleased = event.which;
    // console.log(keyCodePressed);

    if (editModeActivated == true) {

        var alreadyExist = false;
        var tempClass;

        var targetedAction;

        var keyPressedTime,
            keyReleasedTime = player.getCurrentTime();

        var maPosDansLeTableauTemp;
        for (y = 0; y < tempKeyPressed.length; y++) {

            var keyCodeTableau = tempKeyPressed[y].keycode;

            if (keyCodeTableau == keyCodeReleased) {
                maPosDansLeTableauTemp = y;

                keyPressedTime = tempKeyPressed[y].pushed;
                break;
            } else {
                maPosDansLeTableauTemp = null;
                console.log("on m' 'a pas trouvée");
            }
        };



        var newEvent = {
            eventStart: keyPressedTime,
            eventEnd: keyReleasedTime,
        };


        for (x = 0; x < jsonToExport.actions.length; x++) {
            if (jsonToExport.actions[x].nom == keyCodeReleased) {
                console.log("action deja existante");
                targetedAction = x;
                break;
            }
        }

        if (targetedAction != null) {

            jsonToExport.actions[targetedAction].eventList.push(newEvent);

        } else {


            var newAction = {
                "nom": keyCodeReleased,
                "toleranceBefore": 0,
                "toleranceAfter": 0,
                "eventList": [newEvent]
            };

            jsonToExport.actions.push(newAction);

        }
    }

});




$('body').on('click', '#recordBtn', function () {


    saveText();


});