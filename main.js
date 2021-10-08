Webcam.set({

    width:350,
    height:300, 
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snap()
{

    Webcam.snap(function(image){

        document.getElementById("result").innerHTML = '<img id = "captured_image"  src="'+image+'">';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LP1ZdxT52/',modelLoaded);


function modelLoaded() {
    console.log('Model Loaded! 😁😁');
}


function speak(){

    var synth = window.speechSynthesis;
    speak_data_1 = "The First Predication is " + prediction_1;
    speak_data_2 = "The Second Predication is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}