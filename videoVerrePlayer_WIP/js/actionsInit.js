var hauteurFenetre = window.innerHeight;
var largeurFenetre = window.innerWidth;

$(window).resize(respondCanvas);




hideAllCenterContents("#menu");


var editModeActivated = false;

var recordActivated = false;

var jsonToExport = {};

var tempKeyPressed = [];

var temporaryActionsList = [];

var listeVideos = [];

var actionsTab = [];

var keyPushedTime;

var actionMusicCrado = "";

// From http://apiblog.youtube.com/2011/01/introducing-javascript-player-api-for.html

var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = false;
ga.src = 'http://www.youtube.com/player_api';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);


var player;

var youTubePlayerAPIReady = false;


var timestamp = 20; /* your timestamp */

var timer;

var timerEvent;

var timerNextEvent;


var rectColortimer;

var nextEvent = 0;

resetRectColor();

var rectangleTimeout;


