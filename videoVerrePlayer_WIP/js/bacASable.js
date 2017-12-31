function saveText() {
    var musicNinjaEventsString = JSON.stringify(jsonToExport);
    console.log (musicNinjaEventsString);
    
    var blob = new Blob([musicNinjaEventsString], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "hello world.json");
}


function editeurSubmit(theForm) {

    var videoID = theForm.Yid.value;
    console.log(theForm);
    console.log(videoID);
    hideAllCenterContents("#player");
    loadPlayer(videoID);
    activateEditMode(videoID);
}


function loadPlayer(ytID) {

    if (youTubePlayerAPIReady == true) {

        player = new YT.Player('player', {
            height: hauteurFenetre,
            width: largeurFenetre,
            
            videoId: ytID,

            ///Les parametres du lecteur video
            playerVars: {
                controls: 0,
                showinfo: 0,
                rel: 0,
                modestbranding: 1,
                disablekb: 1,
            },

            ///Les events auxquels je fait appel
            events: {
                'onStateChange': stateChange,
                'onReady': onPlayerReady,
            }
        });
        
    } else {
        alert("API pas prête, verifiez votre connection");
    }
}