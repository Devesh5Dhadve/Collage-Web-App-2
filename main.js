var SpeechRecongntion = window.webkitSpeechRecognition;

var recongntion = new SpeechRecongntion();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recongntion.start();
}

recongntion.onresult = function(event) {

    console.log(event);

    var Content = event.result[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}
