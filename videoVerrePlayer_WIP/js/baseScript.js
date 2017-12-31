var tableauClassique = [1, "toto", 3];

var allJson = [];
var videoID = 0;

listAllFiles('/js/json/', '.json');

console.log(allJson.length);


function updateVideoList(video) {
    console.log(allJson.length);

    var divAInjecter = "";


    divAInjecter = "";

    var blocSupperieur = '<div id="video' + videoID + '" class="blocsMenu"><div class="videoBloc"><div class="videoInfo"><b>' + video.videoName + '</b><br>';

    var listeActions = '<div class="actionList">';

    for (var y = 0; y < video.actions.length; y++) {

        var cetteAction = video.actions[y].nom + ' - ' + video.actions[y].eventList.length + '<br>';

        listeActions = listeActions + cetteAction;
    }
    listeActions = listeActions + '</div></div>';

    var imageDiv = '<div class="videoImage"> <img src="http://img.youtube.com/vi/' + video.videoID + '/0.jpg" alt="Smiley face" class="thumbnailImgMenu"></div>';

    var leResteDeLaDiv = '<div class="videoStart"><button title="Lancer la vidéo" class="btnStartVideo glyphicon glyphicon-play"></button><button title="Lancer la vidéo" class="btnStartVideo glyphicon glyphicon-cog"></button> </div> </div> </div>';


    divAInjecter = blocSupperieur + listeActions + imageDiv + leResteDeLaDiv;

    $(divAInjecter).appendTo($('#menu'));

    videoID = videoID + 1;


}