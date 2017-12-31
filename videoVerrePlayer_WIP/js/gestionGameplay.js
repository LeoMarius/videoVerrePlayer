function initialiseAction(videoIDToLoad) {


    //  listeVideos[0].videoID
    loadPlayer(listeVideos[videoIDToLoad].videoID);

    hideAllCenterContents("#player");


}


$('body').on('click', '.videoStart', function () {

    var toto = $(this).parent().parent().attr('id');

    console.log(toto);

    var videoIDClicked = getIDFromDiv(toto, 5);

    initialiseAction(videoIDClicked);

});