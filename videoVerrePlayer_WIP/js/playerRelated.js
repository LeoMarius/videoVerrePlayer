function onYouTubePlayerAPIReady() {
    
    youTubePlayerAPIReady = true;
    console.log("API YouTube OK");

/*    player = new YT.Player('player', {
        height: hauteurFenetre,
        width: largeurFenetre,
        videoId: 'jyZbt5obvQg',

        ///Les parametres du lecteur video
        playerVars: {
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1
        },

        ///Les events auxquels je fait appel
        events: {
            'onStateChange': stateChange,
            'onReady': onPlayerReady,
        }
    });*/
    
    
}



function stateChange(event) {

    if (event.data == YT.PlayerState.PLAYING) {
        timestamp_callback();
    } else {
        clearTimeout(timer);


    }
};



function onPlayerReady(event) {
    var embedCode = event.target.getVideoEmbedCode();
    //  event.target.playVideo();

    //    var dureeVideo = player.getDuration();

    respondCanvas();
    updateProgressBar();

}

const getVideoThumbnail = videoID => (url === null) ? '' : 'http://img.youtube.com/vi/' + videoID + '/0.jpg';

function updateProgressBar() {

    let current_time = player.getCurrentTime(),
        dureeVideo = player.getDuration(),
        percentVideo = current_time / dureeVideo,
        percentFormated = percentVideo * 100 + "%";
    
    $('#myBar').css("width", percentFormated);
    
    var miseAJour = setTimeout(updateProgressBar, 1000);
    
}

$('#myProgress').on('click', function (event) {


    console.log("j'ai cliqué sur la barre de progression");


    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var posXProgress = $("#myProgress").offset().left;
    var largeurProgress = $("#myProgress").width();

    var percentClicProgress = ((mouseX - posXProgress) / largeurProgress) * 100;

    var dureeVideo = player.getDuration();

    var momentVideo = dureeVideo * percentClicProgress / 100;


    player.seekTo(momentVideo, true);



});
