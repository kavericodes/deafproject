var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function recordButton(){
    document.getElementById("textarea").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = content;
    console.log(content);
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textarea").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function back(){
    window.location = "home.html";
}