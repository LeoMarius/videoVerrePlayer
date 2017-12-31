function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function loadJSON(target) {


    /////////////////////////////////////////
    
    console.log(target);


    var jqxhr = $.getJSON(target, function () {
            console.log("success");
        })
        .done(function () {
            console.log("second success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });

    // Perform other work here ...

    // Set another completion function for the request above
    jqxhr.complete(function () {

        var video = jqxhr.responseJSON;

        listeVideos.push(video)
        console.log(listeVideos);
        
        updateVideoList(listeVideos[listeVideos.length-1]);
    });

}

function listAllFiles(filesDir, fileExt) {

    var filesListed = [];

    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'

        url: filesDir,
        success: function (data) {
            //     console.log(data);
            //  $("#fileNames").html('<ul>');
            //List all xml file names in the page

            $(data).find("a:contains(" + fileExt + ")").each(function () {

                var fileName = $(this).text();
                var filePath = filesDir + fileName;

                filesListed.push(filePath);

                //      console.log(filePath);

            });


            //  $("#fileNames").append('</ul>');
        },
        complete: function (data) {

            //   var arr = Object.values(filesListed);


            console.log(filesListed);
            //return filesListed;

            for (var i = 0; i < filesListed.length; i++) {

                //     loadJSON(filesListed[i]);
                console.log(filesListed[i]);

                loadJSON(filesListed[i]);
            }
        }
    });

};

function hideAllCenterContents(restoredContent) {



    $(".centerContents").each(function () {

/*
        var alreadyHidden = $(this).hasClass("hidden");
*/

/*        if (alreadyHidden == false) {
            lastVisibleCenterContent.push(this);
            //     console.log(this);

        }*/
        $(this).addClass("hidden")
    });

    if (restoredContent) {
        $("" + restoredContent + "").removeClass("hidden");
    }

};

function getIDFromDiv(divID, firstNumber) {
    var isNumber = true;
    var returnedID = "";
    var posInDivID = firstNumber;

    while (isNumber == true) {
        var testedNumber = divID.charAt(posInDivID);
        var testedIsNumber = Number.isInteger(parseInt(testedNumber));

        if (testedIsNumber == true) {
            var stringedNumber = testedNumber.toString();
            returnedID = returnedID + stringedNumber;
            posInDivID += 1;
        } else {
            isNumber = false;
        }
    }
    if (returnedID == "") {
        console.log("getIDFromDiv : Il y a un soucis dans l'entrée");
    }
    console.log("id div " + divID + " : " + returnedID);
    return (returnedID);
}